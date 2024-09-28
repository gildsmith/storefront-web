<script setup>
import {useI18n} from 'vue-i18n'

const {t} = useI18n()
</script>

<template>
    <div class="notFoundContainer">
        <div class="notFoundFace">{{ t('(^・x・^)') }}</div>
        <h1>{{ t('Oh yarn.') }}</h1>
        <span>{{ t("Purr-haps you've strayed too far. But hey, at least there's this: 🧶") }}</span>
        <RouterLink class="button" to="/">{{ t('Back to homepage') }}</RouterLink>
    </div>
</template>

<style scoped>
.notFoundContainer {
    @apply flex flex-col justify-center items-center p-4 gap-2 max-w-72 mx-auto text-center;
}

.notFoundFace {
    @apply text-lg text-slate-300;
}
</style>