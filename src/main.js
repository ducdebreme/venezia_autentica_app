// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'

Vue.use(Vuetify)
Vue.config.productionTip = false

import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBvWE_sIwKbWkiuJQOf8gSk9qzpO96fhfY',
    libraries: 'places,drawing,visualization'
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  data: {
    currentLocation: { lat: 0.0, lng: 0.0 }
  },
  mounted: function () {
    let me = this
    navigator.geolocation.getCurrentPosition(function (position) {
      me.currentLocation.lat = position.coords.latitude
      me.currentLocation.lng = position.coords.longitude
      console.log(position.coords.latitude, position.coords.longitude)
    })
  },
  components: { App }
})
