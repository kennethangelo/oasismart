<template>
  <div class="home">
    <div class="splash-container">
      <div class="splash">
        <h1>Splendid Food</h1>
      </div>
    </div>

    <main class="wrapper">
      <h2>Recommended</h2>

      <ProductCard
      v-for="(product, index) in inventory.slice(0, 3)"
      :key="product.id"
      :index = "index"
      :product="product"
      :addToCart="addToCart"
      class="card"
      />

    </main>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'
// @ is an alias to /src

export default {
  name: 'HomeView',
  props: ['inventory', 'addToCart'],
  components: { ProductCard }
}
</script>
