<script setup>
import NavItem from './MainNavItem.vue'
import { ref, onMounted, computed } from 'vue'
import { supabase } from '../lib/supabaseClient'
import { favData } from '../const/fav_data'
import { hatgeonData } from '../const/hatgeon_data'

const tags = ref([])
const isItemHovered = ref(false)
const selectedItem = ref({
  name: 'Начальное состояние',
  color_start: '#fff',
  color_end: '#000'
})

function RenderText(text) {
  let words = text.split(' ')
  let result = '<span class="font-bold">' + words.shift() + '</span>'

  if (words.length) {
    result += '&nbsp;<span>' + words.join(' ') + '</span>'
  }

  return result
}

const infoBarStyle = computed(() => {
  return isItemHovered.value
    ? {
        opacity: '100%',
        transform: 'translateY(0)',
        background:
          'linear-gradient(-60deg,' +
          selectedItem.value.color_start +
          ', ' +
          selectedItem.value.color_end +
          ')'
      }
    : {
        opacity: '0%',
        transform: 'translateY(16px)',
        background:
          'linear-gradient(-60deg,' +
          selectedItem.value.color_start +
          ', ' +
          selectedItem.value.color_end +
          ')'
      }
})

async function getTags() {
  const { data } = await supabase.from('tags').select()
  tags.value = data
}

function itemMouseEnter(e) {
  isItemHovered.value = true
  selectedItem.value = e
}

function itemMouseLeave() {
  isItemHovered.value = false
}

onMounted(() => {
  getTags()
})
</script>

<template>
  <div class="flex flex-col-reverse">
    <div class="flex flex-row">
      <div
        class="bg-drt-black-100 flex-row flex w-fit p-4 m-auto rounded-2xl mb-10 gap-10 drop-shadow-lg shadow-drt"
      >
        <div v-for="tag in tags">
          <NavItem
            :begin-color="tag.color_start"
            :end-color="tag.color_end"
            :icon-idle="tag.icon_idle_url"
            :icon-hover="tag.icon_hover_url"
            :name="tag.tag_name"
            :to="'/projects/' + tag.tag_id + '/'"
            @MouseEnter="(e) => itemMouseEnter(e)"
            @MouseLeave="itemMouseLeave"
          />
        </div>
        <div
          class="bg-drt-black-0 shadow-inner w-1 h-24 mx-[-20px] my-auto rounded-md opacity-50"
        ></div>
        <div class="flex flex-row gap-3">
          <NavItem
            class="w-16 h-16 p-2 my-auto mr-2"
            :begin-color="favData.beginColor"
            :end-color="favData.endColor"
            :icon-idle="favData.iconIdle"
            :icon-hover="favData.iconHover"
            :name="favData.name"
            to="/hatgeon"
            @MouseEnter="(e) => itemMouseEnter(e)"
            @MouseLeave="itemMouseLeave"
          />
          <NavItem
            class="w-16 h-16 p-0 my-auto mr-2"
            :begin-color="hatgeonData.beginColor"
            :end-color="hatgeonData.endColor"
            :icon-idle="hatgeonData.iconIdle"
            :icon-hover="hatgeonData.iconHover"
            :name="hatgeonData.name"
            to="/hatgeon"
            @MouseEnter="(e) => itemMouseEnter(e)"
            @MouseLeave="itemMouseLeave"
          />
        </div>
      </div>
    </div>
    <div
      class="flex-row transition-all flex w-fit py-2 px-4 m-auto rounded-xl text-3xl text-drt-black-0 mb-4 drop-shadow-lg shadow-drt"
      :style="infoBarStyle"
      v-html="RenderText(selectedItem.name)"
    ></div>
  </div>
</template>
