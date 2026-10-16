import { ref, watch } from 'vue';
import type { ProjectType } from '../types/ProjectType'; 

const projects = ref<ProjectType[]>(
  JSON.parse(localStorage.getItem('projects') || '[]')
);
watch(
  projects,
  (newProjects) => {
    localStorage.setItem('projects', JSON.stringify(newProjects));
  },
  { deep: true }
);

const editingProject = ref<ProjectType | null>(null);

export function useProjects() {
  watch(
    projects,
    (newProjects) => {
      localStorage.setItem('projects', JSON.stringify(newProjects));
    },
    { deep: true }
  );

const addProject = (projectData: Omit<ProjectType, 'id'>) => {
    const newProject: ProjectType = {
      id: Date.now(),
      ...projectData,
    };

    projects.value.push(newProject);
    console.log('Submitted Project:', newProject);
  };
  watch(projects, (v) => localStorage.setItem('projects', JSON.stringify(v)), { deep: true })


const deleteProjects = (id: number) => {
  projects.value = projects.value.filter(p => p.id !== id)
}

const updateProjects = (project: ProjectType) => {
  const index = projects.value.findIndex(p => p.id === project.id)
  if (index !== -1) {
    projects.value[index] = project
  }
}

const handleUpdate = (project: ProjectType) => {
  updateProjects(project)
  cancelEdit()
}

const startEditing = (project: ProjectType) => {
  editingProject.value = { ...project }
}

const cancelEdit = () => {
  editingProject.value = null
}
  return {
    projects,
    editingProject,
    addProject,
    deleteProjects,
    updateProjects,
    handleUpdate,
    startEditing,
    cancelEdit
  };
}
