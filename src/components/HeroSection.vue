<template>
  <div :style="{ backgroundImage: `url('${backgroundImage}')` }"
    class="bg-cover bg-center h-96 flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-4xl font-bold text-white">
        Data to enrich your online business
      </h1>
      <p class="mt-6 text-lg text-white">
        Anim aute id magna aliqua ad ad non deserunt sunt.
      </p>
      <div class="mt-10">
        <a href="#" class="bg-indigo-600 text-white py-2 px-4 rounded inline-flex items-center">
          Get started
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroSection',
  props: {
    backgroundImage: String
  }
}
</script>

<style scoped>
/* Styles spécifiques à HeroSection ici */
</style>