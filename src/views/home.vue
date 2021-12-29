<template>
  <div>
    <v-carousel cycle show-arrows-on-hover height="56.25vw">
      <v-carousel-item
        v-for="slide in slides"
        :key="slide"
        :src="slide"
      ></v-carousel-item>
    </v-carousel>
    <v-container>
      <h1>hello</h1>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import slide1 from '../assets/slide-1.jpg';
import slide2 from '../assets/slide-2.jpg';
import slide3 from '../assets/slide-3.jpg';
import slide4 from '../assets/slide-4.jpg';
import slide5 from '../assets/slide-5.jpg';

export default Vue.extend({
  name: 'Home',
  data: () => {
    return {
      slides: [slide4, slide1, slide2, slide3, slide5],
    };
  },
});
</script>
