import Toast from './toast'

let currentToast
export default {
  install(Vue, options) {
    Vue.prototype.$toast = (message, toastOptions) => {
      if (currentToast) {
        currentToast.close()
      }
      currentToast = createToast({
        Vue,
        message,
        propsData: toastOptions
      })
    }
  }
}

/** helpers */
function createToast({
  Vue,
  message,
  propsData
}) {
  // 构造一个toast组件 放到body中
  let Constructor = Vue.extend(Toast)
  // Vue.component(toast,{options})
  let toast = new Constructor({
    propsData
  })
  toast.$slots.default = [message]
  toast.$mount()
  document.body.appendChild(toast.$el)
  return toast
}