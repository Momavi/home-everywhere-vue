<template>
  <section id="reviews" class="block-margin block-container">
    <div class="relative flex lg:flex-row flex-col justify-around">
      <div class="lg:mb-0 mb-8">
        <p class="urbanist-700 text-4xl">
          Что говорят о нас<br />
          наши клиенты?
        </p>
      </div>
      <div class="relative z-40 px-5">
        <button
          v-if="currentSlideIndex !== 3"
          @click="this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length"
          class="bg-contrast absolute bottom-1/2 right-0 rounded-full p-1 md:hover:opacity-60"
        >
          <img src="/src/images/arrow-right.svg" alt="arrow-right.svg" />
        </button>
        <transition name="slide-fade" mode="out-in">
          <div :key="currentSlideIndex" class="bg-card_bg sm:p-8 p-5 md:h-[240px] rounded-3xl">
            <div v-for="(slide, index) in slides" :key="index">
              <div v-if="index === currentSlideIndex" class="flex flex-col sm:flex-row justify-between mb-8">
                <div class="flex">
                  <img :src="slide.image" class="mr-6 rounded-full" alt="" />
                  <div class="flex flex-col">
                    <span class="text-lg poppins-600">{{ slide.name }}</span>
                    <span class="text-sm poppins-400 text-white/50">Взято из Авито</span>
                  </div>
                </div>
                <img src="/src/images/stars.svg" alt="5 звезд" class="w-[136px]" />
              </div>
            </div>
            <div v-for="(slide, index) in slides" :key="index" class="md:w-[560px]">
              <p v-if="index === currentSlideIndex" class="text-base poppins-400 text-white/95">
                {{ slide.review }}
              </p>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      currentSlideIndex: 0,
      slides: [
        {
          image: '/assets/user2.png',
          name: 'Philip Polyakov',
          review:
            'Арендовали у Дениса кемп на одни сутки. Все было просто супер! Все чисто, продуманно и очень комфортно. Есть все необходимое для путешествия.'
        },
        {
          image: '/assets/user1.png',
          name: 'Аня',
          review:
            'Уже брали в аренду кемпы, но всегда находили какие-то неприятные мелочи, а здесь не к чему придраться. Спасибо, Денис, обязательно будем обращаться снова))'
        },
        {
          image: '/assets/user3.png',
          name: 'Андрей',
          review:
            'Есть все необходимое для путешествия. От кемпа не хотелось даже отходить)) Внутри очень уютно, ночью было совсем не холодно. Отдельный респект за удобную кухню.'
        }
      ]
    }
  }
}
</script>