<script setup lang ="ts">
import { ref } from 'vue';
import type { ProjectType } from '../../types/ProjectType';
import Navbar from '../Navbar.vue'
import Footer from '../Footer.vue'

const projects = ref<ProjectType[]>(JSON.parse(localStorage.getItem('projects') || '[]'));
</script>

<template>
        <Navbar/>
        <h1>Projects</h1>
        <p>On this page you can find inspiring projects of everyone who used Blok D utensils.</p>

        <div v-for="project in projects.filter((p) => p.status === 'published')" :key="project.id" class="project-card">
        <h3>{{ project.name }}</h3>
        <p>{{ project.description }}</p>
        <a :href="project.webAddress" target="_blank">{{ project.webAddress }}</a>
        </div>

        <nav class="sidebar">
            <ul>
                <li><router-link to="/add-project" class="addprojectbtn">Add Your Project</router-link></li>
                <li><router-link to="/rate-projects" class="rating">Rate Projects</router-link></li>
                <li><router-link to="/all-projects" class="allprojects">All Projects</router-link></li>
            </ul>
        </nav>
  <Footer/>
</template>

<style scoped>

.project-card {
    border: 1px solid black;
    border-radius: 8px;
    padding: 16px;
    margin: 16px 0;
    max-width: 500px;
    background-color: rgb(251, 145, 31);
    box-shadow: 0 2px 4px rgb(251, 145, 31);
    color:rgb(0, 5, 5)
}

</style>