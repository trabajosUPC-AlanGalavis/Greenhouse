import { createApp } from 'vue'
import App from './App.vue'
import ToastService from "primevue/toastservice";
import PrimeVue from "primevue/config";
// App Theme
import 'primevue/resources/themes/md-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
// Add PrimeFlex
import 'primeflex/primeflex.css';
// Add Components
import Card from "primevue/card";
import Button from "primevue/button";
import SelectButton from "primevue/selectbutton";
import Sidebar from "primevue/sidebar";
import Avatar from "primevue/avatar";
import Menu from "primevue/menu";
import Menubar from "primevue/menubar";
import Toolbar from "primevue/toolbar";
import Steps from 'primevue/steps';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import Dialog from 'primevue/dialog';

import InputText from 'primevue/inputtext';
//Router
import router from "@/router";


createApp(App)
    .use(PrimeVue, { ripple: true })
    .use(ToastService)
    .component('pv-card', Card)
    .component('pv-button', Button)
    .component('pv-select-button', SelectButton)
    .component('pv-sidebar', Sidebar)
    .component('pv-avatar', Avatar)
    .component('pv-menu', Menu)
    .component('pv-menubar', Menubar)
    .component('pv-toolbar', Toolbar)
    .component('pv-steps', Steps)
    .component('pv-column', Column)
    .component('pv-data-table', DataTable)
    .component('pv-dialog', Dialog)
    .component('pv-input-text', InputText)
    .use(router)
    .mount('#app')
