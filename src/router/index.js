import Vue from 'vue'
import VueRouter from 'vue-router'

import Blog from '../components/Blog.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '*',
        redirect: '/blog'
    },
    {
        path: '/blog',
        name: 'Blog',
        component: Blog
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
