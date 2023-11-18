<template>
  <div class="p-6 bg-blue-500 text-white">
    <nav>
      <ul class="flex">
        <li v-for="link in links" :key="link.name" class="mr-6">
          <a :href="link.href" :class="{ 'font-bold': link.current }">{{ link.name }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'HeaderNavbar',
  props: {
    links: Array
  }
}
</script>

<style scoped>
/* Styles spécifiques à HeaderNavbar ici */
</style>