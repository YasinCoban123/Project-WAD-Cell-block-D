<script setup lang="ts">
import Navbar from '../Navbar.vue'
import Footer from '../Footer.vue'
import MachineDetails from './MachineDetails.vue';
const sessions = [
  {
    id: 1,
    date: '2026-09-25T18:00',
    leader: 'Basel',
    durationMinutes: 60,
  },
  {
    id: 2,
    date: '2026-09-25T19:00',
    leader: 'Amine',
    durationMinutes: 90,
  },
  {
    id: 3,
    date: '2026-09-26T18:00',
    leader: 'Yasin',
    durationMinutes: 60,
  },
]
</script>

<template>
  <Navbar />
  <main>
    <MachineDetails
    name="Spark"
    type="Laser cutter"
    :sessions="sessions"/>
  </main>
  <Footer />
</template>