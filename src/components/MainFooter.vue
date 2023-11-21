<template>
  <!-- Pied de page (MainFooter) -->
  <div class="p-6 bg-yellow-500 text-white mt-auto">
    <p>Pied de page</p>
    <button class="text-white" v-if="!isAuthenticated" @click="login">Login</button>
    <button class="text-white" v-else @click="logout">Logout</button>
    <!-- Placez ici le contenu de votre MainFooter -->
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'MainFooter',
  computed: {
    ...mapGetters(['isAuthenticated'])
  },
  methods: {
    ...mapActions(['authenticateUser', 'logoutUser']),
    login() {
      this.authenticateUser();
    },
    logout() {
      this.logoutUser();
    }
  }
}
</script>

<style scoped>
/* Styles spécifiques à MainFooter ici */
</style>