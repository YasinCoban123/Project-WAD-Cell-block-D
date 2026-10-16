<script setup lang="ts">
import { ref, computed } from "vue";
const props = defineProps<{
  name: string;
  type: string;
  sessions?: {
    id: number;
    date: string;
    leader: string;
    durationMinutes: number;
  }[];
}>();
const selectedDate = ref("");
const filteredSessions = computed(() => {
  const sessions = props.sessions ?? [];
  return sessions.filter((session) => {
    return session.date.slice(0, 10) === selectedDate.value;
  });
});
const sessionDates = computed(() => {
  const dates: string[] = [];

  for (const session of props.sessions ?? []) {
    const date = session.date.slice(0, 10);

    if (!dates.includes(date)) {
      dates.push(date);
    }
  }
  return dates;
});
</script>

<template>
  <h1>{{ name }}</h1>
  <p>Type: {{ type }}</p>
  <h2>Training sessions</h2>
  <p v-if="sessionDates.length === 0">No training sessions available yet.</p>
  <div v-else>
    <label for="session-day">Training dates:</label>

    <select id="session-day" v-model="selectedDate">
      <option value="" disabled>Choose a date</option>
      <option v-for="date in sessionDates" :key="date" :value="date">
        {{ date }}
      </option>
    </select>
  </div>
  <div class="session-list">
    <details v-for="session in filteredSessions" :key="session.id" class="session-card">
      <summary>Date: {{ session.date.slice(0, 10) }} at {{ session.date.slice(11, 16) }}</summary>
      <p>Leader: {{ session.leader }}</p>
      <p>Duration: {{ session.durationMinutes }} minutes</p>
    </details>
  </div>
  <nav>
    <RouterLink to="/MachineTime">Back to machines</RouterLink>
  </nav>
</template>
