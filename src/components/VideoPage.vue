<template>
  <section id="video" class="block-margin relative block-container">
    <h2 class="urbanist-700 text-4xl text-center mb-12">Видео-обзор</h2>
    <div class="flex justify-center space-x-20">
      <div class="lg:w-2/3 md:w-full z-20">
        <video controls class="rounded-3xl">
          <source :src="video" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </section>
</template>

<script setup>
import video from '../images/video.mp4'
</script>