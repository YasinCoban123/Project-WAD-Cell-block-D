<script setup lang="ts">
import Navbar from '../Navbar.vue'
import Footer from '../Footer.vue'
</script>
<template>
        <Navbar/>
    <main>
        <h1>Bertha</h1>
        <p>Type: Laser cutter</p>
        <h2>Training sessions</h2>
        <label for="date">Choose a date:</label>
        <input type="date" id="date" name="session-date">
        <details class="session-card">
            <summary>Date: 21 September 2026 at 18:00</summary>
            <p>Leader: Jurn</p>

        </details>

        <nav>
            <router-link to="/MachineTime">Back to machines</router-link>
        </nav>
    </main>
      <Footer/>
</template>