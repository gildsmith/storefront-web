import NotFound from '../pages/NotFound.vue'

export default [
    {
        name: 'storefront.fallback',
        path: '/:fallback(.*)*',
        component: NotFound
    },
]