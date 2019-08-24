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
      console.log(name, 123)
    })
  }
}
</script>

<style lang="scss" scoped>
.body {
}
</style>
