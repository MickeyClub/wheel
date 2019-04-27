<template>
  <main class="g-content">
    <slot></slot>
  </main>
</template>

<script>
export default {
  name: "GuluContent"
}
</script>

<style lang="scss" scoped>
.g-content {
  flex: auto;
}
</style>