<template>
  <v-app light>
      <v-toolbar class="white toolbar-position" floating dense>
        <v-text-field prepend-icon="search" hide-details single-line></v-text-field>
        <v-btn icon>
          <v-icon>my_location</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>more_vert</v-icon>
        </v-btn>
      </v-toolbar>
    <gmap-map :center="$root.currentLocation" :zoom="5" class="map-container">

    </gmap-map>

  </v-app>
</template>

<script>
export default {
  data () {
    return {
      center: {
        lat: 0.0, lng: 0.0
      }

    }
  }
}
</script>

<style lang="stylus">
  @import './stylus/main'

  .vue-map-container {
    height: 100vh;
  }

  .toolbar-position {
    position: absolute;
    z-index: 10;
  }
</style>
