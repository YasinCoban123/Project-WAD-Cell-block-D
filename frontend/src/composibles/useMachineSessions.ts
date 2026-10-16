import { ref } from "vue";

const sessions = ref([
  {
    id: 1,
    machineId: 1,
    date: "2026-09-21T18:00",
    leader: "Jurn",
    durationMinutes: 60,
  },
  {
    id: 2,
    machineId: 1,
    date: "2026-09-21T19:00",
    leader: "Jurn",
    durationMinutes: 60,
  },
  {
    id: 3,
    machineId: 1,
    date: "2026-09-22T18:00",
    leader: "Basel",
    durationMinutes: 60,
  },
  {
    id: 4,
    machineId: 1,
    date: "2026-09-22T19:00",
    leader: "Jaro",
    durationMinutes: 60,
  },
  {
    id: 5,
    machineId: 1,
    date: "2026-09-23T18:00",
    leader: "Amine",
    durationMinutes: 60,
  },
  {
    id: 6,
    machineId: 1,
    date: "2026-09-24T18:00",
    leader: "Yasin",
    durationMinutes: 60,
  },
]);

function getMachineSessions(machineId: number) {
  return sessions.value.filter((session) => {
    return session.machineId === machineId;
  });
}

export function useMachineSessions() {
  return {
    getMachineSessions,
  };
}
