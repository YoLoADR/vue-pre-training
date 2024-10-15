<template>
  <div class="p-6 bg-yellow-500 text-white mt-auto">
    <p>Pied de page</p>
    <button class="text-white" v-if="!isAuthenticated" @click="login">Login</button>
    <button class="text-white" v-else @click="logout">Logout</button>
  </div>
</template>

<script setup>
// useAuth est notre composable personnalisé qui gère l'état d'authentification
import { useAuth } from '../composables/useAuth';

// On utilise la déstructuration pour extraire les valeurs et fonctions dont nous avons besoin
// isAuthenticated est une ref(), donc une valeur réactive
// authenticateUser et logoutUser sont des fonctions
const { isAuthenticated, authenticateUser, logoutUser } = useAuth();

// Ces fonctions peuvent être utilisées directement dans le template
function login() {
  authenticateUser();
}

function logout() {
  logoutUser();
}

// Notez qu'avec <script setup>, nous n'avons pas besoin d'un bloc 'export default'
// Toutes les variables et fonctions déclarées ici sont automatiquement disponibles dans le template
</script>

<style scoped>
/* Styles spécifiques à MainFooter ici */
</style>