import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Content from './content'
import Footer from './footer'
import Sider from './sider'
import Toast from './toast'
import plugin from './plugin'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-content', Content)
Vue.component('g-footer', Footer)
Vue.component('g-sider', Sider)
Vue.component('g-toast', Toast)
Vue.use(plugin)

new Vue({
  el: '#app',
  data: {
    loading: false,
    loading2: true,
    loading3: false,
    message: 'h1'
  },
  created() {
    this.$toast('<strong>十一点半就撤</strong><strong>十一点半就撤</strong><strong>十一点半就撤</strong><strong>十一点半就撤</strong><strong>十一点半就撤</strong>', {
      closeButton: {
        text: '关闭',
        callback(toast) {
          toast.log()
          console.log('我点了 打印知道了')
        }
      },
      enableHtml: true
    })
  },
  methods: {
    inputChange(e) {
      console.log(e.target.value)
    },
    showToast() {
      this.$toast('今天睡意不错', {
        closeButton: {
          text: '早点睡',
          callback(toast) {
            toast.log()
          }
        },
        autoDelay: true,
        closeDelay: 2
      })
    }
  }
})