<script setup lang ="ts">

import { ref, watch } from 'vue';
import type { ProjectType } from '../../types/ProjectType';
import Navbar from '../Navbar.vue'
import Footer from '../Footer.vue'

const projects = ref<ProjectType[]>(JSON.parse(localStorage.getItem('projects') || '[]'));

watch(projects, (v) => localStorage.setItem('projects', JSON.stringify(v)), { deep: true })

const editingProject = ref<ProjectType | null>(null);

function deleteProjects(id: number) {
  projects.value = projects.value.filter(p => p.id !== id)
}

function updateProjects(project: ProjectType) {
  const index = projects.value.findIndex(p => p.id === project.id)
  if (index !== -1) {
    projects.value[index] = project
  }
}

function handleUpdate(project: ProjectType) {
  updateProjects(project)
  cancelEdit()
}

function startEditing(project: ProjectType) {
  editingProject.value = { ...project }
}

function cancelEdit() {
  editingProject.value = null
}
</script>

<template>
        <Navbar/>
        <h1>All Projects</h1>
        <p>On this page you can find inspiring projects of everyone who used Blok D utensils.</p>

        <div v-for="project in projects" :key="project.id" class="project-card">
        <template v-if="editingProject && editingProject.id === project.id">
            <input v-model="editingProject.name" />
            <textarea v-model="editingProject.description"></textarea>
            <input v-model="editingProject.webAddress" />
            <button @click="handleUpdate(editingProject)">Save</button>
            <button @click="cancelEdit">Cancel</button>
        </template>
        <template v-else>
            <h3>{{ project.name }}</h3>
            <p>{{ project.description }}</p>
            <a :href="project.webAddress" target="_blank">{{ project.webAddress }}</a>
            <button @click="startEditing(project)">Edit</button>
            <button @click="deleteProjects(project.id)">Delete</button>
        </template>
        </div>

        <nav class="sidebar">
            <ul>
                <li><router-link to="/add-project" class="addprojectbtn">Add Your Project</router-link></li>
                <li><router-link to="/rate-projects" class="rating">Rate Projects</router-link></li>
                <li><router-link to="/projects" class="allprojects">Published Projects</router-link></li>
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