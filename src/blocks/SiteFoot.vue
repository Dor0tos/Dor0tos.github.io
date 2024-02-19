<script setup>
const FooterMap = {
  pages: [
    { label: 'Проекты', route: '/projects/' },
    { label: 'Enter the Hatgeon', route: '/hatgeon' },
    { label: 'Закладки', route: '/fav' }
  ],
  links: [
    { label: 'VK', href: 'https://vk.com/dorotos' },
    { label: 'Telegram', href: 'https://t.me/drt_space' },
    { label: 'YouTube', href: 'https://www.youtube.com/channel/UC6A3yIPf4e9WxKPWf1Wd0bw' },
    { label: 'Twitch', href: 'https://www.twitch.tv/dorotos' }
  ]
}
</script>

<template>
  <footer class="flex flex-row h-24 w-3/4 mx-auto my-10 text-slate-200 opacity-50">
    <div>Made by Dorotos, 2024</div>

    <div class="grow flex flex-row-reverse gap-5">
      <div class="flex flex-col">
        <h1 class="font-semibold">Страницы</h1>
        <ul>
          <li v-for="pageData in FooterMap.pages">
            <RouterLink
              :to="pageData.route"
              class="flex flex-row opacity-50 hover:opacity-100 hover:underline"
            >
              {{ pageData.label }}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="w-4 h-4 mt-[6px]"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z"
                  clip-rule="evenodd"
                />
              </svg>
            </RouterLink>
          </li>
        </ul>
      </div>

      <div>
        <h1 class="font-semibold">Ссылки</h1>
        <ul>
          <li v-for="linkData in FooterMap.links">
            <a
              :href="linkData.href"
              class="flex flex-row opacity-50 hover:opacity-100 hover:underline cursor-pointer"
            >
              {{ linkData.label }}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="w-4 h-4 ml-1 my-auto"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.914 6.025a.75.75 0 0 1 1.06 0 3.5 3.5 0 0 1 0 4.95l-2 2a3.5 3.5 0 0 1-5.396-4.402.75.75 0 0 1 1.251.827 2 2 0 0 0 3.085 2.514l2-2a2 2 0 0 0 0-2.828.75.75 0 0 1 0-1.06Z"
                  clip-rule="evenodd"
                />
                <path
                  fill-rule="evenodd"
                  d="M7.086 9.975a.75.75 0 0 1-1.06 0 3.5 3.5 0 0 1 0-4.95l2-2a3.5 3.5 0 0 1 5.396 4.402.75.75 0 0 1-1.251-.827 2 2 0 0 0-3.085-2.514l-2 2a2 2 0 0 0 0 2.828.75.75 0 0 1 0 1.06Z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
