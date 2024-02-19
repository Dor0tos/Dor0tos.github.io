<!-- eslint-disable no-unused-vars -->
<script setup>
import Head from './blocks/SiteHead.vue'
import Body from './blocks/SiteBody.vue'

import { drtDB } from './lib/spaceDB'

let arr = drtDB.getProjectsSorted().then((foo) => {
  console.log(foo)
})

const { data, error } = await supabase.auth.signInWithOAuth({
  provider: 'github'
})

console.log(data)
console.log(error)
</script>

<template>
  <div
    class="overflow-y-scroll overflow-x-hidden h-screen snap-y snap-mandatory scroll-smooth hide-scroll"
  >
    <Head class="snap-start snap-always z-20" />
    <Body />
  </div>
</template>

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.hide-scroll::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.hide-scroll {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
