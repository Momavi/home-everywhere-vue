<template>
  <section id="gallery" class="block-margin relative block-container">
    <h2 class="urbanist-700 text-4xl text-center mb-12">Галерея</h2>
    <div class="flex lg:flex-row flex-col justify-center xl:space-x-14 lg:space-x-8">
      <div class="z-20 relative mb-10 lg:mb-0">
        <div class="relative sm:h-96 h-[300px] flex justify-center lg:block mb-4">
          <transition name="slide-fade" mode="out-in">
            <img
              :key="currentImageIndex"
              :src="currentImage"
              alt="Slider Image"
              class="rounded-lg sm:h-full lg:h-[394px]"
            />
          </transition>
        </div>
        <div class="flex items-center relative space-x-4 justify-center">
          <button @click="prevImage" class="bg-contrast rounded-full p-1 lg:hover:opacity-60">
            <img src="/src/images/arrow-left.svg" alt="arrow-left.svg" />
          </button>
          <button @click="nextImage" class="bg-contrast rounded-full p-1 lg:hover:opacity-60">
            <img src="/src/images/arrow-right.svg" alt="arrow-right.svg" />
          </button>
        </div>
      </div>
      <div class="lg:w-1/3 h-full">
        <div class="w-full h-full bg-card_bg md:p-8 sm:p-6 p-4 rounded-3xl">
          <h2 class="poppins-600 text-xl text-contrast mb-4">Кому необходим наш кемпинг</h2>
          <p class="poppins-400 sm:text-lg text-md leading-7">
            Наш кемпинг идеально подходит для всех, кто ищет неповторимые приключения и полный
            комфорт в одном пакете. Если вы — страстный путешественник, жаждущий исследовать
            отдаленные уголки природы, или семья, стремящаяся создать незабываемые воспоминания в
            комфортных условиях, наш кемпинг создан для вас.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      images: [
        '/assets/img.png',
        '/assets/img_1.png',
        '/assets/img_4.png',
        '/assets/img_5.png'
      ], // Пути к вашим изображениям
      currentImageIndex: 0,
      isImageModalOpen: false
    }
  },
  computed: {
    currentImage() {
      return this.images[this.currentImageIndex]
    }
  },
  methods: {
    prevImage() {
      this.currentImageIndex =
        (this.currentImageIndex - 1 + this.images.length) % this.images.length
    },
    nextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length
    },
  }
}
</script>