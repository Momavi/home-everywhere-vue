<template>
  <section id="gallery" class="mb-32 relative">
    <h2 class="urbanist-700 text-4xl text-center mb-12">Галерея</h2>
    <div class="flex justify-center space-x-14">
      <div class="w-1/3 z-20 relative">
        <div class="relative h-96 mb-4">
          <transition name="slide-fade" mode="out-in">
            <div
              v-if="isImageModalOpen"
              class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75"
            >
              <div class="max-w-screen-xl">
                <img
                  :src="currentImage"
                  alt="Slider Image"
                  class="rounded-lg"
                  @click="closeImageModal"
                />
                <button
                  @click="closeImageModal"
                  class="absolute top-0 right-0 m-2 text-white cursor-pointer"
                >
                  &times;
                </button>
              </div>
            </div>
          </transition>
          <transition name="slide-fade" mode="out-in">
            <img
              :key="currentImageIndex"
              :src="currentImage"
              alt="Slider Image"
              class="rounded-lg h-full"
            />
          </transition>
        </div>
        <div class="flex items-center space-x-4 justify-center">
          <button @click="prevImage" class="bg-contrast rounded-full p-1 hover:opacity-60">
            <img src="src/images/arrow-left.svg" alt="arrow-left.svg" />
          </button>
          <button @click="nextImage" class="bg-contrast rounded-full p-1 hover:opacity-60">
            <img src="src/images/arrow-right.svg" alt="arrow-right.svg" />
          </button>
        </div>
      </div>
      <div class="w-1/2 h-full">
        <div class="w-full h-full bg-card_bg p-8 rounded-3xl">
          <h2 class="poppins-600 text-xl text-contrast mb-4">Кому необходим наш кемпинг</h2>
          <p class="poppins-400 text-lg leading-7">
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
        'src/images/img.png',
        'src/images/img_1.png',
        'src/images/img_4.png',
        'src/images/img_5.png'
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
    openImageModal() {
      this.isImageModalOpen = true
    },
    closeImageModal() {
      this.isImageModalOpen = false
    }
  }
}
</script>