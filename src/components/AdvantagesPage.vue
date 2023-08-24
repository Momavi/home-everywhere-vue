<template>
  <section class="block-margin block-container">
    <div class="h-full w-full relative overflow-hidden">
      <div
        class="sm:grid sm:grid-cols-2 sm:gap-4 sm:justify-items-center sm:space-x-0
         lg:grid-cols-4 lg:h-full
         py-2 rounded-3xl z-40 relative"
      >
        <div
          v-for="(item, index) in cartItem"
          :class="[
            '2xl:p-6  xl:p-5 lg:w-full lg:h-full lg:mb-0 lg:first-of-type:mb-0 ' +
             'md:w-[320px] md:h-full md:first-of-type:mb-3 md:p-4 ' +
             'sm:h-fit rounded-3xl bg-contrast w-full p-4 mb-5 ',
            index === 1 ? 'md:mb-3 lg:mb-0' : '' // Добавляем класс для второго элемента
          ]"
          :key="index"
        >
          <div class="mb-4">
            <img :src="item.imagePath" :alt="item.header" class="h-8" />
          </div>
          <div>
            <div class="poppins-600 text-2xl mb-3 leading-5">{{ item.header }}</div>
            <p class="poppins-400 text-white/70">{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

const cartItem = [
  {
    header: 'Полноценная кухня',
    text: 'Раковина, электрический кран, система слива',
    imagePath: '/assets/kitchen.svg'
  },
  {
    header: 'Спальное место',
    text: 'Размер 2040*1480 мм, дополнительное спальное место ребёнка 1480*500 мм',
    imagePath: '/assets/bed.svg'
  },
  {
    header: 'Солнечная панель',
    text: 'Материалы панели позволяют ей работать даже в облачные дни',
    imagePath: '/assets/solar-panel.svg'
  },
  {
    header: 'Электричество',
    text: 'Размер 2040*1480 мм, дополнительное спальное место ребёнка 1480*500 мм',
    imagePath: '/assets/lamp.svg'
  }
]
</script>
