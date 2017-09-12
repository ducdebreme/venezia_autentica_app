import Vue from 'vue'
import Router from 'vue-router'
import Map from '@/components/Map'
import('../../node_modules/vuetify/dist/vuetify.min.css')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Map',
      component: Map
    }
  ]
})
