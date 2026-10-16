<script setup lang="ts">
import { ref } from "vue";

const sessionDate = ref("");
const sessionLeader = ref("");
const sessionDuration = ref(60);

const emit = defineEmits<{ add: [date: string, leader: string, durationMinutes: number] }>();

function handleSubmitSession() {
  if (!Number.isInteger(sessionDuration.value) || sessionDuration.value < 1) {
    alert("Enter a duration in whole minutes, at least 1");
    return;
  }
  if (sessionLeader.value.trim() === "") {
    alert("Enter a leader");
    return;
  }
  if (sessionDate.value === "") {
    alert("Choose a date and time");
    return;
  }

  emit("add", sessionDate.value, sessionLeader.value, sessionDuration.value);
}
</script>

<template>
  <h2>Add training session</h2>
  <label for="session-date">Date and time</label>
  <input id="session-date" type="datetime-local" v-model="sessionDate" />
  <p>{{ sessionDate }}</p>
  <label for="session-leader">Session leader:</label>
  <input id="session-leader" v-model="sessionLeader" />
  <p>{{ sessionLeader }}</p>
  <label for="session-duration">Session duration:</label>
  <input id="session-duration" type="number" min="1" step="1" v-model.number="sessionDuration" />
  <p>{{ sessionDuration }}</p>
  <button type="button" @click="handleSubmitSession">Add session</button>
</template>
