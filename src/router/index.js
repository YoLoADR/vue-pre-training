// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/views/HomePage.vue';
// import About from '../views/About.vue';
import UserProfile from '../views/UserProfile.vue';
// import Products from '../views/Products.vue';
import ProductDetail from '@/views/ProductDetail.vue';
import ContactPage from '@/views/ContactPage.vue';


const routes = [
  { path: '/', name: 'Accueil', component: HomePage },
//   { path: '/about', name: 'À propos', component: About },
  {
    path: '/user-profile',
    name: 'UserProfile',
    component: UserProfile,
    beforeEnter: (to, from, next) => {
      // Supposons que 'isUserAuthenticated' est une méthode pour vérifier si l'utilisateur est connecté
      if (isUserAuthenticated()) {
        next(); // Autorise l'accès à la route
      } else {
        next('/'); // Redirige vers la page d'accueil ou une page de connexion
      }
    }
  },
//   { path: '/produits', name: 'Produits', component: Products },
 {  path: '/produits/:id', // Paramètre dynamique ':id' 
    name: 'ProductDetail',
    component: ProductDetail},
  { path: '/contact', name: 'Contact', component: ContactPage },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  });

  function isUserAuthenticated() {
    // Ici, vous devriez implémenter la logique de vérification d'authentification
    // Par exemple, vérifier un token dans localStorage ou un état de store Vuex
    return false; // ou false selon l'état d'authentification
  }
  

export default router;
