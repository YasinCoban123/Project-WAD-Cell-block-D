<script setup lang="ts">
import { ref, watch } from 'vue'
import type { Tool } from '@/types/Tool.ts'
import { defaultTools } from '../data/tools.ts'
import Navbar from '../Navbar.vue'
import Footer from '../Footer.vue'



const tools = ref<Tool[]>(JSON.parse(localStorage.getItem('tools') || '[]'))

if (tools.value.length === 0) {
  tools.value = defaultTools
}


watch(
  tools,
  (value) => localStorage.setItem('tools', JSON.stringify(value)),
  { deep: true, immediate: true },
)
</script>

<template>
  <Navbar />
    <h1 id="Titel">Choose a tool</h1>
    <div class="Tools images">
    <div v-for="tool in tools" :key="tool.id" class="tool-card">
        <router-link :to="`/Tools/${tool.id}`">
        <img class="img-tools" :src="tool.image" :alt="tool.name" />
        </router-link>
        <h2>{{ tool.name }}</h2>
        <p>Conditie: {{ tool.Condition }}</p>
    </div>
    </div>

  <Footer />
</template>

<style>
.img-tools {
  height:220px;
  width: 220px;
  border: 6px solid rgb(255, 162, 0);
  background-image: url('../../assets/img/workbench.jpg');
  background-size: cover;
}

.Tools {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 100px;
  font-size: 15px;
}

#Titel {
  display: flex;
  font-size: 50px;
  justify-content: center;
}

.tool-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.tool-card h2{
    font-weight: bold;
}
.tool-card {
  margin: 4px 0;
}
</style>