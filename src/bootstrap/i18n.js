import {createI18n} from 'vue-i18n'

/*
 | ---------------------------------------------------------------------------
 | Language Files Loading
 | ---------------------------------------------------------------------------
 | Custom, vendor, and default language files are loaded separately to
 | ensure the correct loading order. They're then merged into one object.
 */

const customFiles = import.meta.glob('@/gildsmith/storefront/lang/**/*.json', {
    import: 'default',
    eager: true,
})

const composerFiles = import.meta.glob('@composer/*/*/resources/js/storefront/lang/**/*.json', {
    import: 'default',
    eager: true,
})

const npmFiles = import.meta.glob('@npm/*/*/resources/js/storefront/lang/**/*.json', {
    import: 'default',
    eager: true,
})

const defaultFiles = import.meta.glob('../lang/**/*.json', {
    import: 'default',
    eager: true,
})

const files = {
    ...defaultFiles,
    ...composerFiles,
    ...npmFiles,
    ...customFiles,
}

/*
 | ---------------------------------------------------------------------------
 | Combine Language Messages
 | ---------------------------------------------------------------------------
 | Combines content of all language files into a single object.
 |
 | The regex used extracts the language code from the JSON file names,
 | expecting exactly two lowercase letters.
 */

const messages = {}

Object.entries(files).forEach(([key, value]) => {
    let code = key.match(/\/([a-z]{2,})\.json$/)[1]
    if (!messages[code]) {
        messages[code] = {}
    }
    Object.assign(messages[code], value)
})

/*
 | ---------------------------------------------------------------------------
 | Internationalization Setup
 | ---------------------------------------------------------------------------
 | Initializes i18n with global message support, legacy mode disabled,
 | and English set as the default and fallback language.
 */

export default createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'en',
    fallbackLocale: 'en',
    fallbackFormat: true,
    fallbackWarn: false,
    missingWarn: false,
    messages,
})