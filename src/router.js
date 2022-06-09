// definir las rutas que apuntaran a los componentes
import Vue from 'vue'
import VueRouter from 'vue-router'

import store from './store'

import RegistroPage from './views/RegistroView.vue'
import LoginPage from './views/LoginView.vue'
import PrestamistaPage from './views/PrestamistaView.vue'
import PrestatarioPage from './views/PrestatarioView.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', views: RegistroPage },
  { path: '/Login', views: LoginPage },
  { path: '/Prestamista', views: PrestamistaPage },
  { path: '/Prestatario', views: PrestatarioPage },
  {
    path: '/Prestamista',
    component: PrestamistaPage,
    beforeEnter (to, from, next) {
      if (store.state.idToken) {
        next()
      } else {
        next('/signin')
      }
    }
  }
]

export default new VueRouter({mode: 'history', routes})