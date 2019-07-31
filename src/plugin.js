import Toast from './toast'

export default {
  install(Vue, options) {
    Vue.prototype.$toast = (message, toastOptions) =>{
      // 构造一个toast组件 放到body中
      let Constructor = Vue.extend(Toast)
      // Vue.component(toast,{options})
      let toast = new Constructor({
        propsData: toastOptions
      })  
      toast.$slots.default = [message]
      toast.$mount()
      document.body.appendChild(toast.$el)
    }
  }
}