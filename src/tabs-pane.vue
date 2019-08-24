template
<template>
  <div class="pane">
    <slot></slot>
  </div>
</template>
   
<script>
export default {
  name: 'GuluTabsPane',
  data() {
    return {}
  },
  inject: ['eventBus'],
  created() {
    this.eventBus.$on('update:selected', name => {
      console.log(name, 123)
    })
  }
}
</script>

<style lang="scss" scoped>
.pane {
}
</style>
