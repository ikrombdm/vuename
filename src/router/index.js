import { createRouter, createWebHistory } from "vue-router"

import HomePage from "../views/HomePage.vue"
import CarIdPage from "../views/CarIdPage.vue"
import SlotsPage from "../views/SlotsPage.vue"

import NotFoundPage from "../views/NotFoundPage.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomePage
        },
        // ID's
        {
            path: "/car/:id",
            name: "card_id",
            component: CarIdPage
        },
        {
            path: "/slots",
            name: "slots",
            component: SlotsPage
        },
        // NotFound
        {
            path: "/:pathMatch(.*)*",
            name: "NotFound",
            component: NotFoundPage
        },
        
    ]
})

export default router