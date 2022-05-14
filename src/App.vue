<template>
  <v-app>
    <v-app-bar app color="primary" :height="!$vuetify.breakpoint.mobile ? 100 : 64">
      <v-app-bar-nav-icon class="hidden-md-and-up" @click="showMobileNavMenus = true">
        <v-icon>{{ appBarIcons[Number(showMobileNavMenus)] }}</v-icon>
      </v-app-bar-nav-icon>
      <v-container class="d-flex align-center justify-center justify-md-start mx-auto">
        <v-img class="flex-grow-0" width="120px" contain src="@/assets/logo.png"></v-img>
        <v-flex class="d-none d-md-flex align-center">
          <v-btn class="ml-12 pa-8 body-1 primary" depressed v-for="nav in navs" :key="nav.link" :to="nav.link">
            {{ nav.text }}
          </v-btn>
        </v-flex>
        <v-app-bar-nav-icon class="d-none d-md-block" @click="toggleTheme">
          <v-icon color="white">{{ themeIcons[Number($vuetify.theme.dark)] }}</v-icon>
        </v-app-bar-nav-icon>
      </v-container>

      <v-app-bar-nav-icon class="hidden-md-and-up" @click="toggleTheme">
        <v-icon>{{ themeIcons[Number($vuetify.theme.dark)] }}</v-icon>
      </v-app-bar-nav-icon>
    </v-app-bar>

    <v-main>
      <keep-alive>
        <router-view />
      </keep-alive>
    </v-main>

    <v-navigation-drawer v-model="showMobileNavMenus" bottom fixed>
      <v-list dense>
        <v-subheader>站内导航</v-subheader>

        <v-list-item v-for="nav in navs" link :to="nav.link" :key="nav.link">
          <v-list-item-icon>
            <v-icon v-text="nav.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="nav.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-footer padless color="primary">
      <v-col class="lighten-2 py-4 text-center font-weight-bold" cols="12">CopyRight©{{ currentYear }}</v-col>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { mdiHome, mdiLightbulb, mdiHandshake, mdiClose, mdiMenu, mdiWeatherNight, mdiWhiteBalanceSunny } from '@mdi/js';

export default Vue.extend({
  name: 'App',
  data: () => ({
    currentYear: new Date().getFullYear(),
    showMobileNavMenus: false,
    appBarIcons: [mdiMenu, mdiClose],
    themeIcons: [mdiWhiteBalanceSunny, mdiWeatherNight],
    navs: [
      {
        icon: mdiHome,
        text: '公司介绍',
        link: '/',
      },
      {
        icon: mdiLightbulb,
        text: '解决方案',
        link: '/solution',
      },
      // {
      //   icon: mdiNewBox,
      //   text: '新闻动态',
      //   link: '/news',
      // },
      {
        icon: mdiHandshake,
        text: '联系我们',
        link: '/concat',
      },
    ],
  }),
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;

      window.localStorage.setItem('theme', this.$vuetify.theme.dark ? 'dark' : 'light');
    },
  },
});
</script>

<style lang="scss">
$base-font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', STHeiti, 'Microsoft Yahei',
  Tahoma, Simsun, sans-serif;
.v-application {
  [class*='text-'] {
    font-family: $base-font-family !important;
  }
  font-family: $base-font-family !important;

  .container {
    max-width: 1200px !important;
  }
}
</style>
