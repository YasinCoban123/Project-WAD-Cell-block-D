import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import about from '@/components/AboutMe/about.vue'
import Projects from '../components/projects/Projects.vue'
import AddProjects from '../components/projects/AddProjects.vue'
import RateProjects from '../components/projects/RateProjects.vue'
import Materials from '../components/materials/Materials.vue'
import MaterialDetailPage from '../components/materials/MaterialDetailPage.vue'
import machines from '../components/MachineTime/machines.vue'
import Bertha from '../components/MachineTime/Bertha.vue'
import Spark from '../components/MachineTime/Spark.vue'
import Atlas from '../components/MachineTime/Atlas.vue'
import Pixel from '../components/MachineTime/Pixel.vue'
import Bolt from '../components/MachineTime/Bolt.vue'
import Nova from '@/components/MachineTime/Nova.vue'
import Orbit from '@/components/MachineTime/Orbit.vue'
import Echo from '@/components/MachineTime/Echo.vue'
import Stitch from '@/components/MachineTime/Stitch.vue'
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
      path: '/all-projects',
      name: 'all-projects',
      component: () => import('../components/projects/AllProjects.vue'),
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
      path: '/materials/:id',
      component: MaterialDetailPage,
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
      path: '/MachineTime/Spark',
      component: Spark,
    },
    {
      path: '/MachineTime/Atlas',
      component: Atlas,
    },
    {
      path: '/MachineTime/Pixel',
      component: Pixel,
    },
    {
      path: '/MachineTime/Orbit',
      component: Orbit,
    },
    {
      path: '/MachineTime/Nova',
      component: Nova,
    },
    {
      path: '/MachineTime/Bolt',
      component: Bolt,
    },
    {
      path: '/MachineTime/Echo',
      component: Echo,
    },
    {
      path: '/MachineTime/Stitch',
      component: Stitch,
    },
    {
      path: '/WorkAt',
      component: workat,
    },
  ],
})

export default router
