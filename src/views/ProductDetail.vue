<template>
    <div>
        <h1>Détails du Produit</h1>
        <p>ID du Produit: {{ productId }}</p>
        <!-- Afficher plus de détails sur le produit ici -->
    </div>
</template>
  
<script>
export default {
    name: 'ProductDetail',
    data() {
        return {
            productId: null
        };
    },
    created() {
        this.productId = this.$route.params.id; // Accéder au paramètre 'id' de la route
    }
}
</script>