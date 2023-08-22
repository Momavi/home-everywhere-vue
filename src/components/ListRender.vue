<template>
  <div class="flex mb-2" v-for="(item, index) in props.items" :key="index">
    <img src="../images/success.svg" alt="" class="mr-2" />
    <p class="poppins-400">{{ item }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  items: Array
})
</script>