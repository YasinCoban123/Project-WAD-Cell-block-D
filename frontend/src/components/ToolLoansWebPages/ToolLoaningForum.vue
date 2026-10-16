<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import type { Tool } from '@/types/Tool.ts'
import Navbar from '../Navbar.vue'
import Footer from '../Footer.vue'

const route = useRoute()

const tools: Tool[] = JSON.parse(localStorage.getItem('tools') || '[]')

const tool = computed(() =>
  tools.find((t) => String(t.id) === String(route.params.id)),
)
</script>

<template>
  <Navbar />
  <div class="product-section" v-if="tool">
    <div id="first-product-sect">
      <img :src="tool.image" :alt="tool.name" />
    </div>
    <div id="second-product-sect">
      <h1>{{ tool.name }}</h1>
      <h2>Conditie: {{ tool.Condition }}</h2>
      <p>{{ tool.description }}</p>
    </div>
  </div>
  <div v-else class="product-section">
    <h1>Tool niet gevonden</h1>
    <router-link to="/tools">Terug naar overzicht</router-link>
  </div>
  <nav id = "GoBackLink">
    <router-link to="/tools">Back to tools</router-link>
  </nav>
  <Footer />
</template>

<style>
#first-product-sect {
  background: url('../../assets/img/workbench.jpg');
}
#GoBackLink {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}

#GoBackLink a {
  display: inline-block;
  padding: 1rem 3rem;
  background-color: #ff7a00;
  color: #fff;
  font-weight: bold;
}

</style>