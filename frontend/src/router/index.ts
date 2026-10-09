import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import about from '@/components/AboutMe/about.vue'
import Projects from '../components/projects/Projects.vue'
import AddProjects from '../components/projects/AddProjects.vue'
import RateProjects from '../components/projects/RateProjects.vue'
import Materials from '../components/materials/Materials.vue'
import acrylic from '../components/materials/materials_pages/acrylic.vue'
import cardboard from '../components/materials/materials_pages/cardboard.vue'
import filament from '../components/materials/materials_pages/filament.vue'
import plywood from '../components/materials/materials_pages/plywood.vue'
import machines from '../components/MachineTime/machines.vue'
import Bertha from '../components/MachineTime/Bertha.vue'
import ToolLoaning from '../components/ToolLoansWebPages/ToolLoaning.vue'
import workat from '../components/WorkAt/workat.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/AboutMe',
      component: about,
    },
    {
      path: '/projects',
      component: Projects,
    },
    {
      path: '/add-project',
      component: AddProjects,
    },
    {
      path: '/rate-projects',
      component: RateProjects,
    },
    {
      path: '/materials',
      component: Materials,
    },
    {
      path: '/materials/acrylic',
      component: acrylic,
    },
    {
      path: '/materials/cardboard',
      component: cardboard,
    },
    {
      path: '/materials/filament',
      component: filament,
    },
    {
      path: '/materials/plywood',
      component: plywood,
    },
    {
      path: '/Tools',
      component: ToolLoaning
    },
    {
      path: '/MachineTime',
      component: machines,
    },
    {
      path: '/MachineTime/Bertha',
      component: Bertha,
    },
    {
      path: '/WorkAt',
      component: workat,
    },
  ],
})

export default router
