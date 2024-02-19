<template>
  <div
    :style="newsVisibility"
    class="flex-row relative mt-4 mb-16 bg-drt-black-100 mx-auto min-h-40 w-1/6 rounded-2xl text-white"
  >
    <div class="flex flex-row">
      <div class="w-8 flex flex-col absolute -left-4 h-full">
        <div class="w-8 grow hover:-translate-x-4 cursor-pointer" v-for="newses in news">
          <NewsItem
            :color="newses.accent_color"
            :title="newses.title"
            :content="newses.content"
            :href="newses.link"
            @selected="(e) => (selectedNews.value = e)"
          />
        </div>
      </div>
      <div :style="newsAccentColor" class="w-4 z-10 transition-colors"></div>
    </div>
    <div class="flex flex-col px-5 py-0 w-full">
      <div class="font-bold text-xl my-3">
        {{ selectedNews.value ? selectedNews.value.title : '' }}
      </div>
      <div
        class="text-wrap mb-5"
        v-html="selectedNews.value ? selectedNews.value.content : ''"
      ></div>
      <a
        href="#mainblock"
        :style="newsAccentColor"
        class="my-auto transition-all text-drt-black-0 w-32 text-center ml-auto mr-0 font-bold shadow-drt rounded-lg p-2 mb-4 drop-shadow-lg hover:-translate-y-1 cursor-pointer"
      >
        Перейти
      </a>
    </div>
  </div>
</template>

<script setup>
import NewsItem from './NewsItem.vue'

import { ref, onMounted, computed, watch, reactive } from 'vue'
import { supabase } from '../lib/supabaseClient'

const news = ref([])
const selectedNews = reactive({})

const newsAccentColor = ref({
  background: '#000000'
})

async function getNews() {
  const { data } = await supabase.from('news').select()
  news.value = data
}

onMounted(() => {
  getNews()

  selectedNews.value = {
    accent_color: '#ffffff',
    title: '',
    href: {},
    content: ''
  }
})

watch(selectedNews, (newData) => {
  newsAccentColor.value = { background: selectedNews.value.accent_color }
})

const newsVisibility = computed(() => {
  if (news.value.length) {
    selectedNews.value = news.value[0]
    return { display: 'flex' }
  } else {
    return { display: 'none' }
  }
})
</script>
