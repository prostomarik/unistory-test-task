import Vue from 'vue'
import VueRouter from 'vue-router'

import Blog from '../components/Blog.vue'
import PostPage from "../components/PostPage"

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
    },
    {
        path: '/blog/:id',
        name: 'PostPage',
        component: PostPage
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
