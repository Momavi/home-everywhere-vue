<template>
  <header :class="`w-full pb-2 relative transition-colors ease-in-out duration-300 top-0 z-50`">
    <div class="flex items-center block-container">
      <div class="w-full cursor-pointer pt-2">
        <img src="../images/logo2.png" class="h-20" alt="ДОМ ВЕЗДЕ" />
      </div>

      <div class="lg:block hidden">
        <ul class="flex space-x-10 poppins-500">
          <li v-for="(item, index) in headerItem" :key="index">
            <a :href="item.link" class="hover:text-contrast">{{ item.name }}</a>
          </li>
        </ul>
      </div>

      <div class="w-full md:items-end md:justify-end lg:flex hidden">
        <div class="w-fit bg-contrast px-4 py-2 rounded-2xl hover:bg-contrast/75 transition-colors">
          <a href="#contacts" class="text-white uppercase poppins-500 text-lg">Арендовать</a>
        </div>
      </div>

      <Navbar class="lg:hidden flex justify-end items-end" />
    </div>
  </header>
</template>

<script setup>
import Navbar from '@/components/NavBar.vue'
import { onMounted, ref } from 'vue'

const headerItem = [
  { name: 'Правила', link: '#rules' },
  { name: 'Цены', link: '#price' },
  { name: 'Видео', link: '#video' },
  { name: 'Галерея', link: '#gallery' },
  { name: 'Отзывы', link: '#reviews' },
]

const headerClass = ref('bg-transparent') // Изначально навигация прозрачная

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

function handleScroll() {
  const scrollTop = window.scrollY

  // Порог, после которого меняется стиль
  if (scrollTop > 10) {
    headerClass.value = 'bg-background/95' // Измените на класс для нужного вам стиля
  } else {
    headerClass.value = 'bg-transparent' // Вернуть изначальный стиль
  }
}
</script>