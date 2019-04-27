import Toast from './toast'

export default {
  install(Vue, options) {
    Vue.prototype.$toast = (message) =>{
      // 构造一个toast组件 放到body中
      let Constructor = Vue.extend(Toast)
      let toast = new Constructor()
      toast.$slots.default = [message]
      toast.$mount()
      document.body.appendChild(toast.$el)
    }
  }
}