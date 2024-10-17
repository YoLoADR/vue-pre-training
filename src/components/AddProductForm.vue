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
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useProducts } from '../composables/useProducts';

const router = useRouter();
const { addProduct } = useProducts();

const formData = reactive({
    title: '',
    description: '',
    price: '',
    discountPercentage: 10,
    rating: 5,
    stock: 50,
    brand: 'Marque générique',
    category: 'catégorie',
    thumbnail: 'https://via.placeholder.com/800x600',
    images: [
        'https://via.placeholder.com/600x600',
        'https://via.placeholder.com/600x600',
        'https://via.placeholder.com/600x600'
    ]
});

const errors = ref({});

const validateForm = () => {
    let formIsValid = true;
    errors.value = {};

    if (!formData.title) {
        formIsValid = false;
        errors.value.title = 'Le titre est requis.';
    }

    if (!formData.description) {
        formIsValid = false;
        errors.value.description = 'La description est requise.';
    }

    if (!formData.price) {
        formIsValid = false;
        errors.value.price = 'Le prix est requis.';
    } else if (isNaN(formData.price)) {
        formIsValid = false;
        errors.value.price = 'Le prix doit être un nombre.';
    }

    return formIsValid;
};

const handleSubmit = () => {
    if (validateForm()) {
        // Créer une copie non réactive des données du formulaire
        const productToAdd = JSON.parse(JSON.stringify(formData));
        
        // Assurez-vous que le prix est un nombre
        productToAdd.price = parseFloat(productToAdd.price);
        
        // Générer un ID unique pour le nouveau produit
        productToAdd.id = Date.now();

        console.log('Envoi des données du formulaire:', productToAdd);
        addProduct(productToAdd);
        
        setTimeout(() => {
            alert('Produit ajouté avec succès!');
            // Réinitialiser le formulaire
            Object.assign(formData, {
                title: '',
                description: '',
                price: '',
                discountPercentage: 10,
                rating: 5,
                stock: 50,
                brand: 'Marque générique',
                category: 'catégorie',
                thumbnail: 'https://via.placeholder.com/800x600',
                images: [
                    'https://via.placeholder.com/600x600',
                    'https://via.placeholder.com/600x600',
                    'https://via.placeholder.com/600x600'
                ]
            });
            router.push('/');
        }, 1000);
    }
};
</script>