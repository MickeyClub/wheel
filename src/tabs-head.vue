template
<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="actions">
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
  created() {
    this.eventBus.$on('update:selected', name => {
      console.log(name, 123)
    })
  }
}
</script>

<style lang="scss" scoped>
</style>
