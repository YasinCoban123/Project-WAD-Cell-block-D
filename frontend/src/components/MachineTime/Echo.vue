<script setup lang="ts">
import Navbar from '../Navbar.vue'
import Footer from '../Footer.vue'
import MachineDetails from './MachineDetails.vue'

const sessions = [
  {
    id: 1,
    date: '2026-09-21T9:00',
    leader: 'Jurn',
    durationMinutes: 60,
  },
  {
    id: 2,
    date: '2026-09-21T11:00',
    leader: 'Jurn',
    durationMinutes: 60,
  },
  {
    id: 3,
    date: '2026-11-22T11:00',
    leader: 'Basel',
    durationMinutes: 90,
  },
  {
    id: 4,
    date: '2026-09-22T19:00',
    leader: 'Jaro',
    durationMinutes: 60,
  },
  {
    id: 5,
    date: '2026-11-23T12:00',
    leader: 'Amine',
    durationMinutes: 90,
  },
  {
    id: 6,
    date: '2026-09-24T18:00',
    leader: 'Yasin',
    durationMinutes: 120,
  },
]
</script>
<template>
        <Navbar/>
    <main>
       <MachineDetails 
       name="Echo" 
       type="3D printer"
       :sessions="sessions"
        />

        <!-- <h2>Training sessions</h2>
        <label for="date">Choose a date:</label>
        <input type="date" id="date" name="session-date">
        <details class="session-card">
            <summary>Date: 21 September 2026 at 18:00</summary>
            <p>Leader: Jurn</p>

        </details> -->

        <!-- <nav>
            <router-link to="/MachineTime">Back to machines</router-link>
        </nav> -->
    </main>
      <Footer/>
</template>