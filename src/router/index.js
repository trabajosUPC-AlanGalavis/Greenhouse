import { createRouter, createWebHistory } from "vue-router";
import PopupNewCrop from "@/greenhouse/components/popup-new-crop.component.vue";
import ProcessLogContents from "@/greenhouse/pages/process-log-contents.component.vue";
import login from "@/public/pages/login.vue";
import Dashboard from "@/public/pages/dashboard.component.vue";
import pageNotFound from "@/public/pages/page-not-found.component.vue";
import harvesting from "@/public/pages/harvesting.component.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/:notFound",
            component: pageNotFound,
        },
        {
            path: "/",
            redirect: "/login",
        },
        {
            path: "/login",
            component: login,
        },
        {
            path: "/dashboard",
            component: Dashboard,
        },
        {
            path: "/process-log",
            component: ProcessLogContents,
        },
        {
            path: "/harvesting",
            component: harvesting,
        },
    ],
});

export default router;
