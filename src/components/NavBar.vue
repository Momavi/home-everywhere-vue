<template>
  <nav class="w-full items-center py-3 text-white">
    <div class="cursor-pointer hover:opacity-60" @click="toggleMenu">
      <svg
        width="42"
        height="43"
        viewBox="0 0 42 43"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.25 11.002H36.75M5.25 21.502H36.75M5.25 32.002H36.75"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <div class="navbar-menu" :class="{ active: isMenuOpen }">
      <button
        class="cursor-pointer text-white absolute top-7 right-0 block-container hover:opacity-60"
        @click="toggleMenu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"
          />
        </svg>
      </button>
      <div class="h-full flex place-items-center place-content-center flex-col mb-16 text-xl">
        <a class="my-2 hover:opacity-60 mb-12" href="#main" @click="toggleMenu()">
          <img src="../images/logo2.png" class="h-24" alt="ДОМ ВЕЗДЕ" />
        </a>
        <a class="my-2 hover:opacity-60" href="#rules" @click="toggleMenu()">Правила аренды</a>
        <a class="my-2 hover:opacity-60" href="#price" @click="toggleMenu()">Цены</a>
        <a class="my-2 hover:opacity-60" href="#video" @click="toggleMenu()">Видео-обзор</a>
        <a class="my-2 hover:opacity-60" href="#gallery" @click="toggleMenu()">Галерея</a>
        <a class="my-2 hover:opacity-60" href="#contacts" @click="toggleMenu()">Контакты</a>
        <a class="mt-2 mb-12 hover:opacity-60" href="#reviews" @click="toggleMenu()">Отзывы</a>
        <div class="w-fit bg-contrast px-4 py-2 rounded-2xl hover:bg-contrast/75 transition-colors" @click="toggleMenu()">
          <a href="#contacts" class="text-white uppercase poppins-500 text-lg">Арендовать</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

</script>

<style scoped>
.navbar-menu {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: -100vw; /* Начальное положение за пределами экрана */
  height: 100vh;
  width: 100vw;
  background-color: #0e0e0e;
  color: white;
  z-index: 1000;
  transition: right 0.3s ease; /* Плавная анимация */
}

.navbar-menu.active {
  right: 0; /* Положение для раскрытия на весь экран */
}
</style>
