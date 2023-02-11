import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5c128970 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _b783cbe2 = () => interopDefault(import('..\\pages\\blog.vue' /* webpackChunkName: "pages/blog" */))
const _2bf3c998 = () => interopDefault(import('..\\pages\\contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _9e50f48a = () => interopDefault(import('..\\pages\\page-404\\index.vue' /* webpackChunkName: "pages/page-404/index" */))
const _e7495f7e = () => interopDefault(import('..\\pages\\page-about-2\\index.vue' /* webpackChunkName: "pages/page-about-2/index" */))
const _88601124 = () => interopDefault(import('..\\pages\\page-career-details\\index.vue' /* webpackChunkName: "pages/page-career-details/index" */))
const _d2d2c414 = () => interopDefault(import('..\\pages\\page-careers-5\\index.vue' /* webpackChunkName: "pages/page-careers-5/index" */))
const _0888d8f2 = () => interopDefault(import('..\\pages\\page-comming-soon-5\\index.vue' /* webpackChunkName: "pages/page-comming-soon-5/index" */))
const _01982db5 = () => interopDefault(import('..\\pages\\page-faq-5\\index.vue' /* webpackChunkName: "pages/page-faq-5/index" */))
const _53f84bfa = () => interopDefault(import('..\\pages\\page-portfolio-5\\index.vue' /* webpackChunkName: "pages/page-portfolio-5/index" */))
const _07d47660 = () => interopDefault(import('..\\pages\\page-product-app\\index.vue' /* webpackChunkName: "pages/page-product-app/index" */))
const _45935ae2 = () => interopDefault(import('..\\pages\\page-services-app\\index.vue' /* webpackChunkName: "pages/page-services-app/index" */))
const _6bc52877 = () => interopDefault(import('..\\pages\\page-shop-app\\index.vue' /* webpackChunkName: "pages/page-shop-app/index" */))
const _2188cf1e = () => interopDefault(import('..\\pages\\page-sign-in\\index.vue' /* webpackChunkName: "pages/page-sign-in/index" */))
const _541fd926 = () => interopDefault(import('..\\pages\\page-single-post-5\\index.vue' /* webpackChunkName: "pages/page-single-post-5/index" */))
const _59cf89c5 = () => interopDefault(import('..\\pages\\page-single-project-5\\index.vue' /* webpackChunkName: "pages/page-single-project-5/index" */))
const _3da41859 = () => interopDefault(import('..\\pages\\page-single-project-app\\index.vue' /* webpackChunkName: "pages/page-single-project-app/index" */))
const _48fd8faa = () => interopDefault(import('..\\pages\\portfolio.vue' /* webpackChunkName: "pages/portfolio" */))
const _7bca6435 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _5c128970,
    name: "about"
  }, {
    path: "/blog",
    component: _b783cbe2,
    name: "blog"
  }, {
    path: "/contact-us",
    component: _2bf3c998,
    name: "contact-us"
  }, {
    path: "/page-404",
    component: _9e50f48a,
    name: "page-404"
  }, {
    path: "/page-about-2",
    component: _e7495f7e,
    name: "page-about-2"
  }, {
    path: "/page-career-details",
    component: _88601124,
    name: "page-career-details"
  }, {
    path: "/page-careers-5",
    component: _d2d2c414,
    name: "page-careers-5"
  }, {
    path: "/page-comming-soon-5",
    component: _0888d8f2,
    name: "page-comming-soon-5"
  }, {
    path: "/page-faq-5",
    component: _01982db5,
    name: "page-faq-5"
  }, {
    path: "/page-portfolio-5",
    component: _53f84bfa,
    name: "page-portfolio-5"
  }, {
    path: "/page-product-app",
    component: _07d47660,
    name: "page-product-app"
  }, {
    path: "/page-services-app",
    component: _45935ae2,
    name: "page-services-app"
  }, {
    path: "/page-shop-app",
    component: _6bc52877,
    name: "page-shop-app"
  }, {
    path: "/page-sign-in",
    component: _2188cf1e,
    name: "page-sign-in"
  }, {
    path: "/page-single-post-5",
    component: _541fd926,
    name: "page-single-post-5"
  }, {
    path: "/page-single-project-5",
    component: _59cf89c5,
    name: "page-single-project-5"
  }, {
    path: "/page-single-project-app",
    component: _3da41859,
    name: "page-single-project-app"
  }, {
    path: "/portfolio",
    component: _48fd8faa,
    name: "portfolio"
  }, {
    path: "/",
    component: _7bca6435,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
