<script setup>
</script>

<template>
    <nav id="upper-nav">
        <div>
        <a href="../index.html"><img id="img-logo" src="../machine-time/images/logo.png" alt="Blok D logo" width="67"></a>
        </div>
    </nav>
    <nav id="navbar">
        <div id="nav-links">
            <ul>
                <li><a href="../index.html">Home</a></li>
                <li><a href="../about-me/about.html">About</a></li>
                <li><a href="../projects/Projects.html">Projects</a></li>
                <li><a href="../materials/materials.html">Materials</a></li>
                <li><a href="../machine-time/machines.html">Machines</a></li>
                <li><a href="../work-at/workat.html">Work at Blok D</a></li>
                <li><a href="../Tool-Loans/weeknd.html">Tools to loan</a></li>
                <li><a href="../index.html">Contact</a></li>
            </ul>
            </div>
    </nav>
        <h1>Projects</h1>
        <p>On this page you can find inspiring projects of everyone who used Blok D utensils.</p>

        <p> link to project 1:</p>
        <p> link to project 2:</p>
        <p> link to project 3:</p>
        <p> link to project 4:</p>

        <nav class="sidebar">
            <ul>
                <li><router-link to="/add-project" class="addprojectbtn">Add Your Project</router-link></li>
                <li><router-link to="/rate-projects" class="rating">Rate Projects</router-link></li>
            </ul>
        </nav>
</template>

<style scoped>
@import "../../../front-endhtml/style.css";
</style>