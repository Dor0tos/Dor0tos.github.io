<script setup>
import { stringify } from 'postcss'
import { ref, onMounted, computed, watch } from 'vue'

const props = defineProps({
  color: String,
  title: String,
  transferData: String,
  content: String
})

const emit = defineEmits(['selected'])
const newsStyle = ref({
  background: props.color
})
</script>

<template>
  <div
    class="w-full h-full rounded-s-xl"
    :style="newsStyle"
    @click="
      emit('selected', {
        accent_color: props.color,
        title: props.title,
        href: props.transferData,
        content: props.content
      })
    "
  ></div>
</template>
