<script setup lang ="ts">
import { ref } from 'vue';
import type { ProjectType } from '../types/ProjectType';

const projects = ref<ProjectType[]>(JSON.parse(localStorage.getItem('projects') || '[]'));
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

        <div v-for="project in projects" :key="project.id" class="project-card">
        <h3>{{ project.name }}</h3>
        <p>{{ project.description }}</p>
        <a :href="project.webAddress" target="_blank">{{ project.webAddress }}</a>
        </div>

        <nav class="sidebar">
            <ul>
                <li><router-link to="/add-project" class="addprojectbtn">Add Your Project</router-link></li>
                <li><router-link to="/rate-projects" class="rating">Rate Projects</router-link></li>
            </ul>
        </nav>
</template>

<style scoped>
@import "../../../front-endhtml/style.css";

.project-card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    margin: 16px 0;
    max-width: 500px;
    background-color: black;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>