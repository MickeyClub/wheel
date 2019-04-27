<template>
  <section
    class="g-layout"
    :class="layoutClass"
  >
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: "GuluLayout",
  data() {
    return {
      layoutClass: {
        hasSider: false
      }
    }
  },
  mounted() {
    this.$children.forEach(vm => {
      console.log(vm.$options.name)
      if (vm.$options.name === 'GuluSider') {
        // 给 layout 添加 flex-direction: warp;
        this.layoutClass.hasSider = true
      }
      console.log(this.layoutClass)
    });
  }
}
</script>

<style lang="scss" scoped>
.g-layout {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  border: 1px solid red;
  &.hasSider {
    flex-direction: row;
  }
}
</style>
