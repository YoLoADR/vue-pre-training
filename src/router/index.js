// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/views/HomePage.vue';
// import About from '../views/About.vue';
// import Users from '../views/Users.vue';
// import Products from '../views/Products.vue';
import ProductDetail from '@/views/ProductDetail.vue';
import ContactPage from '@/views/ContactPage.vue';


const routes = [
  { path: '/', name: 'Accueil', component: HomePage },
//   { path: '/about', name: 'À propos', component: About },
//   { path: '/user', name: 'Utilisateurs', component: Users },
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

export default router;
