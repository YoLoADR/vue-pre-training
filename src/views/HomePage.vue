<template>
    <div class="flex flex-col min-h-screen">
        <HeaderNavbar />
        <HeroSection />
        <ProductList />
        <MainFooter />
    </div>
</template>

<script>
import HeaderNavbar from '@/components/HeaderNavbar.vue';
import HeroSection from '@/components/HeroSection.vue';
import ProductList from '@/components/ProductList.vue';
import MainFooter from '@/components/MainFooter.vue';

export default {
    name: 'HomePage',
    components: {
        HeaderNavbar,
        HeroSection,
        ProductList,
        MainFooter
    }
}
</script>
