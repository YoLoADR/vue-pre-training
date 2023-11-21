<template>
    <div class="flex flex-col min-h-screen">
        <HeaderNavbar :links="headerNavLinks" />
        <HeroSection :backgroundImage="heroBackgroundImage" />
        <ProductList :products="products" @addToCart="addToCart" />
        <div class="p-6">
            <h2>Total du Panier: ${{ totalPrice }}</h2>
        </div>
        <MainFooter />
    </div>
</template>

<script>
import HeaderNavbar from '@/components/HeaderNavbar.vue';
import HeroSection from '@/components/HeroSection.vue';
import ProductList from '@/components/ProductList.vue';
import MainFooter from '@/components/MainFooter.vue';

import { productsDB } from '@/db/productsDB.js';
import { mainDB } from '@/db/mainDB.js';

export default {
    name: 'HomePage',
    components: {
        HeaderNavbar,
        HeroSection,
        ProductList,
        MainFooter
    },
    data() {
        return {
            products: productsDB.products,
            heroBackgroundImage: mainDB.heroBackgroundImage,
            headerNavLinks: mainDB.headerNavLinks,
            cart: []
        };
    },
    computed: {
        totalPrice() {
            return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
        }
    },
    methods: {
        addToCart(product) {
            let found = this.cart.find(item => item.id === product.id);
            if (found) {
                found.quantity++;
            } else {
                this.cart.push({ ...product, quantity: 1 });
            }
        }
    }
}
</script>
