<template>
  <div class="wrapper" :class="toastClasses">
    <div class="g-toast" ref="toast">
      <div class="message">
        <slot v-if="!enableHtml"></slot>
        <div v-else v-html="$slots.default[0]"></div>
      </div>
      <div class="line" ref="line"></div>
      <span class="close" v-if="closeButton" @click="onClickClose ">{{closeButton.text}}</span>
    </div>
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
          this.$refs.toast.getBoundingClientRect(),
          'this.$refs.toast.style.height'
        )
        this.$refs.line.style.height = `${
          this.$refs.toast.getBoundingClientRect().height
        }px`
      })
    },
    close() {
      this.$el.remove()
      this.$emit('close')
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
$animation-deration: 500ms;
@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
@keyframes slide-down {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.wrapper {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  &.position-top {
    top: 0;
    .g-toast {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      animation: slide-down $animation-deration;
    }
  }
  &.position-middle {
    top: 50%;
    transform: translate(-50%, -50%);
    .g-toast {
      animation: fade-in $animation-deration;
    }
  }
  &.position-bottom {
    bottom: 0;
    .g-toast {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      animation: slide-up $animation-deration;
    }
  }
}
.g-toast {
  animation: slide-up $animation-deration;
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
}
</style>
