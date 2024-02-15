import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/Home.vue'
import login from '../views/Login.vue'
import inscricao from '../views/Inscricao.vue'
import admin from '../views/Admin.vue'
import notificacao from '../views/Notificacao.vue'
import store from '../store/store'
import noticias from '../views/Noticias.vue'
import conta from '../views/Conta.vue'
import acerca from '../views/Acerca.vue'
import contactos from '../views/Contactos.vue'

import { IS_USER_AUTHENTICATED_GETTER } from '../store/storeconstants'

const routes = [{
        path: '/',
        name: 'home',
        component: home,
        meta: { auth: false }
    },
    {
        path: '/noticias',
        name: 'noticias',
        component: noticias,
        meta: { auth: false }
    },
    {
        path: '/acerca',
        name: 'acerca',
        component: acerca,
        meta: { auth: false }
    },
    {
        path: '/contactos',
        name: 'contactos',
        component: contactos,
        meta: { auth: false }
    },
    {
        path: '/login',
        name: 'login',
        component: login,
        meta: { auth: false }
    },
    {
        path: '/inscricao',
        name: 'inscricao',
        component: inscricao,
        meta: { auth: false }
    },
    {
        path: '/admin',
        name: 'admin',
        component: admin,
        meta: { auth: false }

    },
    {
        path: '/notificacao',
        name: 'notificacao',
        component: notificacao,
        meta: { auth: false }
    },
    {
        path: '/conta',
        name: 'conta',
        component: conta,
        meta: { auth: false }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    console.log('Before each hook called');
    if (to.meta.auth && !store.getters[`auth/${IS_USER_AUTHENTICATED_GETTER}`]) { 
        next('/login')
    } else {
        next()
    }
})

export default router