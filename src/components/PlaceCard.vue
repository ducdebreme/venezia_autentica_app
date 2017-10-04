<template>
  <v-card v-if="place != null">
    <v-toolbar dark class="primary">
      <v-btn icon @click.native="closeDialog()" dark>
        <v-icon>close</v-icon>
      </v-btn>
      <v-toolbar-title>{{place.name}}</v-toolbar-title>
    </v-toolbar>
    <v-card-media :src="place.image" height="200px">
    </v-card-media>
    <v-card-text primary-title>
      <div v-html="place.description"></div>
      <div v-html="place.address"></div>
    </v-card-text>
    <v-card-actions>
      <v-btn flat class="orange--text">Share</v-btn>
      <v-btn flat class="orange--text">Explore</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    place: Object
  },
  methods: {
    closeDialog () {
      this.$emit('close')
      console.log('close')
    }
  }

}
</script>

<style>

</style>
