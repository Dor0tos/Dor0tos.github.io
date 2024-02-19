<script setup>
import FItem from './FilterBoxItem.vue'
import { supabase } from '../lib/supabaseClient'
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const tags = ref([])
const filters = ref([])
const route = useRoute()

async function getTags() {
  const { data } = await supabase.from('tags').select()
  tags.value = data

  filters.value = []
  var allFalse = true

  tags.value.forEach((tag) => {
    filters.value.push({
      object: tag,
      id: tag.tag_id,
      checked: route.params.tagid == tag.tag_id
    })
    allFalse = allFalse && !(route.params.tagid == tag.tag_id)
  })

  if (allFalse) {
    filters.value.forEach((el) => (el.checked = true))
  }
}

function updatePage() {
  getTags()
}

watch(route, () => {
  updatePage()
})

onMounted(() => {
  updatePage()
})

function onItemChanged(tagId) {
  const index = filters.value.findIndex((el) => el.id == tagId)
  filters.value[index].checked = !filters.value[index].checked
}
</script>

<template>
  <!--Вот тут важно! Тут значение захардкодил на 85px потому что в 3:45 ну я хуй знает даже как запрос сделать
  Этот прикольчик держит окно выбора Тегов на экране

  На десктопе то всё заебись, а вот как будет на мобилках... Про адаптив вообще думать не хочется-->
  <div
    class="sticky flex flex-col z-50 top-[85px] mt-0 w-1/4 h-fit mr-5 bg-drt-black-100 rounded-md shadow-drt p-4"
  >
    <div class="flex flex-row">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="w-6 h-6 my-auto mr-2 fill-slate-200 opacity-50"
      >
        <path
          fill-rule="evenodd"
          d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
          clip-rule="evenodd"
        />
      </svg>

      <input
        type="text"
        class="p-2 grow rounded-md bg-drt-black-0 placeholder:text-white placeholder:opacity-25 shadow-inner focus:border-gray-600 focus:ring-1 focus:ring-gray-600 text-gray-500"
        placeholder="поиск проектов..."
      />
    </div>

    <hr class="border-slate-200 mt-4 opacity-25 border-[1px]" />

    <ul v-auto-animate>
      <FItem
        v-for="filter in filters"
        v-bind:key="filter"
        class="h-10 w-10 mt-4"
        :color="filter.object.color_start"
        :text="filter.object.tag_name"
        :tag-id="filter.object.tag_id"
        :state="filter.checked"
        @onChanged="onItemChanged"
      />
    </ul>
  </div>
</template>
