<template>
  <div>
    <v-carousel cycle show-arrows-on-hover :height="$vuetify.breakpoint.mobile ? '60vw' : 600">
      <v-carousel-item v-for="slide in slides" :key="slide" :src="slide"></v-carousel-item>
    </v-carousel>
    <v-container class="pt-10">
      <v-row class="mb-15" align-sm="center">
        <v-col class="font-weight-bold text-h5 text-md-h4 text-lg-h3 text-center text-md-left" cols="12" sm="8" lg="9">
          金属增材制造的工业解决方案
        </v-col>
        <v-col ccols="12" sm="4" lg="3">
          <v-btn
            class="d-md-inline-flex py-10 text-h6 text-lg-h4 font-weight-bold"
            block
            color="primary"
            elevation="10"
            to="/products"
          >
            前往了解详情
          </v-btn>
        </v-col>
      </v-row>

      <v-row class="mb-sm-16">
        <v-col class="pr-md-16" cols="12" md="6">
          <v-img src="@/assets/company.png"></v-img>
        </v-col>

        <v-col cols="12" md="6">
          <span class="font-weight-bold text-h6 text-md-h5 text-lg-h4">苏州徕泽丰材料科技有限公司</span>
          成立于2020年4月，是一家专业为客户提供包括从材料定制、产品设计、工艺开发、批量制造的金属增材制造服务公司。我们经验丰富的技术团队来自于北京航空航天大学，
          是中国最早研究增材制造技术的研究机构之一。我们的愿景是推动金属增材制造技术成为真正低成本、稳定、可大批量生产的工业制造技术，建立一个高效、数字化、柔性化的工业互联网制造平台。
        </v-col>
      </v-row>

      <v-row class="mb-sm-16">
        <v-col class="pr-md-16" cols="12" md="6">
          <v-img src="@/assets/slm1.png"></v-img>
        </v-col>

        <v-col cols="12" md="6">
          <span class="font-weight-bold text-h6 text-md-h5 text-lg-h4">选区激光融化（SLM, selected laser melting)</span>
          是最具应用前景的增材制造技术之一。以激光作为能量源，经过一组精密光学镜片的光束调制，和高精度扫描振镜的方向控制后，聚焦于成型平台，选择性扫描均匀铺于成型平台上的粉末。粉末受热升温融化后又快速凝固，被扫描过的区域的粉末就融化烧结成为一体。粉末又被均匀铺于已经扫描过的粉末层之上，再次扫描、融化、凝固，与之前一层烧结在一起。不断重复上述过程，零件就以“层层堆叠”的方式制造出来。
        </v-col>
      </v-row>

      <v-row class="mb-sm-16">
        <v-col class="pr-md-16" cols="12" md="6">
          <v-img src="@/assets/slm2.png"></v-img>
        </v-col>

        <v-col cols="12" md="6">
          <div class="font-weight-bold text-h5 text-lg-h4">目前可应用于SLM的材料</div>
          <v-list-item-group active-class="transparent">
            <v-list-item class="px-0">铝合金: AlSi10Mg、AlSi7Mg</v-list-item>
            <v-list-item class="px-0">钛合金: TC4、TA11、TA15</v-list-item>
            <v-list-item class="px-0">不锈钢: 304、316/316L、17-4PH</v-list-item>
            <v-list-item class="px-0">模具钢: corrax alloy、18Ni300</v-list-item>
            <v-list-item class="px-0">
              高温合金: 镍基高温合金、
              <span class="red--text">哈氏合金</span>
            </v-list-item>
            <v-list-item class="px-0">
              难熔金属: 钨、钼、
              <span class="red--text">钽</span>
            </v-list-item>
            <v-list-item class="px-0 font-weight-bold text-md-h6 text-lg-h5">
              也可根据客户具体要求进行材料开发与定制！
            </v-list-item>
          </v-list-item-group>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="pr-md-16" cols="12" md="6">
          <v-img src="@/assets/core.png"></v-img>
        </v-col>
        <v-col>
          <div class="mb-4 font-weight-bold text-h4 text-lg-h3 text-center text-md-left">我们的核心竞争力</div>
          <v-list-item-group active-class="transparent">
            <strong>超高尺寸精度</strong>
            <v-list-item>
              最小特征尺寸:
              <strong>0.1mm</strong>
            </v-list-item>
            <v-list-item>
              最佳尺寸精度公差:
              <strong>±0.02mm</strong>
            </v-list-item>

            <strong>可调节的成型致密度</strong>
            <v-list-item>
              超高成型致密度>
              <strong>99.8%</strong>
            </v-list-item>
            <v-list-item>
              孔隙率可根据要求进行调节，最高可达
              <strong>40%</strong>
            </v-list-item>

            <strong>优秀的DFM和产品开发能力</strong>
            <v-list-item class="py-3">
              根据客户要求，提供从材料开发、产品结构设计、仿真模拟、制造工艺开发等全流程增材制造服务
            </v-list-item>

            <strong>经济性</strong>
            <v-list-item class="py-3">批量生产的成本可与传统加工制造技术(CNC、MIM、压铸)媲美</v-list-item>
          </v-list-item-group>
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

<style>
.transparent:before {
  background-color: transparent !important;
}
</style>
