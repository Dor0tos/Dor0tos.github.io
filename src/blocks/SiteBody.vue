<script setup>
import { RouterView } from 'vue-router'
import NavBar from '../components/Body/NavBar.vue'
import Foot from './SiteFoot.vue'
</script>

<template>
  <main
    id="mainblock"
    class="bg-drt-black-0 h-screen snap-start snap-always py-[10px] overflow-y-auto"
  >
    <!--Навигация-->

    <NavBar />

    <!--Секция с контентом страницы-->

    <section class="w-3/4 mx-auto my-5 min-h-screen">
      <RouterView v-slot="{ Component }">
        <Transition name="slide-fade" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </section>

    <!--Подвал сайта-->

    <Foot />
  </main>
</template>

<style scoped>
/* Анимации перехода между страницами */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(0.6, 0.09, 0.65, 1.01);
}

.slide-fade-enter-from {
  transform: translateX(-40px);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateX(40px);
  opacity: 0;
}
/* ---------------------------------- */
</style>
