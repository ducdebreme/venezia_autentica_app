<template>
  <div class="map">
    <navigation></navigation>    
    <gmap-map ref="gmap" :center="center" :zoom="14">
      <gmap-marker :key="index" v-for="(m, index) in places" :icon="'/static/img/bar.svg'" :position="{lat: m.latitude, lng: m.longitude}" :clickable="true" @click="selectCurrentPlace(m)"></gmap-marker>
    </gmap-map>

  </div>
</template>

<script>
import Navigation from '@/components/Navigation'
let places = require('@/places.json')

export default {
  data () {
    return {
      center: {
        lat: 45.438, lng: 12.32588
      },
      places
    }
  },
  components: {
    Navigation
  },
  methods: {
    selectCurrentPlace (place) {
      this.$refs.gmap.panTo({lat: place.latitude, lng: place.longitude})
      console.log(place)
      // this.center = place.location
    },
    locateMe () {
      this.center = this.$root.currentLocation
    }
  },
  mounted () {
    // this.center = this.$root.currentLocation
  }
}
</script>

<style>
div.vue-map-container {
  top: 0;
  left: 0;
  position: absolute;
}
div.vue-map-container .vue-map {
  height: 100vh; 
  width: 100vw;
  overflow: auto;
}
</style>
