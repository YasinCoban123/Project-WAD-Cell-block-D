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
import ToolLoaningForum from '@/components/ToolLoansWebPages/ToolLoaningForum.vue'
import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import about from "@/components/AboutMe/about.vue";
import Projects from "../components/projects/Projects.vue";
import AddProjects from "../components/projects/AddProjects.vue";
import RateProjects from "../components/projects/RateProjects.vue";
import Materials from "../components/materials/Materials.vue";
import MaterialDetailPage from "../components/materials/MaterialDetailPage.vue";
import machines from "../components/MachineTime/machines.vue";
import MachinePage from "../components/MachineTime/MachinePage.vue";
import ToolLoaning from "../components/ToolLoansWebPages/ToolLoaning.vue";
import workat from "../components/WorkAt/workat.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: '/aboutme',
      path: "/AboutMe",
      component: about,
    },
    {
      path: "/projects",
      component: Projects,
    },
    {
      path: "/add-project",
      component: AddProjects,
    },
    {
      path: "/all-projects",
      name: "all-projects",
      component: () => import("../components/projects/AllProjects.vue"),
    },
    {
      path: "/rate-projects",
      component: RateProjects,
    },
    {
      path: "/materials",
      component: Materials,
    },
    {
      path: "/materials/:id",
      component: MaterialDetailPage,
    },
    {
      path: '/tools',
      component: ToolLoaning
    },
    {
      path: '/tools/:id',
      component: ToolLoaningForum,
    },
    {
      path: '/machineTime',
      component: machines,
    },
    {
      path: '/machineTime/Bertha',
      component: Bertha,
    },
    {
      path: '/workat',
      path: "/Tools",
      component: ToolLoaning,
    },
    {
      path: "/MachineTime",
      component: machines,
    },
    {
      path: "/MachineTime/:id",
      component: MachinePage,
    },
    {
      path: "/WorkAt",
      component: workat,
    },
  ],
});

export default router;
