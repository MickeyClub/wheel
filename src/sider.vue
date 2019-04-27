<template>
  <transition name="fade">
    <div
      class="g-sider"
      v-if="hide"
    >
      <slot></slot>
      <button @click="hide = false">关闭</button>
    </div>
  </transition>
</template>

<script>
export default {
  name: "GuluSider",
  data() {
    return {
      hide: true
    }
  }
}
</script>

<style lang="scss" scoped>
.g-sider {
  position: relative;
  > button {
    position: absolute;
    top: 0;
    right: 0;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: all .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  margin-left: -200px
}
</style>
