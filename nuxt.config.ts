export default defineNuxtConfig({
    ssr: true,
    nitro: {
        prerender: {
            crawlLinks: true,
            routes: ['/']
        }
    }
})