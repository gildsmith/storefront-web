<script setup>
import {onMounted, ref, watch} from 'vue'
import {useI18n} from 'vue-i18n'

const {locale} = useI18n()
const lang = ref(locale.value)

function supportedLocales() {
    return ['en', 'pl']
}

function browserLocale() {
    const browserLanguage = navigator.language.split('-')[0]
    return supportedLocales().includes(browserLanguage) ? browserLanguage : 'en'
}

function storedLocale() {
    const storedLocale = localStorage.getItem('preferred-language')
    lang.value = storedLocale || browserLocale()
}

watch(lang, (value) => {
    locale.value = value
    localStorage.setItem('preferred-language', value)
})

onMounted(storedLocale)
</script>

<template>
    <select id="language" v-model="lang" class="input" name="language">
        <option value="en">English</option>
        <option value="pl">Polski</option>
    </select>
</template>