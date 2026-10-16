<script setup lang="ts">
import { ref } from "vue";
const newMachineName = ref("");
const newMachineType = ref("Laser cutter");
const newMachineImage = ref<File | null>(null);

const emit = defineEmits<{ add: [name: string, type: string, image: File | null] }>();

function handleImageChange(event: Event) {
  const input = event.target as HTMLInputElement;
  newMachineImage.value = input.files?.[0] ?? null;
}

function handleSubmit() {
  if (newMachineName.value.trim() === "") {
    alert("Enter a machine");
    return;
  }
  emit("add", newMachineName.value, newMachineType.value, newMachineImage.value);
}
</script>

<template>
  <h2>Add machine</h2>
  <label for="machine-name">Machine name</label>
  <input id="machine-name" type="text" v-model="newMachineName" />
  <p>{{ newMachineName }}</p>

  <label for="machine-type">Machine type:</label>
  <select id="machine-type" v-model="newMachineType">
    <option value="Laser cutter">Laser cutter</option>
    <option value="3D printer">3D printer</option>
    <option value="Embroidery machine">Embroidery machine</option>
  </select>
  <p>{{ newMachineType }}</p>
  <label for="machine-image">Machine image:</label>
  <input id="machine-image" type="file" accept="image/*" @change="handleImageChange" />
  <p v-if="newMachineImage">Selected image: {{ newMachineImage.name }}</p>
  <button type="button" @click="handleSubmit">Add machine</button>
</template>
