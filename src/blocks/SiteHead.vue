<script setup>
// Navigation | Блок навигации с указанием всех необходимых тегов
import NavBar from '../components/MainNav.vue'

// ModalNews | Модальное окно в новостями. Показывается при заходе на сайт
import News from '../components/NewsBlock.vue'
</script>

<template>
  <div class="w-screen h-screen bg-[url('./public/Background.png')] bg-cover bg-center">
    <div class="flex flex-col h-screen w-screen">
      <div class="grow grid place-content-center">
        <img src="/logo.png" class="w-[683px] m-auto pointer-events-none" />
      </div>
      <News />
      <NavBar />
    </div>
  </div>
</template>
