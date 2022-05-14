<template>
  <div>
    <v-img
      class="mb-0 mb-md-16"
      src="@/assets/solution-banner.jpg"
      :height="$vuetify.breakpoint.mobile ? '66vw' : 600"
    ></v-img>
    <v-container class="mb-5 mb-sm-10">
      <div class="font-weight-bold text-h4 text-md-h3 my-8 my-lg-16">联系我们</div>

      <border-box class="pl-10" :hideBorder="$vuetify.breakpoint.mobile">
        <div class="d-flex mb-4">
          <div class="font-weight-bold mr-2">地址</div>
          <span class="text--secondary">{{ address }}</span>
        </div>
        <div class="d-flex mb-4">
          <div class="font-weight-bold mr-2">电话</div>
          <a :href="`tel:${phone}`">{{ phone }}</a>
        </div>
        <div class="d-flex mb-4">
          <div class="font-weight-bold mr-2">邮箱</div>
          <span class="text--secondary"></span>
          <a :href="`mailto:${email}`">{{ email }}</a>
        </div>
        <div class="d-flex">
          <div class="font-weight-bold mr-2">网站</div>
          <span class="text--secondary">{{ wite }}/</span>
        </div>
      </border-box>
    </v-container>
    <div style="height: 50vh" ref="container"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { loadbmap } from '@/util';
import BorderBox from '../components/border-box.vue';

export default Vue.extend({
  components: {
    BorderBox,
  },
  data() {
    return {
      phone: '0512-53687053',
      email: 'Chen.yuan@laserform3d.com',
      wite: 'http://www.laserform3d.com',
      address: '苏州市太仓市北京西路6号创业中心2楼西',
    };
  },
  mounted() {
    loadbmap().then(() => {
      const map = new window.BMap.Map(this.$refs.container);
      const center = new window.BMap.Point(121.098975, 31.485374);

      map.centerAndZoom(center, 16);
      map.enableScrollWheelZoom();
      // 设置中心偏移量
      map.panBy(-30, 100);

      const content = `
        <div class="d-flex py-2">
          <div class="mr-2">
            <div class="d-flex mb-2">
              <span class="font-weight-bold text-no-wrap mr-2">地址:</span>
              <span class="flex">${this.address}</span>
            </div>
            <div class="d-flex align-center">
              <span class="font-weight-bold text-no-wrap mr-2">电话:</span>
              <a class="flex" href="tel:${this.phone}">${this.phone}</a>
            </div>
          </div>
          <img class="company-cover" src="/concat-cover.jpg" alt="公司图片" />
        </div>
      `;

      var marker = new window.BMap.Marker(center);

      map.addOverlay(marker);
      marker.addEventListener('click', () => {
        info.open(center);
      });

      const info = new window.BMapLib.SearchInfoWindow(map, content, {
        title: '苏州徕泽丰材料科技有限公司',
        width: 290,
        height: 90,
        panel: 'panel',
        enableAutoPan: true,
        searchTypes: [0, 1, 2],
      });

      info.open(marker);
    });
  },
});
</script>

<style lang="scss">
.BMapLib_SearchInfoWindow {
  box-sizing: content-box;

  * {
    box-sizing: content-box;
  }

  .BMapLib_sendToPhone {
    display: none;
  }

  .BMapLib_bubble_title {
    font-weight: bold;
  }

  .company-cover {
    width: 100px;
    flex-shrink: 0;
  }
}

.coordinate {
  width: 30px;
  height: 30px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50% 50% 50% 0;
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
.coordinate:after {
  content: '';
  position: absolute;
  border-radius: 50%;
  width: 14px;
  height: 14px;
  background-color: rgba(0, 0, 0, 0.5);
  margin: 8px 0 0 8px;
}
.point {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  height: 14px;
  width: 14px;
  margin: 0px 0 0 8px;
  -webkit-transform: rotateX(55deg);
  -moz-transform: rotateX(55deg);
  -o-transform: rotateX(55deg);
  -ms-transform: rotateX(55deg);
  transform: rotateX(55deg);
}
</style>
