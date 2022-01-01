import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import zhHans from 'vuetify/src/locale/zh-Hans';

Vue.use(Vuetify);

const nowHour = new Date().getHours();
const nowIsNight = nowHour < 6 || nowHour > 18;
const localTheme = window.localStorage.getItem('theme');

export default new Vuetify({
  theme: {
    dark: localTheme === null ? nowIsNight : localTheme === 'dark',
    options: {
      customProperties: true,
    },
    themes: {
      dark: {
        primary: '#F5C524',
      },
      light: {
        primary: '#F5C524',
        // primary: '#007BFF',
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
