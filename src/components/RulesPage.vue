<template>
  <section id="rules" class="mb-32">
    <div class="relative overflow-hidden">
      <h2 class="urbanist-700 text-4xl text-center mb-12 z-20">Правила аренды</h2>
      <div class="flex justify-center items-center">
        <div class="p-8 bg-contrast rounded-3xl mr-6">
          <p class="poppins-600 text-2xl mb-6">Требования к арендатору</p>
          <div>
            <ListRender :items="rentNeedIt" />
          </div>
        </div>
        <div class="p-8 drop-shadow-2xl bg-card_bg rounded-3xl z-0">
          <p class="poppins-600 text-2xl text-contrast mb-6">Условия аренды</p>
          <div>
            <ListRender :items="rentRules" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ListRender from '@/components/ListRender.vue'

const rentNeedIt = ['Возраст от 23-х лет', 'Стаж вождения от 2-х лет', 'Права категории B']
const rentRules = [
  'При бронировании, более чем за 5 дней — предоплата 30%',
  'При бронировании, менее чем за 5 дней — предоплата 100%',
  'При отмене бронирования менее чем за 5 дней — оплата не возвращается',
  'Сумма залога 10 000 ₽',
  'Сервисный сбор — 900 ₽'
]
</script>