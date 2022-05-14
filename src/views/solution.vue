<template>
  <div class="text--secondary">
    <v-img
      class="mb-0 mb-md-16"
      src="@/assets/solution-banner.jpg"
      :height="$vuetify.breakpoint.mobile ? '66vw' : 600"
    ></v-img>
    <v-container class="pt-16 mb-16">
      <h3 class="text--primary font-weight-bold text-h6 text-md-h3 mb-8">选区激光融化（SLM, selected laser melting)</h3>
      <border-box class="text-justify pl-10 mb-16" :hideBorder="$vuetify.breakpoint.mobile">
        是最具应用前景的增材制造技术之一。以激光作为能量源，经过一组精密光学镜片的光束调制，和高精度扫描振镜的方向控制后，聚焦于成型平台，选择性扫描均匀铺于成型平台上的粉末。
        粉末受热升温融化后又快速凝固，被扫描过的区域的粉末就融化烧结成为一体。粉末又被均匀铺于已经扫描过的粉末层之上，再次扫描、融化、凝固，与之前一层烧结在一起。不断重复上述过程，零件就以“层层堆叠”的方式制造出来。
      </border-box>
      <v-row>
        <v-col class="d-none d-md-block" cols="12" md="4">
          <v-img class="mb-6" src="@/assets/slm1.png"></v-img>
          <v-img src="@/assets/slm1.png"></v-img>
        </v-col>
        <v-col cols="12" md="8">
          <v-img src="@/assets/slm1.png"></v-img>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="mb-16">
      <h3 class="text--primary font-weight-bold text-h6 text-md-h3 mb-8">可应用于SLM的材料</h3>
      <border-box class="text-justify pl-10 mb-16" :hideBorder="$vuetify.breakpoint.mobile">
        铝合金: AlSi10Mg、AlSi7Mg, 钛合金: TC4、TA11、TA15, 不锈钢: 304、316/316L、17-4PH, 模具钢: corrax
        alloy、18Ni300, 高温合金: 镍基高温合金、
        <span class="red--text">哈氏合金</span>
        , 难熔金属: 钨、钼、
        <span class="red--text">钽</span>
      </border-box>
      <v-row>
        <v-col class="d-none d-md-block" cols="12" md="4">
          <v-img class="mb-6" src="@/assets/slm2.png"></v-img>
          <v-img src="@/assets/slm2.png"></v-img>
        </v-col>
        <v-col cols="12" md="8">
          <v-img src="@/assets/slm2.png"></v-img>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="mb-16">
      <h3 class="text--primary font-weight-bold mb-8 text-h4 text-md-h3">应用领域</h3>
      <v-row class="align-stretch">
        <v-col>
          <v-list class="fill-height">
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
          </v-list>
        </v-col>
        <v-col cols="12" md="7">
          <v-img src="@/assets/core.png"></v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import BorderBox from '../components/border-box.vue';

export default Vue.extend({
  components: { BorderBox },
});
</script>
