<script setup>
import { ref, computed, watch } from 'vue'

const emit = defineEmits(['onChanged'])

const props = defineProps({
  color: {
    type: String,
    default: '#ff00ff'
  },
  text: {
    type: String,
    required: true
  },
  tagId: Number,
  state: {
    type: Boolean,
    default: false
  }
})

function OnSelfClick() {
  emit('onChanged', props.tagId)
}

const checkBoxStyle = computed(() => {
  return props.state
    ? {
        background: props.color,
        boxShadow: '0 0 6px 0' + props.color + 'C0'
      }
    : { background: '#19161D' }
})
</script>

<template>
  <li
    @click="OnSelfClick"
    class="cursor-pointer hover:bg-drt-black-200 p-1 rounded-md w-full flex gap-3 flex-row"
    :class="{
      'text-slate-200': props.state,
      'hover:text-slate-200 text-drt-black-200': !props.state
    }"
  >
    <div class="h-full rounded-full w-1.5 transition-colors" :style="checkBoxStyle"></div>
    <div class="grow my-auto font-semibold select-none">{{ $props.text }}</div>
  </li>
</template>
