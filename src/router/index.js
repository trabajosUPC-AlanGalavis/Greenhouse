import { createRouter, createWebHistory } from "vue-router";
import StepperContent from "@/greenhouse/pages/stepper-contents.component.vue";
import Login from "@/public/pages/login.component.vue";
import Dashboard from "@/public/pages/dashboard.component.vue";
import PageNotFound from "@/public/pages/page-not-found.component.vue";
import HarvestingInProgress from "@/public/pages/harvesting-in-progress.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/:notFound",
            component: PageNotFound,
        },
        {
            path: "/",
            redirect: "/login",
        },
        {
            path: "/login",
            component: Login,
        },
        {
            path: "/dashboard",
            component: Dashboard,
        },
        {
            path: "/process-log",
            component: HarvestingInProgress,
        },
        {
            path: "/stepper",
            component: StepperContent,
        },
    ],
});

export default router;
