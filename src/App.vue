<template>
  <HomePage />
  <ContactPage />
</template>

<script>
import HomePage from '@/views/HomePage';
import ContactPage from '@/views/ContactPage';

export default {
  name: 'App',
  components: {
    HomePage,
    ContactPage
  }
}
</script>

<style></style>