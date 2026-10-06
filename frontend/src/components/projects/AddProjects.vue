<script setup lang="ts">
import { ref } from 'vue';
import type { ProjectType } from '../../types/ProjectType';
import Navbar from '../Navbar.vue'
import Footer from '../Footer.vue'

const projectName = ref('');
const projectDescription = ref('');
const projectTools = ref('');
const webAddress = ref('');
const timePerTool = ref(0);
const projects = ref<ProjectType[]>(JSON.parse(localStorage.getItem('projects') || '[]'));

const submitProject = () => {
  const newProject: ProjectType = {
    id: Date.now(),
    name: projectName.value,
    description: projectDescription.value,
    tools: projectTools.value.split(',').map(tool => tool.trim()),
    webAddress: webAddress.value,
    timePerTool: timePerTool.value,
  };

  projects.value.push(newProject);
  localStorage.setItem('projects', JSON.stringify(projects.value));

  console.log('Submitted Project:', newProject);

  projectName.value = '';
  projectDescription.value = '';
  projectTools.value = '';
  webAddress.value = '';
  timePerTool.value = 0;
};

</script>



<template>
      <Navbar/>
  <h1>Projects</h1>
  <p>On this page you can find inspiring projects of everyone who used Blok D utensils.</p>

  <div class="upload-section">
    <div>Upload your project!</div>
    <form @submit.prevent="submitProject">
      <label for="project_name">Project Name:</label>
      <input type="text" id="project_name" v-model="projectName" required><br><br>

      <label for="project_description">Project Description:</label><br>
      <textarea id="project_description" v-model="projectDescription" rows="4" cols="50" required></textarea><br><br>

      <label for="project_tools">Project tools used:</label>
      <input type="text" id="project_tools" v-model="projectTools" required><br><br>

      <label for="web_adress">Web adress van het design</label>
      <input type="url" id="web_adress" v-model="webAddress" required><br><br>

      <label for="time_per_tool">Time spent per tool (in hours):</label>
      <input type="number" id="time_per_tool" v-model="timePerTool" step="0.1" required><br><br>

      <input type="submit" value="Submit Project">


    </form>
  </div>
    <Footer/>
</template>



<style scoped>
</style>