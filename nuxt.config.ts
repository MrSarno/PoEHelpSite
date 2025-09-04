export default defineNuxtConfig({
    extends: ['docus'],
    ssr: true,
    nitro: {
        prerender: {
            crawlLinks: true,
            routes: ['/']
        }
    }
})