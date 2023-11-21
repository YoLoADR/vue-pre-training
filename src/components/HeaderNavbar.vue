<template>
  <div class="p-6 bg-blue-500 text-white flex justify-between">
    <nav>
      <ul class="flex">
        <li v-for="link in links" :key="link.name" class="mr-6">
          <router-link :to="link.href" :class="{ 'font-bold': link.current }">{{ link.name }}</router-link>
        </li>
      </ul>
    </nav>
    <div>
      <button v-if="!isLoggedIn" @click="login"
        class="py-2 px-4 bg-green-600 rounded hover:bg-green-700 transition duration-300">Login</button>
      <div v-else class="flex items-center">
        <img src="https://via.placeholder.com/32" alt="User" class="rounded-full mr-2">
        <button @click="logout"
          class="py-2 px-4 bg-red-600 rounded hover:bg-red-700 transition duration-300 ml-2">Logout</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderNavbar',
  props: {
    links: Array
  },
  data() {
    return {
      isLoggedIn: false
    };
  },
  methods: {
    login() {
      this.isLoggedIn = true;
    },
    logout() {
      this.isLoggedIn = false;
    }
  }
}
</script>

<style scoped>
/* Styles spécifiques à HeaderNavbar ici */
</style>