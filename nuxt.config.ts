export default defineNuxtConfig({
    extends: ['docus'],
    ssr: true,
    app: { baseURL: '/' },

    //
    content: {
        documentDriven: true,
        prerender: true
    },

    nitro: {
        prerender: {
            crawlLinks: true,
            routes: ['/' ]
        }
    }
})