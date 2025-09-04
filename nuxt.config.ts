export default defineNuxtConfig({
    routeRules: {
        '/': { prerender: true },
        '/**': { prerender: true },
    }
})