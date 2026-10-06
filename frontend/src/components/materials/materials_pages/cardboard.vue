<script setup lang="ts">
import Navbar from '../../Navbar.vue'
import Footer from '../../Footer.vue'
import cardboardImage from '../../../assets/img/cardboard.jpg'
</script>
<template>
      <Navbar/>
  <div class="product-section">
    <div id="first-product-sect">
      <img :src="cardboardImage" alt="Cardboard">
    </div>
    <div id="second-product-sect">
      <h1>Cardboard</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Dolor nam repellendus minima quia aliquid sunt quo, sapiente consequatur unde 
        expedita eveniet! Aperiam obcaecati dolore quo nulla consequatur aut vel porro!
      </p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Dolor nam repellendus minima quia aliquid sunt quo, sapiente consequatur unde 
        expedita eveniet! Aperiam obcaecati dolore quo nulla consequatur aut vel porro!
      </p>
    </div>
  </div>
  <Footer/>
</template>