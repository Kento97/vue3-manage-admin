import ElementPlus from "element-plus";
import {createI18n} from "vue-i18n";
import 'element-plus/dist/index.css'
import localeZH from 'element-plus/lib/locale/lang/zh-cn'
import localeEN from 'element-plus/lib/locale/lang/en'
import messages from '../utils/i18n'

const i18n = createI18n({
    locale: localeZH.name,
    messages,
    fallbackLocale: localeEN.name
})

export default (app:any) => {
    app.use(ElementPlus, {locale: localeZH})
    app.use(i18n)
}