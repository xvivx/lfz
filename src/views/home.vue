<template>
  <div>
    <v-img src="@/assets/home-banner.jpg" :height="`calc(100vh - ${this.$vuetify.application.top}px)`">
      <v-container class="d-flex justify-center justify-lg-start fill-height">
        <div class="banner-content">
          <h3 class="font-weight-bold text-h5 text-md-h4 text-lg-h3 mb-10">金属增材制造的工业解决方案</h3>
          <border-box class="mb-12 pl-10 font-weight-bold">
            <div class="mb-2">超高尺寸精度</div>
            <div class="mb-2">超高成型致密度</div>
            <div class="mb-2">优秀的DFM和产品开发能力</div>
            <div>非常经济</div>
          </border-box>

          <v-btn
            class="text-h6 pa-6 text-lg-h4 pa-lg-10 font-weight-bold"
            color="primary"
            elevation="10"
            to="/solution"
          >
            前往了解详情
          </v-btn>
        </div>
      </v-container>
    </v-img>

    <v-container class="pt-16">
      <div class="font-weight-bold text-h4 text-md-h3 text-center my-8 my-lg-16">公司介绍</div>
      <div class="d-flex flex-column">
        <border-box
          :hideBorder="$vuetify.breakpoint.mobile"
          class="subtitle-1 text-justify text--secondary order-2 order-lg-0 mt-5 mb-0 mt-lg-0 mb-lg-10 pl-10"
        >
          <span class="text--primary font-weight-bold text-h6 text-md-h4">苏州徕泽丰材料科技有限公司</span>
          成立于2020年4月，是一家专业为客户提供包括从材料定制、产品设计、工艺开发、批量制造的金属增材制造服务公司。我们经验丰富的技术团队来自于北京航空航天大学，
          是中国最早研究增材制造技术的研究机构之一。我们的愿景是推动金属增材制造技术成为真正低成本、稳定、可大批量生产的工业制造技术，建立一个高效、数字化、柔性化的工业互联网制造平台。
        </border-box>
        <v-responsive :aspect-ratio="16 / 9">
          <v-carousel height="100%" cycle progress>
            <v-carousel-item v-for="slide in slides" :key="slide" :src="slide"></v-carousel-item>
          </v-carousel>
        </v-responsive>
      </div>
    </v-container>

    <v-container class="py-16 mb-16">
      <div class="font-weight-bold text-h4 text-md-h3 text-center my-8 my-lg-16">成功案例</div>

      <v-row>
        <v-col cols="12" md="5">
          <v-card hover>
            <v-card-title class="subheading font-weight-bold">案例一</v-card-title>
            <v-list dense>
              <v-list-item>
                <v-list-item-content>反应:</v-list-item-content>
                <v-list-item-content>A + B = C</v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-content>反应器:</v-list-item-content>
                <v-list-item-content>LZF-B4</v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-content>材质:</v-list-item-content>
                <v-list-item-content>316L不锈钢</v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-content>整体反应器体积:</v-list-item-content>
                <v-list-item-content>238x213x86mm</v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-content>持液量:</v-list-item-content>
                <v-list-item-content>300mL</v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-content>压降:</v-list-item-content>
                <v-list-item-content>~1Mpa (输入压力3Mpa)</v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-content>换热面积:</v-list-item-content>
                <v-list-item-content>3849平方厘米</v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-content>流量:</v-list-item-content>
                <v-list-item-content>3L/min (输入压力3Mpa)</v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-content>温度控制:</v-list-item-content>
                <v-list-item-content>一体式液态控温</v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-content>药物年产能:</v-list-item-content>
                <v-list-item-content>~150吨</v-list-item-content>
              </v-list-item>
            </v-list>
            <v-card-text>成都一家CDMO企业已成功量产，已有多个重复订单， 南京一家已上市CDMO企业正在试用中。</v-card-text>
          </v-card>
        </v-col>

        <v-spacer></v-spacer>

        <v-col cols="12" md="5">
          <v-card hover>
            <v-card-title class="subheading font-weight-bold">案例二</v-card-title>
            <v-list dense>
              <v-list-item>
                <v-list-item-content>反应1:</v-list-item-content>
                <v-list-item-content>A + B = C</v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-content>反应2:</v-list-item-content>
                <v-list-item-content>C + D = E</v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-content>反应器:</v-list-item-content>
                <v-list-item-content>LZF-J1</v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-content>材质:</v-list-item-content>
                <v-list-item-content>316L不锈钢</v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-content>输入压力:</v-list-item-content>
                <v-list-item-content>0.1Mpa</v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-content>流量:</v-list-item-content>
                <v-list-item-content>3L/min (输入压力3Mpa)</v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-content>预冷区持液量:</v-list-item-content>
                <v-list-item-content>37mL</v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-content>反应区持液量:</v-list-item-content>
                <v-list-item-content>9.8mL</v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-content>换热面积:</v-list-item-content>
                <v-list-item-content>设计中</v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-content>整体体积:</v-list-item-content>
                <v-list-item-content>设计中</v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-content>控温:</v-list-item-content>
                <v-list-item-content>一体式液态控温</v-list-item-content>
              </v-list-item>
            </v-list>

            <v-card-text>浙江台州一家上市CDMO、原料药企业配合开发中。</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import BorderBox from '../components/border-box.vue';
import slide1 from '../assets/slide-1.jpg';
import slide2 from '../assets/slide-2.jpg';
import slide3 from '../assets/slide-3.jpg';
import slide4 from '../assets/slide-4.jpg';
import slide5 from '../assets/slide-5.jpg';
import slide6 from '../assets/slide-6.jpg';

export default Vue.extend({
  name: 'Home',
  components: {
    BorderBox,
  },
  data: () => {
    return {
      slides: [slide1, slide2, slide3, slide4, slide5, slide6],
    };
  },
});
</script>

<style scoped lang="scss">
.banner-content {
  color: white;
  text-shadow: 5px 5px 5px rgba(#000, 0.5);
}
</style>
