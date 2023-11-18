<template>
    <div class="flex flex-col min-h-screen">
        <HeaderNavbar :links="headerNavLinks" />
        <HeroSection :backgroundImage="heroBackgroundImage" />
        <ProductList :products="products" />
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
            headerNavLinks: mainDB.headerNavLinks
        };
    }
}
</script>
