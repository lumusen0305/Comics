import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'
import { createRouter, createWebHistory } from 'vue-router'
//使用 vue-router
Vue.use(VueRouter)

//匯出vue-router 設置
// export default new VueRouter({
//     routes: [
//         {
//             path: '/',
//             component: () => import( '../common/Home.vue'),
//             meta: {title: '自述文件'},
//             children: [
//                 {
//                     path: '/Index',
//                     component: Index,
//                     meta: {title: '系统首页'}
//                 },
//             ]
//         }
//     ]
// })
export default new VueRouter({
    routes: [
        {
            path: '/',
            component: () => import( '../common/Home.vue'),
        }
    ]
})