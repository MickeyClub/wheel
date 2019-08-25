template
<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="actions-warper">
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
    this.eventBus.$on('update:selected', name => {})
  }
}
</script>

<style lang="scss" scoped>
$tabs-height: 40px;
.tabs-head {
  display: flex;
  height: $tabs-height;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid red;
  > .actions-warper {
    margin-left: auto;
  }
}
</style>
