<template>
    <div class="flex flex-col min-h-screen">
        <HeaderNavbar :links="headerNavLinks" />
        <AddProductForm />
        <MainFooter />
    </div>
</template>

<script>
import AddProductForm from '@/components/AddProductForm.vue';
import HeaderNavbar from '@/components/HeaderNavbar.vue';
import MainFooter from '@/components/MainFooter.vue';

import { mainDB } from '@/db/mainDB.js';

export default {
    name: 'ContactPage',
    components: {
        AddProductForm,
        HeaderNavbar,
        MainFooter
    },
    data() {
        return {
            headerNavLinks: mainDB.headerNavLinks,
        };
    },
}
</script>
