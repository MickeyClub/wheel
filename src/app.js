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
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsItem from './tabs-item'
import TabsBody from './tabs-body'
import TabsPane from './tabs-pane'
import Popover from './popover'

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
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-pane', TabsPane)
Vue.component('g-popover', Popover)

new Vue({
  el: '#app',
  data: {
    loading: false,
    loading2: true,
    loading3: false,
    message: 'h1',
    selectedTab: 'one'
  },
  created() {},
  methods: {
    inputChange(e) {
      console.log(e.target.value)
    },
    showToast(local) {
      if (!local) {
        local = 'middle'
      }
      this.$toast(`今天睡意不错${parseInt(Math.random() * 100)}`, {
        closeButton: {
          text: '早点睡',
          callback(toast) {
            toast.log()
          }
        },
        autoDelay: 2,
        autoClose: true,
        position: local
      })
    }
  }
})
