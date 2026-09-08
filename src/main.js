import { createApp } from 'vue'
import './style.css'

import { Quasar } from 'quasar'
import App from './App.vue'
import { router } from './routes/router.js'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

const app = createApp(App)

app.use(Quasar, {
  plugins: {}
})

app.use(router)

app.mount('#app')
