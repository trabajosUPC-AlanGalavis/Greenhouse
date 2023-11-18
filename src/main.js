import { createApp } from 'vue'
import { createPinia } from 'pinia';
import store from './store';
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
import Dropdown from "primevue/dropdown";
import InputText from 'primevue/inputtext';
import Calendar from "primevue/calendar";
//Router
import router from "@/router";
//Localization
import en from "@/locales/en.json";
import es from "@/locales/es.json";
import {createI18n} from 'vue-i18n'

const i18n = createI18n({
    legacy : false,
    locale: document.cookie.split('=')[1],
    messages: {
        en: en,
        es: es,
    }
})

const pinia = createPinia();

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
    .component('pv-dropdown', Dropdown)
    .component('pv-column', Column)
    .component('pv-data-table', DataTable)
    .component('pv-dialog', Dialog)
    .component('pv-input-text', InputText)
    .component('pv-calendar', Calendar)
    .use(router)
    .use(i18n)
    .use(pinia)
    .use(store)
    .mount('#app')