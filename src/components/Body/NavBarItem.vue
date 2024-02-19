<script setup>
import { ref, computed } from 'vue'

const emit = defineEmits(['MouseEnter', 'MouseLeave', 'Click'])

const props = defineProps({
  text: String,
  command: Function,
  to: String
})

const isHover = ref(false)

const icon = computed(() => {
  return isHover.value ? props.iconHover : props.iconIdle
})
</script>

<template>
  <RouterLink
    :to="props.to"
    class="transition-transform cursor-pointer flex flex-row gap-1 rounded-md hover:-translate-y-0.5 w-auto my-border"
    :class="{
      'drop-shadow-lg bg-gradient-to-tr from-slate-100 to-slate-400 shadow-drt': isHover,
      'bg-drt-black-100': !isHover
    }"
    @mouseleave="isHover = false"
    @mouseenter="isHover = true"
    @click="
      emit('Click', {
        name: props.name,
        color_start: props.beginColor,
        color_end: props.endColor
      })
    "
  >
    <div class="flex flex-row">
      <img class="my-auto h-full" v-bind:src="icon" />
      <div
        class="my-auto p-2 font-semibold"
        :class="{
          'text-slate-200 opacity-25': !isHover,
          'text-slate-900 ': isHover
        }"
      >
        {{ props.text }}
      </div>
    </div>
  </RouterLink>
</template>
