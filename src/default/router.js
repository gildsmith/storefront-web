// noinspection JSUnresolvedReference

const vendorRouteFiles = import.meta.glob([
  '@composer/*/*/resources/js/storefront/router.{ts,js}',
  '@npm/*/*/resources/js/storefront/router.{ts,js}'
], {
  import: 'default',
  eager: true
})

export default [
  ...Object.values(vendorRouteFiles).flat()
]
