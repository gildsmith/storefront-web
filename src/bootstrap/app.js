import defaultApp from '../default/App.vue'

const discoverCustomApp = import.meta.glob('@/gildsmith/storefront/App.vue', {
  import: 'default', eager: true
})

const customApp = Object.values(discoverCustomApp)

export default customApp.length === 1
  ? customApp[0]
  : defaultApp
