<template>
  <div class="g-popover">
    <div @click="xxx">
      <div class="content-wrapper" v-if="visible">
        <slot name="content"></slot>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GuluPopover',
  props: {
    span: {
      type: [Number, String]
    }
  },
  data() {
    return {
      visible: false
    }
  },
  methods: {
    xxx() {
      this.visible = !this.visible
    }
  }
}
</script>

<style lang="scss" scoped>
.g-popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
  .content-wrapper {
    position: absolute;
    bottom: 100%;
    left: 0;
    border: 1px solid red;
  }
}
</style>
