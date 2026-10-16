import { ref, watch } from "vue";

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

const savedMachineSesseions = localStorage.getItem("machineSessions");

if (savedMachineSesseions !== null) {
  sessions.value = JSON.parse(savedMachineSesseions);
}

watch(
  sessions,
  (latest) => {
    localStorage.setItem("machineSessions", JSON.stringify(latest));
  },
  { deep: true },
);

function handleAddSession(
  machineId: number,
  date: string,
  leader: string,
  durationMinutes: number,
) {
  const newStart = new Date(date).getTime();
  const newEnd = newStart + durationMinutes * 60 * 1000; // Convert the duration from minutes to milliseconds
  for (const session of sessions.value) {
    if (session.machineId !== machineId) continue;

    const existingStart = new Date(session.date).getTime();
    const existingEnd = existingStart + session.durationMinutes * 60 * 1000;

    if (newStart < existingEnd && newEnd > existingStart) {
      alert("This machine already has a session during that time");
      return false;
    }
  }

  sessions.value.push({
    id: Date.now(),
    machineId: machineId,
    date: date,
    leader: leader,
    durationMinutes: durationMinutes,
  });
  return true;
}
export function useMachineSessions() {
  return {
    getMachineSessions,
    handleAddSession,
  };
}
