<template>
    <div class="flex flex-col min-h-screen">
        <AddProductForm />
    </div>
</template>

<script>
import AddProductForm from '@/components/AddProductForm.vue';
export default {
    name: 'ContactPage',
    components: {
        AddProductForm,
    },
}
</script>
