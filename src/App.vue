<template>
  <div class="relative">
    <img
      src="./images/bg2.svg"
      class="absolute -top-0 right-0 h-full w-full select-none object-cover"
      alt=""
    />
    <img
      src="./images/bg-color.webp"
      class="absolute top-0 right-0 h-full w-full z-20 select-none object-cover"
      alt=""
    />
    <NavHeader />
    <div class="circle absolute bottom-1 right-0"></div>

    <main>
      <FirstPage />
      <AdvantagesPage />
      <RulesPage />
      <PricePage />
      <VideoPage />
      <GalleryPage />
      <ContactPage />
      <ReviewPage />
    </main>

    <FooterPage />
  </div>
</template>

<script setup>
import NavHeader from '@/components/NavHeader.vue'
import FirstPage from '@/components/FirstPage.vue'
import AdvantagesPage from '@/components/AdvantagesPage.vue'
import RulesPage from '@/components/RulesPage.vue'
import PricePage from '@/components/PricePage.vue';
import VideoPage from '@/components/VideoPage.vue';
import GalleryPage from '@/components/GalleryPage.vue';
import FooterPage from '@/components/FooterPage.vue';
import ContactPage from '@/components/ContactPage.vue';
import ReviewPage from '@/components/ReviewPage.vue';
</script>
