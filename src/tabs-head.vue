<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
   
<script>
export default {
  name: 'GuluTabsHead',
  data() {
    return {}
  },
  inject: ['eventBus'],
  mounted() {
    this.eventBus.$on('update:selected', (item, vm) => {
      let { width, height, top, left } = vm.$el.getBoundingClientRect()
      this.$refs.line.style.width = `${width}px`
      this.$refs.line.style.left = `${left}px`
    })
  }
}
</script>

<style lang="scss" scoped>
$tabs-height: 40px;
$blue: blue;
.tabs-head {
  display: flex;
  height: $tabs-height;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  border: 1px solid #ddd;
  > .line {
    position: absolute;
    bottom: 0;
    border-bottom: 2px solid $blue;
    transition: all 350ms;
  }
  > .actions-wrapper {
    margin-left: auto;
  }
}
</style>
