// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config'
import { readdirSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'

function collectContentRoutes(root = 'content') {
    const routes = new Set<string>()

    const walk = (dir: string) => {
        for (const name of readdirSync(dir)) {
            if (name.startsWith('.')) continue
            const p = join(dir, name)
            const s = statSync(p)
            if (s.isDirectory()) {
                walk(p)
            } else if (name.endsWith('.md')) {
                const rel = relative(root, p).replace(/\\/g, '/')
                if (/\/index\.md$/i.test(rel)) {
                    const r = '/' + rel.replace(/\/index\.md$/i, '')
                    routes.add(r === '//' ? '/' : r)
                } else {
                    routes.add('/' + rel.replace(/\.md$/i, ''))
                }
            }
        }
    }

    walk(root)
    return Array.from(routes)
}

const contentRoutes = collectContentRoutes()

console.log(`⚙️  Will prerender ${contentRoutes.length} content routes`)
console.log(contentRoutes.slice(0, 25))


export default defineNuxtConfig({
    extends: ['docus'],
    ssr: true,
    app: { baseURL: '/' },

    content: {
        documentDriven: true,
    },

    routeRules: {
        '/**': { prerender: true },
    },

    nitro: {
        prerender: {
            crawlLinks: true,
            routes: ['/', ...contentRoutes],
        },
    },
})
