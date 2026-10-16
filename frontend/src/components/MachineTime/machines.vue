<script setup lang="ts">
import MachineForm from "./MachineForm.vue";
import Navbar from "../Navbar.vue";
import Footer from "../Footer.vue";
import { useMachines } from "../../composibles/useMachines";

const { machines, handleAdd, changeMachineStatus, deleteMachine, MachineStatus } = useMachines();
</script>

<template>
  <Navbar />
  <main>
    <h1>Machines</h1>
    <p>Choose a machine to view its details, training sessions and bookings</p>

    <MachineForm @add="handleAdd" />

    <div class="machine-list">
      <!-- <button v-for="machine in machines" :key="machine.id" type="button" @click="changeMachineStatus(machine.id)">Change {{ machine.name }} status</button> -->
      <div v-for="machine in machines" :key="machine.id" class="machine-item">
        <RouterLink :to="'/MachineTime/' + machine.id" class="machine-link">
          <article class="machine-card">
            <img
              class="machine-image"
              :src="machine.image"
              :alt="machine.name + ' - ' + machine.type"
              width="200"
            />
            <h2>{{ machine.name }}</h2>
            <p>Type: {{ machine.type }}</p>
            <p
              class="machine-status"
              :class="{ 'out-of-service': machine.status === MachineStatus.OutOfService }"
            >
              Status: {{ machine.status }}
            </p>
          </article> </RouterLink
        ><button type="button" @click="changeMachineStatus(machine.id)">Change status</button>
        <button type="button" @click="deleteMachine(machine.id)">Delete</button>
      </div>
    </div>
  </main>
  <Footer />
</template>
