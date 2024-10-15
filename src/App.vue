<template>
  <router-view />
</template>

<script setup>
import { provideAuth } from './composables/useAuth';

provideAuth();
</script>

<style></style>