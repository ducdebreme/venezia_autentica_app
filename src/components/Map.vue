<template>
  <div class="map">
    <navigation></navigation>
    <gmap-map ref="gmap" :center="center" :zoom="14">
      <gmap-marker :key="index" v-for="(m, index) in places" :icon="'/static/img/bar.svg'" 
        :data-marker="index"
        :position="{lat: m.latitude, lng: m.longitude}" :clickable="true" v-on:click="selectCurrentPlace(m)"></gmap-marker>
    </gmap-map>

    <v-dialog v-model="dialogVisible" width="80%">
      <place-card @close="dialogVisible = false" :place="currentPlace"></place-card>
    </v-dialog>

  </div>
</template>

<script>
import Navigation from '@/components/Navigation'
import PlaceCard from '@/components/PlaceCard'
let places = require('@/places.json')

export default {
  data () {
    return {
      center: {
        lat: 45.438, lng: 12.32588
      },
      places,
      dialogVisible: false,
      currentPlace: null
    }
  },
  components: {
    Navigation,
    PlaceCard
  },
  methods: {
    selectCurrentPlace (place) {
      let me = this
      me.currentPlace = place

      // add a little delay to prevent event propagation
      setTimeout(function () { me.dialogVisible = true }, 50)

      this.$refs.gmap.panTo({lat: place.latitude, lng: place.longitude})
    },
    setPlaceDisplay (value) {
      this.dialogVisible = value
    },
    locateMe () {
      this.center = this.$root.currentPlace
    }
  },
  mounted () {
    // this.center = this.$root.currentPlace
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
