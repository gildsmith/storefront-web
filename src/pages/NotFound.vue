<template>
<div class="notFoundContainer">
    <div class="notFoundCat">(^・x・^)</div>
    <h1>Oh yarn.</h1>
    <span>Purr-haps you've strayed too far. But hey, at least there's this: 🧶</span>
    <RouterLink to="/" class="button">Back to homepage</RouterLink>
</div>
</template>

<style scoped>
.notFoundContainer {
    @apply flex flex-col justify-center items-center p-4 gap-2 max-w-72 mx-auto text-center;
}
</style>