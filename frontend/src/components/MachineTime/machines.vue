<script setup lang="ts">
import Navbar from '../Navbar.vue'
import Footer from '../Footer.vue'
import berthaImage from '../../assets/img/Bertha.jpeg'
</script>
<template>
<Navbar/>
    <main>
        <h1>Machines</h1>
        <p> Choose a machine to view its details, training sessions and bookings</p>
        <article class="machine-card">
                <router-link to="/MachineTime/Bertha"><img class="machine-image" :src="berthaImage"
                    alt="Laser cutter used for Bertha training" width="200"></router-link>
            <h2>Bertha</h2>
            <p>Type: Laser cutter</p>
        </article>
    </main>
      <Footer/>
</template>