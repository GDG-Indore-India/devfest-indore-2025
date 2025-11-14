import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Team from '../views/Team.vue';
import Agenda from '../views/Agenda.vue';
import Sponsers from '../views/Sponsers.vue';
import Speakers from '../views/Speakers.vue';
import Badge from '../views/Badge.vue';
import FAQ from '../views/FAQ.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/team',
        name: 'Team',
        component: Team
    },
    {
        path: '/agenda',
        name: 'Agenda',
        component: Agenda
    },
    {
        path: '/sponsors',
        name: 'Sponsors',
        component: Sponsers
    },
    {
        path: '/speakers',
        name: 'Speakers',
        component: Speakers
    },
    {
        path: '/badge',
        name: 'Badge',
        component: Badge
    },
    {
        path: '/faq',
        name: 'FAQ',
        component: FAQ
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
