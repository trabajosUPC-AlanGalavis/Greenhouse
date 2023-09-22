import { createRouter, createWebHistory } from "vue-router";
import RecordsContent from "@/harvestings/components/records-content.component.vue";
import HarvestList from "@/process_log/components/harvest-list.component.vue";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            redirect: "/process-log",
        },
        {
            path: "/process-log",
            component: HarvestList,
        },
        {
            path: "/stepper",
            component: RecordsContent,
        },
    ],
});

export default router;
