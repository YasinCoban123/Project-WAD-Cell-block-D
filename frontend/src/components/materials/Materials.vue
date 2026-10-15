<script setup lang="ts">
import Navbar from '../Navbar.vue'
import Footer from '../Footer.vue'
import OrderedMaterialCard from './OrderedMaterialCard.vue'
import { useMaterials } from '../../composables/useMaterials'
import { useOrderedMaterials } from '../../composables/useOrderedMaterials'

const { materials } = useMaterials()
const { orderedMaterials, deleteMaterial, updateMaterial } = useOrderedMaterials()
</script>
<template>
      <Navbar/>
<h1 id="h1-materials-1">Help Cards</h1>
  <div class="section-1">
    <div id="first-sect">
      <ol>List of items
        <br>
        <br>
        <li v-for="material in materials" :key="`help-${material.id}`">
          <router-link :to="`/materials/${material.id}`">{{ material.name }}</router-link>
          | Stock. {{ material.stock }} {{ material.unit }}
        </li>
        <p>Click on the item's name, or click the images underneath, to go to the ordering page</p>
      </ol>
    </div>

    <div id="second-sect">
      <ol>Step by step process of ordering your item:
        <br>
        <br>
        <li>Choose your item</li>
        <li>Select how many you want of said item</li>
        <li>Click "Confirm" to succesvolly order it</li>
        <p><a id="beware">BEWARE:</a> Item ordering is only allowed if you are assigned to a project. And you can't order more than you are allowed</p>
      </ol>
    </div>
  </div>

  <h1 id="h1-materials-1">Available products</h1>
  <div class="material-tools">
        <div v-for="material in materials" :key="material.id">
          <router-link :to="`/materials/${material.id}`">
            <img id="img-materials-4" :src="material.image" :alt="material.name">
          </router-link>
          <h2>{{ material.name }}</h2>
        </div>
    </div>
  <h1 id="h1-materials-1">Tables with the information</h1>

  
  <div class="section-2">
    <table>
      <tr>
        <th>Material</th>
        <th>Sort</th>
        <th>Unit</th>
        <th>Stock</th>
        <th>Montlhy stock PP</th>
      </tr>
      <tr>
        <td>Filament</td>
        <td>Filament</td>
        <td>grams</td>
        <td>12.500 G</td>
        <td>5.000 G</td>
      </tr>
      <tr>
        <td>Plywood</td>
        <td>Sheet</td>
        <td>sheets</td>
        <td>350</td>
        <td>100</td>
      </tr>
      <tr>
        <td>Acrylic</td>
        <td>Sheet</td>
        <td>sheets</td>
        <td>220</td>
        <td>50</td>
      </tr>
      <tr>
        <td>Cardboard</td>
        <td>Sheet</td>
        <td>sheets</td>
        <td>100</td>
        <td>30</td>
      </tr>
    </table>

    <table>
      <tr>
        <th>Materiaal</th>
        <th>Soort</th>
        <th>Eenheid</th>
        <th>Voorraad</th>
        <th>Maandelijkse PP Voorraad</th>
      </tr>
      <tr>
        <td>Filament</td>
        <td>Filament</td>
        <td>grams</td>
        <td>12.500 G</td>
        <td>5.000 G</td>
      </tr>
      <tr>
        <td>Plywood</td>
        <td>Sheet</td>
        <td>sheets</td>
        <td>350</td>
        <td>100</td>
      </tr>
      <tr>
        <td>Acrylic</td>
        <td>Sheet</td>
        <td>sheets</td>
        <td>220</td>
        <td>50</td>
      </tr>
      <tr>
        <td>Cardboard</td>
        <td>Sheet</td>
        <td>sheets</td>
        <td>100</td>
        <td>30</td>
      </tr>
    </table>

    <table>
      <tr>
        <th>Materiaal</th>
        <th>Soort</th>
        <th>Eenheid</th>
        <th>Voorraad</th>
        <th>Maandelijkse PP Voorraad</th>
      </tr>
      <tr>
        <td>Filament</td>
        <td>Filament</td>
        <td>grams</td>
        <td>12.500 G</td>
        <td>5.000 G</td>
      </tr>
      <tr>
        <td>Plywood</td>
        <td>Sheet</td>
        <td>sheets</td>
        <td>350</td>
        <td>100</td>
      </tr>
      <tr>
        <td>Acrylic</td>
        <td>Sheet</td>
        <td>sheets</td>
        <td>220</td>
        <td>50</td>
      </tr>
      <tr>
        <td>Cardboard</td>
        <td>Sheet</td>
        <td>sheets</td>
        <td>100</td>
        <td>30</td>
      </tr>
    </table>
  </div>

  <h1 id="h1-materials-1">My Ordered Materials</h1>
  <div class="ordered-materials">
    <p id="ordered-materials-p" v-if="orderedMaterials.length === 0">No materials ordered yet.</p>
    <div v-else class="ordered-material-list">
      <OrderedMaterialCard
        v-for="order in orderedMaterials"
        :key="order.id"
        :order="order"
        :material="materials.find((material) => material.name === order.name)!"
        @delete="deleteMaterial"
        @update="updateMaterial"
      />
    </div>
  </div>

  <Footer/>
</template>

<style scoped>
.ordered-material-list {
  display: grid;
  grid-template-columns: repeat(4, 220px);
  justify-content: center;
  gap: 30px;
  padding-top: 40px;
  padding-bottom: 30px;
}
#ordered-materials-p
{
  display: flex;
  justify-content: center;
}
</style>
