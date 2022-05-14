<template>
  <div :class="`text-box ${hideBorder ? 'no-border' : ''}  ${$attrs.class || ''}`">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'HelloWorld',
  props: {
    hideBorder: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style scoped lang="scss">
.text-box {
  border-left: 5px solid #f5c524;

  &.no-border {
    border: none;
    padding-left: 0 !important;
  }
}
</style>
