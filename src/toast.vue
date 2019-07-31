<template>
  <div class="g-toast" ref="wrapper" :class="toastClasses">
    <div class="message">
      <slot v-if="!enableHtml"></slot>
      <div v-else v-html="$slots.default[0]"></div>
    </div>
    <div class="line" ref="line"></div>
    <span class="close" v-if="closeButton" @click="onClickClose ">{{closeButton.text}}</span>
  </div>
</template>
   
<script>
export default {
  name: 'GuluToast',
  data() {
    return {}
  },
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    autoDelay: {
      type: Number,
      default: 5
    },
    enableHtml: {
      type: Boolean,
      default: false
    },
    closeButton: {
      type: Object,
      default() {
        return {
          text: '关闭',
          callback: undefined
        }
      }
    },
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'middle', 'bottom'].indexOf(value) >= 0
      }
    }
  },
  computed: {
    toastClasses() {
      // 给div添加类  position-top position-bottom position-middle
      return { [`position-${this.position}`]: true }
    }
  },
  mounted() {
    this.exeAutoClose()
    this.changeStyle()
  },
  methods: {
    exeAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close()
        }, this.autoDelay * 1000)
      }
    },
    changeStyle() {
      this.$nextTick(() => {
        console.log(
          this.$refs.wrapper.getBoundingClientRect(),
          'this.$refs.wrapper.style.height'
        )
        this.$refs.line.style.height = `${
          this.$refs.wrapper.getBoundingClientRect().height
        }px`
      })
    },
    close() {
      this.$el.remove()
      this.$destroy()
    },
    onClickClose() {
      this.close()
      if (this.closeButton && typeof this.closeButton.callback === 'function') {
        this.closeButton.callback(this)
      }
    },
    log() {
      console.log('测试')
    }
  }
}
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
.g-toast {
  position: fixed;
  font-size: $font-size;
  line-height: 1.8;
  min-height: $toast-min-height;
  // top: 0;
  left: 50%;
  display: flex;
  color: white;
  align-items: center;
  border-radius: 4px;
  background: $toast-bg;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  padding: 0 16px;
  .close {
    cursor: pointer;
    padding-left: 16px;

    flex-shrink: 0;
  }
  .line {
    height: 100%;
    border-left: 1px solid #666;
    margin-left: 16px;
  }
  .message {
    padding: 8px 0;
  }
  &.position-top {
    top: 0;
    transform: translateX(-50%);
  }
  &.position-middle {
    top: 50%;
    transform: translate(-50%, -50%);
  }
  &.position-bottom {
    bottom: 0;
    transform: translateX(-50%);
  }
}
</style>
