<template>
  <div class="g-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GuluButtonGroup",
  mounted() {
    for (let localName of this.$el.children) {
      if (localName.localName !== 'button') {
        console.warn(`g-button-group组件不建议使用${localName.localName}包裹g-button`)
      }
    }
  }
}
</script>

<style lang="scss">
.g-button-group {
  display: inline-flex;
  vertical-align: middle;
  border-radius: none;
  > .g-button {
    border-radius: 0;
    &:not(:first-child) {
      margin-left: -1px;
    }
    &:first-child {
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>
