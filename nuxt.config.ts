export default defineNuxtConfig({
    extends: ['docus'],
    ssr: true,
    app: { baseURL: '/' },
    nitro: {
        prerender: {
            crawlLinks: true,
            routes: ['/']
        }
    }
})