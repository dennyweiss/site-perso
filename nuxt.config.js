export default {
  mode: "universal",
  target: "static",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    script: [
      {
        src: "https://kit.fontawesome.com/bd295ac568.js",
        crossorigin: "anonymous"
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/katex@0.11.0/dist/katex.min.css"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["@/static/main.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~/plugins/medium-zoom"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxt/components", "@nuxtjs/netlify-files"],
  netlifyFiles: {
    netlifyToml: {
      redirects: [
        {
          from: "/*",
          to: "/index.html",
          status: 200
        }
      ]
    }
  },
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxt/content"],
  generate: {
    subFolders: false,
    async routes() {
      const { $content } = require("@nuxt/content");
      const files = await $content({ deep: true })
        .only(["path", "tags"])
        .fetch();

      const tags = files
        .flatMap(file => file.tags)
        .filter(file => typeof file === "string")
        .map(tag => `/tag/${tag}`);

      return files
        .map(file => (file.path === "/index" ? "/" : file.path))
        .concat(tags);
    }
  },
  components: true,
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  content: {
    markdown: {
      remarkPlugins: ["remark-math"],
      rehypePlugins: ["rehype-katex"]
    }
  }
};
