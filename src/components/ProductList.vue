<template>
  <div class="p-6 bg-gray-200">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div v-for="product in availableProducts" :key="product.id" class="bg-white rounded-lg shadow-md overflow-hidden">
        <img :src="product.thumbnail" alt="product image" class="w-full h-48 object-cover">
        <div class="p-4">
          <h3 class="text-lg font-semibold">{{ product.title }}</h3>
          <p class="text-gray-700">{{ product.description }}</p>
          <div class="mt-2">
            <span class="text-lg font-bold">${{ product.price }}</span>
          </div>
          <div class="mt-4">
            <a href="#" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
              View Details
            </a>
          </div>

          <button @click="$emit('addToCart', product)" class="mt-4 bg-green-500 text-white py-2 px-4 rounded">
            Ajouter au Panier
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  props: {
    products: Array
  },
  computed: {
    availableProducts() {
      return this.products.filter(product => product.stock > 0);
    }
  }
}
</script>

<style scoped>
/* Styles spécifiques à ProductList ici */
</style>