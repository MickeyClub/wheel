<template>
  <div class="g-toast">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: "GuluToast",
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
.g-toast {
  position: fixed;
  font-size: $font-size;
  line-height: 1.8;
  height: $toast-height;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  color: white;
  align-items: center;
  border-radius: 4px;
  background: $toast-bg;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  padding: 0 16px;
}
</style>
