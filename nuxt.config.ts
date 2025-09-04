export default defineNuxtConfig({
    routeRules: {
        '/': { prerender: true },
        '/**': { isr: true },
    }
})