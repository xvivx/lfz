<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon
        class="hidden-sm-and-up"
        absolute
        @click="showMobileNavMenus = true"
      />
      <v-container class="d-flex justify-center justify-md-start mx-auto">
        <v-toolbar-title>LFZ</v-toolbar-title>
      </v-container>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <v-navigation-drawer
      v-model="showMobileNavMenus"
      bottom
      fixed
      :mobile-breakpoint="500"
      class="hidden-sm-and-up"
    >
      <v-list dense>
        <v-list-item link to="/">
          <v-list-item-content>
            <v-list-item-title>首页</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/about">
          <v-list-item-content>
            <v-list-item-title>关于我们</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-footer padless color="primary" dark>
      <v-col class="lighten-2 py-4 text-center font-weight-bold" cols="12"
        >CopyRight©2021</v-col
      >
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  data: () => ({
    showMobileNavMenus: false,
  }),
});
</script>
