template
<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line"></div>
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
  created() {
    this.eventBus.$on('update:selected', (item, vm) => {
      console.log(item)
      console.log(vm)
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
  border: 1px solid red;
  position: relative;
  > .line {
    position: absolute;
    width: 100px;
    bottom: 0;
    border-bottom: 3px solid $blue;
  }
  > .actions-wrapper {
    margin-left: auto;
  }
}
</style>
