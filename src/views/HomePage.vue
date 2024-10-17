<template>
    <div class="flex flex-col min-h-screen">
        <HeaderNavbar :links="headerNavLinks" />
        <HeroSection :backgroundImage="heroBackgroundImage" />
        <div v-if="loading">Chargement des produits...</div>
        <div v-else-if="error">{{ error }}</div>
        <ProductList v-else :products="availableProducts" @addToCart="addToCart" />
        <div class="p-6">
            <h2>Total du Panier: ${{ totalPrice }}</h2>
        </div>
        <MainFooter />
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import HeaderNavbar from '@/components/HeaderNavbar.vue';
import HeroSection from '@/components/HeroSection.vue';
import ProductList from '@/components/ProductList.vue';
import MainFooter from '@/components/MainFooter.vue';
import { useProducts } from '@/composables/useProducts';
import { mainDB } from '@/db/mainDB.js';

// Utilisation du composable useProducts
const { loading, error, fetchProducts, availableProducts } = useProducts();

// Données statiques
const heroBackgroundImage = ref(mainDB.heroBackgroundImage);
const headerNavLinks = ref(mainDB.headerNavLinks);

// Gestion du panier
const cart = ref([]);

const totalPrice = computed(() => {
    return cart.value.reduce((total, item) => total + item.price * item.quantity, 0);
});

const addToCart = (product) => {
    let found = cart.value.find(item => item.id === product.id);
    if (found) {
        found.quantity++;
    } else {
        cart.value.push({ ...product, quantity: 1 });
    }
};

// Chargement des produits au montage du composant
onMounted(() => {
    fetchProducts(false); // false pour utiliser l'API réelle, true pour les données mockées
});
</script>