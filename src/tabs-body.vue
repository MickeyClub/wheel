template
<template>
  <div class="body">
    <slot></slot>
  </div>
</template>
   
<script>
export default {
  name: 'GuluTabsBody',
  data() {
    return {}
  },
  inject: ['eventBus'],
  created() {
    this.eventBus.$on('update:selected', name => {
    })
  }
}
</script>

<style lang="scss" scoped>
.body {
}
</style>
