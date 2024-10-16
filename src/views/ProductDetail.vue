<template>
    <div>
        <h1>Détails du Produit</h1>
        <p>ID du Produit: {{ productId }}</p>
        <!-- Afficher plus de détails sur le produit ici -->
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

// Création d'une référence réactive pour stocker l'ID du produit
const productId = ref(null);

// Obtention de l'objet route
const route = useRoute();

// Utilisation de onMounted pour accéder aux paramètres de route après le montage du composant
onMounted(() => {
    // Accéder au paramètre 'id' de la route
    productId.value = route.params.id;
});
</script>