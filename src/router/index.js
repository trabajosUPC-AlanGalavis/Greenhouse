import { createRouter, createWebHistory } from "vue-router";
import StepperContent from "@/greenhouse/pages/stepper-contents.component.vue";
import Login from "@/public/pages/login.component.vue";
import PageNotFound from "@/public/pages/page-not-found.component.vue";
import Dashboard from "@/greenhouse/pages/dashboard.component.vue";
import HarvestingInProgress from "@/greenhouse/pages/harvesting-in-progress.component.vue";
import Signup from "@/public/pages/signup.component.vue";
import PasswordReset from "@/public/pages/password-reset.component.vue";
import SitePolicy from "@/public/pages/site-policy.component.vue";
import userProfile from "@/profiles/components/user-profile.vue";
import statisticalReports from "@/greenhouse/pages/statistical-reports.vue";

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
            path: "/signup",
            component: Signup,
        },
        {
            path: "/password-reset",
            component: PasswordReset,
        },
        {
            path: "/site-policy",
            component: SitePolicy,
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
        {
            path: "/profile",
            component: userProfile
        },
        {
            path: "/statistical-reports",
            component: statisticalReports
        }
    ],
});

export default router;
