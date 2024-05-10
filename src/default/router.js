// noinspection JSUnresolvedReference

const customRoutesFile = import.meta.glob('@/gildsmith/storefront/routes.js', {
  import: 'default',
  eager: true,
})

const composerRouteFiles = import.meta.glob('@composer/*/*/resources/js/gildsmith/storefront/routes.{ts,js}', {
  import: 'default',
  eager: true,
})

const npmRouteFiles = import.meta.glob('@npm/*/*/src/gildsmith/storefront/routes.{ts,js}', {
  import: 'default',
  eager: true,
})

const defaultRouteFile = import.meta.glob('./routes.js', {
  import: 'default',
  eager: true,
})

export default [
  ...Object.values(composerRouteFiles).flat(),
  ...Object.values(npmRouteFiles).flat(),
  ...Object.values(customRoutesFile).flat(),
  ...Object.values(defaultRouteFile).flat()
]
