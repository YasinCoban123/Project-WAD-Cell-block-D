<script setup lang="ts">
import Navbar from '../Navbar.vue'
import Footer from '../Footer.vue'
</script>

<template>
        <Navbar/>
        <h1>Rate Projects</h1>
        <p>On this page you can rate the projects of everyone who used Blok D utensils.</p>

        Chose a project to rate:
        <p> link to project 1:</p>

        <p> link to project 2:</p>

        <p> how many stars out of 5?</p>
        <form>
            <input type="radio" id="star1" name="rating" value="1">
            <label for="star1">1</label>
            <input type="radio" id="star2" name="rating" value="2">
            <label for="star2">2</label>
            <input type="radio" id="star3" name="rating" value="3">
            <label for="star3">3</label>
            <input type="radio" id="star4" name="rating" value="4">
            <label for="star4">4</label>
            <input type="radio" id="star5" name="rating" value="5">
            <label for="star5">5</label>
        </form>
          <Footer/>


</Template>

<style scoped>
</style>