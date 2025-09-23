import { createRouter, createWebHistory } from "vue-router";

//importation des pages 

import Meteo from "@/views/Meteo.vue";
import Home from "@/views/home.vue";


const routes  = [
    {path: '/', name: 'Home', component: Home},
    {path: '/meteo/:city', name: 'Meteo', component: Meteo}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router