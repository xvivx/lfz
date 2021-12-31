import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import zhHans from 'vuetify/src/locale/zh-Hans';

Vue.use(Vuetify);

const nowHour = new Date().getHours();

export default new Vuetify({
  theme: {
    dark:
      window.localStorage.getItem('theme') === 'dark' ||
      nowHour < 6 ||
      nowHour > 18,
    options: {
      customProperties: true,
    },
    themes: {
      dark: {
        primary: '#F5C524',
      },
      light: {
        primary: '#F5C524',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
      },
    },
  },
  lang: {
    locales: { zhHans },
    current: 'zhHans',
  },
  icons: {
    iconfont: 'mdiSvg',
  },
  breakpoint: {
    mobileBreakpoint: 'md',
  },
});
