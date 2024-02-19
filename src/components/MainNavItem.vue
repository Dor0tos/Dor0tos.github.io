<script setup>
import { ref, computed, watch } from 'vue'

const emit = defineEmits(['MouseEnter', 'MouseLeave', 'Click'])

const props = defineProps({
  beginColor: String,
  endColor: String,
  iconIdle: String,
  iconHover: String,
  name: String,
  to: String
})

const isHover = ref(false)

watch(isHover, () => {
  if (isHover.value) {
    emit('MouseEnter', {
      name: props.name,
      color_start: props.beginColor,
      color_end: props.endColor
    })
  } else {
    emit('MouseLeave')
  }
})

const buttonStyle = computed(() => {
  return isHover.value
    ? { background: 'linear-gradient(-60deg,' + props.beginColor + ', ' + props.endColor + ')' }
    : { background: 'none' }
})

const icon = computed(() => {
  return isHover.value ? props.iconHover : props.iconIdle
})

function OnClick() {
  emit('Click', {
    name: props.name,
    color_start: props.beginColor,
    color_end: props.endColor
  })
  document.getElementById('mainblock').scrollIntoView()
}
</script>

<template>
  <RouterLink
    :to="props.to"
    class="transition-transform cursor-pointer flex flex-row gap-1 rounded-xl hover:-translate-y-1 aspect-square h-24"
    :class="{
      'drop-shadow-lg': isHover,
      'shadow-drt': isHover
    }"
    :style="buttonStyle"
    @mouseleave="isHover = false"
    @mouseenter="isHover = true"
    @click="OnClick"
  >
    <div class="flex flex-row">
      <img class="my-auto w-auto" v-bind:src="icon" />
    </div>
  </RouterLink>
</template>
