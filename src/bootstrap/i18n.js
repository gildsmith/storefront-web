import {createI18n} from 'vue-i18n'

const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'en',
    fallbackLocale: 'en',
    fallbackFormat: true,
    fallbackWarn: false,
    missingWarn: false,
})

export default i18n