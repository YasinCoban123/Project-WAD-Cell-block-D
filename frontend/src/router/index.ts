import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/AboutMe',
      name: 'about',
      component: () => import('../components/AboutMe/about.vue'),
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../components/projects/Projects.vue'),
    },
    {
      path: '/add-project',
      name: 'add-project',
      component: () => import('../components/projects/AddProjects.vue'),
    },
    {
      path: '/all-projects',
      name: 'all-projects',
      component: () => import('../components/projects/AllProjects.vue'),
    },
    {
      path: '/rate-projects',
      name: 'rate-projects',
      component: () => import('../components/projects/RateProjects.vue'),
    },
    {
      path: '/materials',
      name: 'materials',
      component: () => import('../components/materials/Materials.vue'),
    },
    {
      path: '/materials/acrylic',
      name: 'acrylic',
      component: () => import('../components/materials/materials_pages/acrylic.vue'),
    },
    {
      path: '/materials/cardboard',
      name: 'cardboard',
      component: () => import('../components/materials/materials_pages/cardboard.vue'),
    },
    {
      path: '/materials/filament',
      name: 'filament',
      component: () => import('../components/materials/materials_pages/filament.vue'),
    },
    {
      path: '/materials/plywood',
      name: 'plywood',
      component: () => import('../components/materials/materials_pages/plywood.vue'),
    },
    {
      path: '/MachineTime',
      name: 'machines',
      component: () => import('../components/MachineTime/machines.vue'),
    },
    {
      path: '/MachineTime/Bertha',
      name: 'bertha',
      component: () => import('../components/MachineTime/Bertha.vue'),
    },
    {
      path: '/WorkAt',
      name: 'work-at',
      component: () => import('../components/WorkAt/workat.vue'),
    },
  ],
})

export default router
