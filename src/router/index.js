import { createRouter, createWebHistory } from "vue-router";
import StepperContent from "@/harvestings/components/stepper-content.component.vue";
import PopupNewCropComponent from "@/shared/components/popup-new-crop.component.vue";
import dashboardContent from "@/dashboard/components/dashboard-content.component.vue";
import ProcessLog from "@/process_log/components/process-log.component.vue";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            redirect: "/dashboard",
        },
        {
            path: "/dashboard",
            component: dashboardContent,
        },
        {
            path: "/process-log",
            component: ProcessLog,
        },
        {
            path: "/stepper",
            component: StepperContent,
        },
        {
            path:"/popup-new-crop",
            component:PopupNewCropComponent,
        },
    ],
});

export default router;
