import Vue, { VNode } from 'vue';

declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    type Element = VNode;
    // tslint:disable no-empty-interface
    type ElementClass = Vue;
    interface IntrinsicElements {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [elem: string]: any;
    }
  }

  interface Window {
    BMap: any;
    BMapGL: any;
    BMapLib: any;
    onBMapCallback: () => void;
  }
}

declare module 'vuetify/lib/framework' {
  import Vuetify from 'vuetify';
  export default Vuetify;
}
