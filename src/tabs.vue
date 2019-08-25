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
  mounted() {
    this.$children.forEach(vm => {
      if (vm.$options.name === 'GuluTabsHead') {
        vm.$children.forEach(item => {
          if (
            item.$options.name === 'GuluTabsItem' &&
            item.name === this.selected
          ) {
            // 选中的tabs
            this.eventBus.$emit('update:selected', this.selected, item)
          }
        })
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.tabs {
}
</style>
