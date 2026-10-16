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
      component: ToolLoaning,
    },
    {
      path: '/machineTime',
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
