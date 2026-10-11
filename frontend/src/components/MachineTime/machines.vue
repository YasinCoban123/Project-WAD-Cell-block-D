<script setup lang="ts">

import Navbar from '../Navbar.vue'
import Footer from '../Footer.vue'
import berthaImage from '../../assets/img/Bertha.jpeg'
import SparkImage from '../../assets/img/Spark.webp'
import atlasImage from '../../assets/img/Atlas.jpeg'
import orbitImage from '../../assets/img/Orbit.jpg'
import pixelImage from '../../assets/img/Pixel.jpg'
import boltImage from '../../assets/img/Bolt.jpg'
import echoImage from '../../assets/img/Echo.jpg'
import stitchImage from '../../assets/img/Stitch.png'

enum MachineStatus {
  InService = 'In service',
  OutOfService = 'Out of service',
}

const machines = [
  {
    id: 1,
    name: 'Bertha',
    type: 'Laser cutter',
    image: berthaImage,
    status: MachineStatus.InService,
  },
  {
    id: 2,
    name: 'Spark',
    type: 'Laser cutter',
    image: SparkImage,
    status: MachineStatus.InService,
  },
  {
    id: 3,
    name: 'Atlas',
    type: '3D printer',
    image: atlasImage,
    status: MachineStatus.InService,
  },
  {
  id: 4,
  name: 'Nova',
  type: '3D printer',
  image: atlasImage,
  status: MachineStatus.InService,
  },
  {
  id: 5,
  name: 'Orbit',
  type: '3D printer',
  image: orbitImage,
  status: MachineStatus.InService,
  },
  {
  id: 6,
  name: 'Pixel',
  type: '3D printer',
  image: pixelImage,
  status: MachineStatus.InService,
  },
  {
  id: 7,
  name: 'Bolt',
  type: '3D printer',
  image: boltImage,
  status: MachineStatus.InService,
  },
  {
  id: 8,
  name: 'Echo',
  type: '3D printer',
  image: echoImage,
  status: MachineStatus.InService,
  },
  {
  id: 9,
  name: 'Stitch',
  type: '3D printer',
  image: stitchImage,
  status: MachineStatus.InService,
  }
]

</script>
<template>
<Navbar/>
    <main>
         <h1>Machines</h1>
        <p> Choose a machine to view its details, training sessions and bookings</p>

        <div class="machine-list">
        <RouterLink v-for="machine in machines"
        :key="machine.id"
        :to="'/MachineTime/'+ machine.name"
         class="machine-link">
        <article class="machine-card">
                <img class="machine-image" :src="machine.image"
                    :alt="machine.name + ' - ' + machine.type" width="200">
            <h2>{{ machine.name }}</h2>
            <p>Type: {{ machine.type }}</p>
            <p class="machine-status"
            :class="{ 'out-of-service': machine.status === MachineStatus.OutOfService }"
            >
            Status: {{ machine.status }}</p>
        </article>
        </RouterLink>
        </div>
    </main>
      <Footer/>
</template>  



