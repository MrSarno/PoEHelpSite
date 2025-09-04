import { defineNuxtConfig } from 'nuxt/config'
import { readdirSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'

const stripPrefix = (seg: string) => seg.replace(/^\d+\./, '')

function collectPrettyContentRoutes(root = 'content') {
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
                const parts = rel.split('/').map(stripPrefix)

                // remove .md
                parts[parts.length - 1] = parts[parts.length - 1].replace(/\.md$/i, '')

                // handle index.md → directory route
                if (parts[parts.length - 1].toLowerCase() === 'index') {
                    parts.pop()
                }

                let route = '/' + parts.join('/')
                if (route === '//') route = '/'

                routes.add(route)
            }
        }
    }

    walk(root)
    return Array.from(routes).sort()
}

const contentRoutes = collectPrettyContentRoutes()
console.log(`⚙️  Will prerender ${contentRoutes.length} content routes`)
console.log(contentRoutes.slice(0, 25)) //

export default defineNuxtConfig({
    extends: ['docus'],
    ssr: true,
    app: { baseURL: '/' },

    content: {
        documentDriven: true,
        //
    },

    //
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
