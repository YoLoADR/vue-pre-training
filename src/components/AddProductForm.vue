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
  
<script>
export default {
    name: 'AddProductForm',
    data() {
        return {
            formData: {
                title: '',
                description: '',
                price: '',
                discountPercentage: 10,  // Valeur par défaut pour la remise
                rating: 5,               // Valeur par défaut pour la note
                stock: 50,               // Valeur par défaut pour le stock
                brand: 'Marque générique', // Valeur par défaut pour la marque
                category: 'catégorie',    // Valeur par défaut pour la catégorie
                thumbnail: 'https://via.placeholder.com/800x600', // Image par défaut
                images: [                // Images par défaut
                    'https://via.placeholder.com/600x600',
                    'https://via.placeholder.com/600x600',
                    'https://via.placeholder.com/600x600'
                ]
            },
            errors: {}
        };
    },
    methods: {
        validateForm() {
            let formIsValid = true;
            let errors = {};

            // Validations similaires à l'exemple React
            if (!this.formData.title) {
                formIsValid = false;
                errors['title'] = 'Le titre est requis.';
            }

            // Validation de la description
            if (!this.formData.description) {
                formIsValid = false;
                errors['description'] = 'La description est requise.';
            }

            // Validation du prix
            if (!this.formData.price) {
                formIsValid = false;
                errors['price'] = 'Le prix est requis.';
            } else if (isNaN(this.formData.price)) {
                formIsValid = false;
                errors['price'] = 'Le prix doit être un nombre.';
            }

            this.errors = errors;
            return formIsValid;
        },
        handleSubmit() {
            if (this.validateForm()) {
                console.log('Envoi des données du formulaire:', this.formData);
                this.$store.dispatch('addProduct', this.formData);
                // Simuler l'envoi des données et la réponse
                setTimeout(() => {
                    alert('Produit ajouté avec succès!');
                    // Réinitialiser le formulaire
                    this.formData = {
                        title: '',
                        description: '',
                        price: '',
                        // Réinitialiser les autres champs ici aussi
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
                    };
                }, 1000);
            }
        }
    }
}
</script>
  