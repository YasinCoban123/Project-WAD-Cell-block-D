<script setup lang="ts">
import Navbar from "../Navbar.vue";
import Footer from "../Footer.vue";
import { useRoute } from "vue-router";
import { useMachines } from "../../composibles/useMachines";
import { computed } from "vue";
import { useMachineSessions } from "../../composibles/useMachineSessions";
import MachineDetails from "./MachineDetails.vue";

const result = useMachines();
const getMachine = result.getMachine;
const sessionResult = useMachineSessions();
const getMachineSessions = sessionResult.getMachineSessions;

const machine = computed(() => {
  const id = Number(route.params.id);
  return getMachine(id);
});

const machineSessions = computed(() => {
  const id = Number(route.params.id);
  return getMachineSessions(id);
});

const route = useRoute();
</script>

<template>
  <Navbar />
  <main>
    <MachineDetails
      v-if="machine"
      :key="machine.id"
      :name="machine.name"
      :type="machine.type"
      :sessions="machineSessions"
    />

    <p v-else>Machine not found</p>
  </main>
  <Footer />
</template>
