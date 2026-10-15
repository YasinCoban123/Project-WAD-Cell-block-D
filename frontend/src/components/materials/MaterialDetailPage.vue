<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from '../Navbar.vue'
import Footer from '../Footer.vue'
import { useMaterials } from '../../composables/useMaterials'
import { useOrderedMaterials } from '../../composables/useOrderedMaterials'

const route = useRoute()
const { getMaterial } = useMaterials()
const { addMaterial } = useOrderedMaterials()

const materialId = computed(() => Number(route.params.id))
const material = computed(() => getMaterial(materialId.value))
const quantity = ref(1)

function handleOrder(): void {
  if (material.value) {
    addMaterial(material.value.name, quantity.value)
  }
}
</script>

<template>
  <Navbar/>
  <div v-if="material" class="product-section">
    <div id="first-product-sect">
      <img :src="material.image" :alt="material.name">
    </div>
    <div id="second-product-sect">
      <h1>{{ material.name }}</h1>
      <p>{{ material.description }}</p>
      <p>Available stock: {{ material.stock }} {{ material.unit }}</p>
      <div class="material-order">
        <div class="quantity-field">
          <label for="material-quantity">Quantity</label>
          <input id="material-quantity" v-model.number="quantity" type="number" min="1">
        </div>
        <button type="button" @click="handleOrder">Order</button>
      </div>
    </div>
  </div>
  <div v-else>
    <h1>Material Not Found</h1>
    <p>No material exists with ID {{ materialId }}.</p>
  </div>
  <Footer/>
</template>

<style scoped>
.material-order {
  display: flex;
  align-items: end;
  gap: 0.6rem;
  margin-top: 1.25rem;
}

.material-order label {
  display: block;
  margin-bottom: 0.3rem;
}

.quantity-field {
  display: flex;
  flex-direction: column;
}

.material-order input {
  box-sizing: border-box;
  width: 5rem;
  padding: 0.45rem 0.5rem;
  border: 1px solid #aaa;
  border-radius: 4px;
  font: inherit;
}

.material-order button {
  padding: 0.5rem 1rem;
  border: 1px solid #d8870c;
  border-radius: 4px;
  background: #e69114;
  font: inherit;
  cursor: pointer;
}
</style>
