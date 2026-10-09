<script setup lang="ts">
import { ref } from 'vue'
import type { Tool } from '../../types/ToolType.ts'
import Navbar from '../Navbar.vue'
import Footer from '../Footer.vue'

const tools = ref<Tool[]>(JSON.parse(localStorage.getItem 
  ('tools') || '[]'))
</script>

<template>
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tools Loan</title>
    <link rel="stylesheet" href="../style.css">
</head>
    <Navbar/>

    <h1 id="Titel">Choose a tool</h1>
    <div class="Tools images">
        <ImageAndText>
            <router-link to="/Tools/Sander"><img id="img-tools" src="../../assets/img/ColonelSander.png"></router-link>
            <h1>Sander</h1>
        </ImageAndText>
        <ImageAndText>
            <a href=""><img id="img-tools" src="../../assets/img/IronMan.jpg"></a>
            <h1>Calipers</h1>
        </ImageAndText>
        <ImageAndText>
            <a href=""><img id="img-tools" src="../../assets/img/Trio.png"></a>
            <h1>Clamps</h1>
        </ImageAndText>
        <ImageAndText>
            <a href=""><img id="img-tools" src="../../assets/img/WtfIsDit.png"></a>
            <h1>Soldering Irons</h1>
        </ImageAndText>
        <ImageAndText>
            <a href=""><img id="img-tools" src="../../assets/img/LijmPewPew.webp"></a>
            <h1>Glue Gun</h1>
        </ImageAndText>
        <ImageAndText>
            <a href=""><img id="img-tools" src="../../assets/img/Drill.avif"></a>
            <h1>Drill</h1>
        </ImageAndText>
        <ImageAndText>
            <a href=""><img id="img-tools" src="../../assets/img/LTG.jpg"></a>
            <h1>LTG</h1>
        </ImageAndText>
    </div>
    <Footer/>
</template>

<style>
#img-tools {
  height: 300px;
  width: 300px;
  border: 10px solid black;
  background-color: white;
}

.Tools {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 100px;
  font-size: 10px;
}

#Titel {
  display: flex;
  font-size: 50px;
  justify-content: center;
} 
</style>