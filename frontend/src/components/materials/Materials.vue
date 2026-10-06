<script setup lang="ts">
import Navbar from '../Navbar.vue'
import Footer from '../Footer.vue'
import acrylicImage from '../../assets/img/acrylic.jpg'
import cardboardImage from '../../assets/img/cardboard.jpg'
import filamentImage from '../../assets/img/filemant.jpg'
import plywoodImage from '../../assets/img/plywood.jpg'

</script>
<template>
      <Navbar/>
<h1 id="h1-materials-1">Help Cards</h1>
  <div class="section-1">
    <div id="first-sect">
      <ol>List of items
        <br>
        <br>
        <li><router-link to="/materials/filament">Filament</router-link> | Quantity. 30KG</li>
        <li><router-link to="/materials/plywood">Plywood</router-link> | Quantity. 500 pieces</li>
        <li><router-link to="/materials/acrylic">Acrylic</router-link> | Quantity. 300 pieces</li>
        <li><router-link to="/materials/cardboard">Cardboard</router-link> | Quantity. 150 pieces</li>
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
        <ImageAndText>
            <router-link to="/materials/filament"><img id="img-materials-4" :src="filamentImage" alt="Filament"></router-link>
            <h2>Filament</h2>
        </ImageAndText>
        <ImageAndText>
            <router-link to="/materials/plywood"><img id="img-materials-4" :src="plywoodImage" alt="Plywood"></router-link>
            <h2>Plywood</h2>
        </ImageAndText>
        <ImageAndText>
            <router-link to="/materials/acrylic"><img id="img-materials-4" :src="acrylicImage" alt="Acrylic"></router-link>
            <h2>Acrylic</h2>
        </ImageAndText>
                <ImageAndText>
            <router-link to="/materials/cardboard"><img id="img-materials-4" :src="cardboardImage" alt="Cardboard"></router-link>
            <h2>Cardboard</h2>
        </ImageAndText>
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
  <Footer/>
</template>