<template>
  <div class="map">
    <navigation></navigation>    
    <gmap-map :center="center" :zoom="5">
    </gmap-map>

  </div>
</template>

<script>
import Navigation from '@/components/Navigation'

export default {
  data () {
    return {
      center: {
        lat: 0.0, lng: 0.0
      }
    }
  },
  components: {
    Navigation
  },
  mounted () {
    this.center = this.$root.currentLocation
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
