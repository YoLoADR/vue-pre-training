<template>
    <div>
        <h1>About Us : Mais avant test le Firebase stp !</h1>
        <form @submit.prevent="handleSubmit">
            <!-- Champs du formulaire -->
            <input type="text" v-model="formData.title" placeholder="Titre du produit" required />
            <textarea v-model="formData.description" placeholder="Description du produit" required></textarea>
            <input type="number" v-model.number="formData.price" placeholder="Prix" required />
            <button type="submit">{{ selectedProduct ? 'Mettre à jour' : 'Ajouter' }}</button>
        </form>
        <!-- Liste des produits -->
        <div v-for="product in products" :key="product.id">
            <h3>{{ product.title }}</h3>
            <p>{{ product.description }}</p>
            <p>{{ product.price }}</p>
            <button @click="editProduct(product)">Modifier</button>
            <button @click="deleteProduct(product.id)">Supprimer</button>
        </div>
    </div>
</template>
  
<script>
import { db } from '@/firebase';

export default {
    name: 'AboutPage',
    data() {
        return {
            products: [],
            formData: {
                title: '',
                description: '',
                price: null
            },
            selectedProduct: null
        };
    },
    created() {
        this.fetchProducts();
    },
    methods: {
        fetchProducts() {
            db.collection('products').onSnapshot(snapshot => {
                this.products = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            });
        },
        handleSubmit() {
            const productData = { ...this.formData };

            if (this.selectedProduct) {
                db.collection('products').doc(this.selectedProduct.id).update(productData);
            } else {
                db.collection('products').add(productData);
            }

            this.resetForm();
        },
        editProduct(product) {
            this.selectedProduct = product;
            this.formData = { ...product };
        },
        deleteProduct(productId) {
            db.collection('products').doc(productId).delete();
        },
        resetForm() {
            this.formData = { title: '', description: '', price: null };
            this.selectedProduct = null;
        }
    }
}
</script>