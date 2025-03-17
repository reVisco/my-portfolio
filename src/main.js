import { createApp } from 'vue'
import { VueReCaptcha } from 'vue-recaptcha-v3'
import './style.css'
import App from './App.vue'

const app = createApp(App)

app.use(VueReCaptcha, {
  siteKey: '6LfGt1IpAAAAANUQoNRHCgr6gLIkXI_dNB_Hs',
  loaderOptions: {
    useRecaptchaNet: true,
    autoHideBadge: true
  }
})

app.mount('#app')
