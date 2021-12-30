<template>
  <div>
    <v-carousel
      cycle
      show-arrows-on-hover
      :height="$vuetify.breakpoint.mobile ? '56.25vw' : 600"
    >
      <v-carousel-item
        v-for="slide in slides"
        :key="slide"
        :src="slide"
      ></v-carousel-item>
    </v-carousel>
    <v-container class="pt-10">
      <v-row class="mb-15" align-sm="center">
        <v-col
          class="text-h5 text-md-h3 font-weight-medium"
          cols="12"
          sm="8"
          lg="9"
        >
          金属增材制造的工业解决方案
        </v-col>
        <v-col ccols="12" sm="4" lg="3">
          <v-btn
            class="d-md-inline-flex py-10 text-h6 font-weight-bold"
            block
            elevation="10"
            to="/products"
          >
            点击了解详情
          </v-btn>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6">
          <v-img src="@/assets/company.png"></v-img>
        </v-col>

        <v-col cols="12" md="6" class="text--primary text-justify">
          <span class="font-weight-bold">苏州徕泽丰材料科技有限公司</span>
          成立于2020年4月，是一家专业为客户提供包括从材料定制、产品设计、工艺开发、批量制造的金属增材制造服务公司。我们经验丰富的技术团队来自于北京航空航天大学，是中国最早研究增材制造技术的研究机构之一。我们的愿景是推动金属增材制造技术成为真正低成本、稳定、可大批量生产的工业制造技术，建立一个高效、数字化、柔性化的工业互联网制造平台。
        </v-col>
      </v-row>
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
