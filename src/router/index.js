import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', redirect: '/system/home' },
        {
            path: '/system',
            name: 'system',
            meta: { index: 1 },
            component: resolve => require(['@/components/system/system'], resolve),
            children: [
                { path: 'home', name: 'home', meta: { index: 2 }, component: resolve => require(['@/components/home/home'], resolve) },
                { path: 'newsInfo', name: 'newsInfo', meta: { index: 3 }, component: resolve => require(['@/components/newsInfo/newsInfo'], resolve) },
                { path: 'publication', name: 'publication', meta: { index: 4 }, component: resolve => require(['@/components/publication/publication'], resolve) },
                { path: 'team', name: 'team', meta: { index: 5 }, component: resolve => require(['@/components/team/team'], resolve) },
                { path: 'tools', name: 'tools', meta: { index: 6, keepAlive: true }, component: resolve => require(['@/components/publication/tools'], resolve) },
                { path: 'join', name: 'join', meta: { index: 7 }, component: resolve => require(['@/components/join/join'], resolve) }
            ]
        }
    ]
})