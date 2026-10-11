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
    date: '2026-09-30T19:00',
    leader: 'Amine',
    durationMinutes: 90,
  },
  {
    id: 3,
    date: '2026-12-26T18:00',
    leader: 'Yasin',
    durationMinutes: 120,
  },
  {
    id: 4,
    date: '2026-10-29T18:00',
    leader: 'Karlijn',
    durationMinutes: 60,
    
  },
  {
    id: 5,
    date: '2026-11-28T18:00',
    leader: 'Marian',
    durationMinutes: 60,
    
  }
]
</script>

<template>
  <Navbar />
  <main>
    <MachineDetails
    name="Nova"
    type="3D printer"
    :sessions="sessions"/>
  </main>
  <Footer />
</template>