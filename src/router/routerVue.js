import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home';
import List from '@/pages/List';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/list',
        name: 'List',
        component: List
    },
];

const router = createRouter({
    history: createWebHistory(), // Use createWebHistory for Vue 3
    routes
});

export default router;