template
<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>
   
<script>
import Vue from 'vue'
export default {
  name: 'GuluTabs',
  data() {
    return {
      eventBus: new Vue()
    }
  },
  provide() {
    return {
      eventBus: this.eventBus
    }
  },
  props: {
    selected: {
      type: String,
      required: true
    },
    derection: {
      type: String,
      default: 'horizontal',
      validator(value) {
        return ['horizontal', 'vertical'].indexOf(value) >= 0
      }
    }
  },
  created() {}
}
</script>

<style lang="scss" scoped>
.tabs {
}
</style>
