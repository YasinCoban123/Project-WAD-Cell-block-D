<script setup lang="ts">
import Navbar from '../Navbar.vue'
import Footer from '../Footer.vue'
</script>
<template>
  <Navbar/>
<h1>Work at Blok D</h1>
<p>If you are interested in working at Blok D, please fill out the form below and we will get back to you as soon as
  possible.</p>

<form action="submit_application.php" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required><br><br>

  <label for="position">Position:</label>
  <input type="text" id="position" name="position" required><br><br>
<Footer/>
</form>
</template>
