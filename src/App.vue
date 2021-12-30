<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        absolute
        @click="showMobileNavMenus = true"
      />
      <v-container class="d-flex justify-center justify-md-start mx-auto">
        <v-toolbar-title>徕泽丰</v-toolbar-title>
      </v-container>
    </v-app-bar>

    <v-main>
      <router-view />
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

    <v-footer padless color="primary" dark>
      <v-col class="lighten-2 py-4 text-center font-weight-bold" cols="12">
        CopyRight©{{ currentYear }}
      </v-col>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  data: () => ({
    currentYear: new Date().getFullYear(),
    showMobileNavMenus: false,
    navs: [
      {
        icon: 'mdi-home',
        text: '首页',
        link: '/',
      },
      {
        icon: 'mdi-lightbulb',
        text: '产品案例',
        link: '/products',
      },
      {
        icon: 'mdi-handshake',
        text: '联系我们',
        link: '/about',
      },
    ],
  }),
});
</script>
