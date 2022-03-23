import {createApp} from 'vue'
import {createPinia} from 'pinia'
import installElementPlus from "@/plugins/element";

import App from './App.vue'
import router from './router'
import './index.css'

const app = createApp(App)
installElementPlus(app)
app
    .use(createPinia())
    .use(router)
    .mount('#app')
