<script setup lang="ts">
import { ref, watch } from "vue";
import MachineForm from "./MachineForm.vue";
import Navbar from "../Navbar.vue";
import Footer from "../Footer.vue";
import berthaImage from "../../assets/img/Bertha.jpeg";
import SparkImage from "../../assets/img/Spark.webp";
import atlasImage from "../../assets/img/Atlas.jpeg";
import orbitImage from "../../assets/img/Orbit.jpg";
import pixelImage from "../../assets/img/Pixel.jpg";
import boltImage from "../../assets/img/Bolt.jpg";
import echoImage from "../../assets/img/Echo.jpg";
import stitchImage from "../../assets/img/Stitch.png";

enum MachineStatus {
  InService = "In service",
  OutOfService = "Out of service",
}
const protectedMachineIds = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const machines = ref([
  {
    id: 1,
    name: "Bertha",
    type: "Laser cutter",
    image: berthaImage,
    status: MachineStatus.InService,
  },
  {
    id: 2,
    name: "Spark",
    type: "Laser cutter",
    image: SparkImage,
    status: MachineStatus.InService,
  },
  {
    id: 3,
    name: "Atlas",
    type: "3D printer",
    image: atlasImage,
    status: MachineStatus.InService,
  },
  {
    id: 4,
    name: "Nova",
    type: "3D printer",
    image: atlasImage,
    status: MachineStatus.InService,
  },
  {
    id: 5,
    name: "Orbit",
    type: "3D printer",
    image: orbitImage,
    status: MachineStatus.InService,
  },
  {
    id: 6,
    name: "Pixel",
    type: "3D printer",
    image: pixelImage,
    status: MachineStatus.InService,
  },
  {
    id: 7,
    name: "Bolt",
    type: "3D printer",
    image: boltImage,
    status: MachineStatus.InService,
  },
  {
    id: 8,
    name: "Echo",
    type: "3D printer",
    image: echoImage,
    status: MachineStatus.InService,
  },
  {
    id: 9,
    name: "Stitch",
    type: "Embroidery machine",
    image: stitchImage,
    status: MachineStatus.InService,
  },
]);
const savedMachines = localStorage.getItem("machines");
if (savedMachines !== null) {
  machines.value = JSON.parse(savedMachines);
}

watch(
  machines,
  (latest) => {
    localStorage.setItem("machines", JSON.stringify(latest));
  },
  { deep: true },
);

function handleAdd(name: string, type: string, image: File | null) {
  if (image === null) {
    alert("Choose an image first");
    return;
  }
  const reader = new FileReader();

  reader.onload = () => {
    const imageUrl = reader.result as string;
    machines.value.push({
      id: Date.now(),
      name: name,
      type: type,
      image: imageUrl,
      status: MachineStatus.InService,
    });
  };
  reader.readAsDataURL(image);
}

function changeMachineStatus(id: number) {
  const machine = machines.value.find((ma) => ma.id === id);

  if (!machine) return;
  if (machine.status === MachineStatus.InService) {
    machine.status = MachineStatus.OutOfService;
  } else {
    machine.status = MachineStatus.InService;
  }
}
function deleteMachine(id: number) {
  if (protectedMachineIds.includes(id)) {
    alert("This machine cannot be deleted. Change its status instead.");
    return;
  }
  machines.value = machines.value.filter((machine) => {
    return machine.id !== id;
  });
}
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
        <RouterLink :to="'/MachineTime/' + machine.name" class="machine-link">
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
