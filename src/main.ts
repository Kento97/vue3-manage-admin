import { createApp } from 'vue'
import { createPinia } from 'pinia'
import installElementPlus from "@/plugins/element";
import TreeMenu from "@/components/TreeMenu.vue";
//@ts-ignore
import * as ElIcons from '@element-plus/icons-vue'
import App from './App.vue'
import router from './router'
import './index.css'
import 'animate.css/animate.min.css'
import vue3SeamlessScroll from "vue3-seamless-scroll";
const app = createApp(App)
installElementPlus(app)
Object.keys(ElIcons).forEach(key => {
    app.component(key, ElIcons[key])
})
app
    .use(createPinia())
    .use(router)
    .use(vue3SeamlessScroll)
    .component(TreeMenu.name, TreeMenu)
    .mount('#app')
