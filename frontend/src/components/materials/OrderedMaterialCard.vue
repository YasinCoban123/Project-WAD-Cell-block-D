<script setup lang="ts">
import { ref } from 'vue'
import type { Material } from '../../types/Material'
import type { OrderedMaterial } from '../../composibles/useOrderedMaterials'

const props = defineProps<{
  order: OrderedMaterial
  material: Material
}>()

const emit = defineEmits<{
  delete: [id: number]
  update: [id: number, quantity: number]
}>()

const isEditing = ref(false)
const editedQuantity = ref(0)
const formError = ref('')
const successMessage = ref('')

function startEditing(): void {
  editedQuantity.value = props.order.quantity
  formError.value = ''
  successMessage.value = ''
  isEditing.value = true
}

function saveEdit(): void {
  formError.value = ''
  successMessage.value = ''

  if (!Number.isInteger(editedQuantity.value) || editedQuantity.value <= 0) {
    formError.value = 'Enter een waarde groter dan 0.'
    return
  }

  emit('update', props.order.id, editedQuantity.value)
  isEditing.value = false
  successMessage.value = 'hoeveelheid succesvol geupdate.'
}

function cancelEdit(): void {
  isEditing.value = false
}
</script>

<template>
  <div class="ordered-material-card">
    <img :src="material.image" :alt="material.name">
    <h2>{{ material.name }}</h2>
    <div v-if="isEditing">
      <label :for="`order-quantity-${order.id}`">Quantity</label>
      <input :id="`order-quantity-${order.id}`" v-model.number="editedQuantity" type="number" min="1">
      <button type="button" @click="saveEdit">Save</button>
      <button type="button" @click="cancelEdit">Cancel</button>
      <p v-if="formError" class="error">{{ formError }}</p>
    </div>
    <div v-else>
      <p>Quantity: {{ order.quantity }}</p>
      <button type="button" @click="startEditing">Edit</button>
      <button type="button" @click="emit('delete', order.id)">Delete</button>
      <p v-if="successMessage" class="success">{{ successMessage }}</p>
    </div>
  </div>
</template>

<style scoped>
.ordered-material-card {
  width: 220px;
}

.ordered-material-card img {
  height: 220px;
  width: 220px;
  border: 8px solid #2878c8;
  border-radius: 40px;
}

.ordered-material-card button {
  padding: 5px 10px;

  border: 1px solid #d8870c;
  border-radius: 4px;
  background: #e69114;
  font: inherit;
  cursor: pointer;
    margin-right: 10px;
    margin-top: 10px;

}

.error {
  color: #c62828;
}

.success {
  color: #2e7d32;
}
</style>
