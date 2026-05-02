import { readFileSync, writeFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { build } from 'vite'
import react from '@vitejs/plugin-react'

const __dirname = dirname(fileURLToPath(import.meta.url))

async function prerender() {
  // Build SSR bundle — react only, no CSS processing needed server-side
  await build({
    logLevel: 'warn',
    plugins: [react()],
    build: {
      ssr: true,
      rollupOptions: {
        input: resolve(__dirname, 'src/entry-server.jsx'),
      },
      outDir: 'dist/server',
    },
  })

  const { render } = await import(
    pathToFileURL(resolve(__dirname, 'dist/server/entry-server.js')).href
  )
  const appHtml = render()

  const template = readFileSync(resolve(__dirname, 'dist/index.html'), 'utf-8')
  const html = template.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`
  )

  writeFileSync(resolve(__dirname, 'dist/index.html'), html)
  console.log('Pre-render complete — full content is now in static HTML.')
}

prerender().catch((e) => {
  console.error(e)
  process.exit(1)
})
