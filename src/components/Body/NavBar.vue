<script setup>
import NavItem from './NavBarItem.vue'
</script>

<template>
  <div class="sticky top-0 w-full z-50">
    <div
      class="h-[65px] w-3/4 bg-drt-black-100 mx-auto rounded-lg shadow-drt drop-shadow-lg flex flex-row"
    >
      <a href="#intro" class="relative my-auto mx-4">
        <img src="/logo.png" class="h-[40px] transition-all hover:-translate-y-1" />
      </a>
      <div class="my-auto grow mx-1 flex flex-row gap-3">
        <NavItem class="h-10 w-10" text="Мои проекты" to="/projects" />
        <NavItem class="h-10 w-10" text="Enter the Hatgeon" to="/hatgeon" />
        <NavItem class="h-10 w-10" text="Закладки" to="/fav" />
      </div>
    </div>
  </div>
</template>
