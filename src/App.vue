<template>
  <router-view />
</template>

<script setup>
import { provideAuth } from './composables/useAuth';
import { provideProducts } from './composables/useProducts';

provideAuth();
provideProducts();
</script>

<style></style>