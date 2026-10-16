<script setup lang="ts">
import Navbar from "../Navbar.vue";
import Footer from "../Footer.vue";
import { useRoute } from "vue-router";
import { useMachines } from "../../composibles/useMachines";
import { computed } from "vue";
import { useMachineSessions } from "../../composibles/useMachineSessions";
import MachineDetails from "./MachineDetails.vue";
import SessionForm from "./SessionForm.vue";

const result = useMachines();
const getMachine = result.getMachine;
const sessionResult = useMachineSessions();
const getMachineSessions = sessionResult.getMachineSessions;
const handleAddSession = sessionResult.handleAddSession;

const machine = computed(() => {
  const id = Number(route.params.id);
  return getMachine(id);
});

const machineSessions = computed(() => {
  const id = Number(route.params.id);
  return getMachineSessions(id);
});

const route = useRoute();

function addSession(date: string, leader: string, durationMinutes: number) {
  if (!machine.value) return;

  const added = handleAddSession(machine.value.id, date, leader, durationMinutes);

  if (added) {
    alert("Session added successfully");
  }
}
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
    <SessionForm v-if="machine" :key="machine.id" @add="addSession" />
  </main>
  <Footer />
</template>
