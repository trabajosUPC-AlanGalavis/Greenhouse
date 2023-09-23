import { createRouter, createWebHistory } from "vue-router";
import HarvestList from "@/process_log/components/harvest-list.component.vue";
import StepperContent from "@/harvestings/components/stepper-content.component.vue";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            redirect: "/dashboard",
        },
        {
            path: "/dashboard",
            component: HarvestList,
        },
        {
            path: "/process-log",
            component: StepperContent,
        },
        {
            path: "/stepper",
            component: StepperContent,
        },
    ],
});

export default router;
