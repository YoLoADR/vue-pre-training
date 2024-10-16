<template>
  <form @submit.prevent="handleSubmit" class="p-4 bg-white rounded shadow-md">
    <div class="mb-4">
      <label class="block mb-2 text-sm font-bold text-gray-700">Titre:</label>
      <input type="text" name="title" v-model="formData.title" class="w-full px-3 py-2 border rounded" />
      <p v-if="errors.title" class="text-xs text-red-500">{{ errors.title }}</p>
    </div>
    <div class="mb-4">
      <label class="block mb-2 text-sm font-bold text-gray-700">Description:</label>
      <textarea name="description" v-model="formData.description" class="w-full px-3 py-2 border rounded"></textarea>
      <p v-if="errors.description" class="text-xs text-red-500">{{ errors.description }}</p>
    </div>
    <div class="mb-4">
      <label class="block mb-2 text-sm font-bold text-gray-700">Prix:</label>
      <input type="text" name="price" v-model="formData.price" class="w-full px-3 py-2 border rounded" />
      <p v-if="errors.price" class="text-xs text-red-500">{{ errors.price }}</p>
    </div>
    <button type="submit" class="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
      Ajouter le produit
    </button>
  </form>
</template>

<script setup>
import { reactive, ref } from 'vue';

// Utilisation de reactive pour l'objet formData
const formData = reactive({
  title: '',
  description: '',
  price: ''
});

// Utilisation de ref pour l'objet errors
const errors = ref({});

// Fonction de validation du formulaire
const validateForm = () => {
  let formIsValid = true;
  const newErrors = {};

  if (!formData.title) {
    formIsValid = false;
    newErrors.title = 'Le titre est requis.';
  }

  if (!formData.description) {
    formIsValid = false;
    newErrors.description = 'La description est requise.';
  }

  if (!formData.price) {
    formIsValid = false;
    newErrors.price = 'Le prix est requis.';
  } else if (isNaN(formData.price)) {
    formIsValid = false;
    newErrors.price = 'Le prix doit être un nombre.';
  }

  errors.value = newErrors;
  return formIsValid;
};

// Fonction de soumission du formulaire
const handleSubmit = () => {
  if (validateForm()) {
    console.log('Envoi des données du formulaire:', formData);
    // Simuler l'envoi des données et la réponse
    setTimeout(() => {
      alert('Produit ajouté avec succès!');
      // Réinitialiser le formulaire
      Object.assign(formData, { title: '', description: '', price: '' });
    }, 1000);
  }
};
</script>