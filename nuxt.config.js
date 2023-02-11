export default {
  // Target: https://go.nuxtjs.dev/config-target
  ssr: false,
  target: 'static',
  googleAnalytics: {
    // Options
    id: 'G-749GX27GFC',
    autoTracking: {
      screenview: true
    }
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Creazy Lab',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Creazy Lab - Building The Future Creative' },
      { name: 'keywords', content: 'Creazy Lab - Building The Future Creative' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'shortcut icon', sizes: '16x16', href: '/assets/img/Logo creazy lab 7.png' },
      { rel: 'stylesheet', href:'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap' },
      { rel: 'stylesheet', href:'https://fonts.googleapis.com/css2?family=El+Messiri:wght@400;500;600;700&display=swap' },
    ],
    script: [
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-749GX27GFC',
        async: true,
      },
      {
        hid: "gtag-script",
        innerHTML: `window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-749GX27GFC');`,
      },
      {
        hid: "gtm-script",
        innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\nnew Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\nj=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n})(window,document,'script','dataLayer','G-749GX27GFC');`,
      },
      { src: "/assets/js/lib/pace.js" },
      { src: "/assets/js/lib/bootstrap.bundle.min.js" },
      { src: "/assets/js/lib/mixitup.min.js" },
      { src: "/assets/js/lib/wow.min.js" },
      { src: "/assets/js/lib/html5shiv.min.js" },
      { src: '/assets/js/main.js', ssr: false }
    ],
    noscript: [
      {
        hid: "gtm-noscript",
        innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=G-749GX27GFC" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        prepend: true,
        pbody: true,
      }
    ],
    __dangerouslyDisableSanitizersByTagID: {
      'gtag-script': ['innerHTML'],
      'gtm-script': ['innerHTML'],
      'gtm-noscript': ['innerHTML'],
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/styles/globals.css',
    '~/styles/preloader.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/vueAwesomeSwiper.js",
    { src: "~/plugins/lightGallery.client.js", ssr: false },
    { src: "~/plugins/vueRangeSlider.js", ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/ngrok',
  ],
  ngrok: {
    // module options
    authtoken: process.env.NGROK_AUTHTOKEN
  },
  router: {
    prefetchLinks: false
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ["vue-scrollto/nuxt", { duration: 1000 }]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    splitChunks: {
      layouts: true
    }
  }
}
