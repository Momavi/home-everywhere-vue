<template>
  <section id="price" class="block-margin block-container">
    <div class="relative overflow-hidden">
      <h2 class="urbanist-700 text-4xl text-center mb-12">Цены</h2>
      <div
        class="flex w-full justify-center items-center flex-col space-y-8
        sm:grid sm:grid-cols-2 sm:gap-4 sm:space-y-0
        lg:items-start lg:flex lg:flex-row lg:h-full lg:space-x-8 lg:grid-cols-none"
      >
        <div
          v-for="(item, index) in priceItems"
          :key="index"
          :class="['px-8 pt-8 pb-7 rounded-3xl', index === 1 ? 'bg-contrast' : 'bg-card_bg']"
        >
          <p class="poppins-600 text-2xl" :class="[index === 1 ? 'text-white' : 'text-contrast']">
            {{ item.days }}
          </p>
          <p class="urbanist-700 text-5xl">{{ item.price }}</p>
          <p class="ubuntu-400" :class="[index % 2 === 0 ? 'text-white/25' : 'text-white/80']">
            /день
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const priceItems = [
  { days: '1 день', price: '3000₽' },
  { days: '2-6 дней', price: '2500₽' },
  { days: '7-9 дней', price: '1700₽' },
  { days: '> 9 дней', price: '1500₽' }
]
</script>