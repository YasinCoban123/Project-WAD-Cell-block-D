import { ref, watch } from 'vue'
import type { ProjectType } from '../../types/ProjectType';
const projects = ref<ProjectType[]>(JSON.parse(localStorage.getItem('projects') || '[]'));

watch(projects, (v) => localStorage.setItem('projects', JSON.stringify(v)), { deep: true })

const editingProject = ref<ProjectType | null>(null);

function deleteProjects(id:number){
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