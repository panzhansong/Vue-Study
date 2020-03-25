import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './router'
import { setTitle } from '@/lib/util'

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  to.meta && setTitle(to.meta.title)
  next()
})
export default router
