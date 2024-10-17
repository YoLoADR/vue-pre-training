import { ref, provide, inject, computed } from 'vue';
import { productsDB } from '@/db/productsDB.js';

const ProductsSymbol = Symbol();

export function provideProducts() {
  const products = ref(productsDB.products);

  const addProduct = (product) => {
    products.value.push(product);
  };

  const availableProducts = computed(() => {
    return products.value.filter(product => product.stock > 0);
  });

  provide(ProductsSymbol, {
    products,
    addProduct,
    availableProducts
  });

  return { products, addProduct, availableProducts };
}

export function useProducts() {
  const products = inject(ProductsSymbol);
  if (!products) {
    throw new Error('Products not provided. Did you forget to call provideProducts?');
  }
  return products;
}