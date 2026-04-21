import { mkdir, rm, copyFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))
const dist = join(root, 'dist')

async function copy(from, to) {
  await mkdir(dirname(to), { recursive: true })
  await copyFile(from, to)
}

await rm(dist, { recursive: true, force: true })
await mkdir(dist, { recursive: true })

await copy(join(root, 'index.html'), join(dist, 'index.html'))
await copy(join(root, '404.html'), join(dist, '404.html'))
await copy(join(root, 'styles.css'), join(dist, 'styles.css'))
await mkdir(join(dist, 'docs'), { recursive: true })
await copy(join(root, 'docs/index.html'), join(dist, 'docs/index.html'))

console.log('Built developers.opensin.ai to dist/')
