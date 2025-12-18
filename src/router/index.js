import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Team from '../views/Team.vue';
import Agenda from '../views/Agenda.vue';
import Sponsers from '../views/Sponsers.vue';
import Speakers from '../views/Speakers.vue';
import Badge from '../views/Badge.vue';
import FAQ from '../views/FAQ.vue';
import Register from '../views/Register.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
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

// Set page titles based on route
router.beforeEach((to, from, next) => {
    const titleMap = {
        'Home': 'DevFest Indore 2025 | India\'s Largest Tech Conference',
        'Agenda': 'Agenda | DevFest Indore 2025',
        'Speakers': 'Speakers | DevFest Indore 2025',
        'Sponsors': 'Sponsors | DevFest Indore 2025',
        'Team': 'Team | DevFest Indore 2025',
        'Badge': 'Badge | DevFest Indore 2025',
        'FAQ': 'FAQ | DevFest Indore 2025',
        'Register': 'Register | DevFest Indore 2025'
    }
    
    const pageTitle = titleMap[to.name] || 'DevFest Indore 2025'
    document.title = pageTitle
    
    next()
})

export default router
