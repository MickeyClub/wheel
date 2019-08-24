<template>
  <div class="tabs-item" @click="xxx">
    <slot></slot>
  </div>
</template>
   
<script>
export default {
  name: 'GuluTabsItem',
  data() {
    return {}
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String | Number,
      required: true
    }
  },
  inject: ['eventBus'],
  created() {
    this.eventBus.$on('update:selected', name => {
      console.log(name, 123)
    })
  },
  methods: {
    xxx() {
      this.eventBus.$emit('update:selected', this.name)
    }
  }
}
</script>

<style lang="scss" scoped>
.tabs-item {
  padding: 0 1em;
}
</style>
