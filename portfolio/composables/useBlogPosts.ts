import hljs from 'highlight.js/lib/core'
import bash from 'highlight.js/lib/languages/bash'
import json from 'highlight.js/lib/languages/json'
import php from 'highlight.js/lib/languages/php'
import typescript from 'highlight.js/lib/languages/typescript'
import xml from 'highlight.js/lib/languages/xml'
import { marked } from 'marked'

export type BlogPost = {
  slug: string
  title: string
  date: string
  description: string
  body: string
  html: string
}

hljs.registerLanguage('ts', typescript)
hljs.registerLanguage('php', php)
hljs.registerLanguage('html', xml)
hljs.registerLanguage('xml', xml)
hljs.registerLanguage('vue', xml)
hljs.registerLanguage('bash', bash)
hljs.registerLanguage('json', json)

function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

function escapeHtmlForCodeBlock(raw: string): string {
  return raw
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

const renderer = new marked.Renderer()
const headingSlugCount = new Map<string, number>()

function resetHeadingSlugCounters(): void {
  headingSlugCount.clear()
}

renderer.heading = (text: string, level: number) => {
  const base = slugify(text)
  const n = headingSlugCount.get(base) ?? 0
  headingSlugCount.set(base, n + 1)
  const id = n === 0 ? base : `${base}-${n}`
  const tag = `h${level}`
  return `<${tag} id="${id}">${text}</${tag}>`
}

renderer.code = (code: string, infostring?: string) => {
  const lang = infostring?.split(/\s+/)[0]
  let innerHtml: string
  let hasHighlighting = false

  if (lang && hljs.getLanguage(lang)) {
    try {
      innerHtml = hljs.highlight(code, {
        language: lang,
      }).value
      hasHighlighting = true
    } catch (err) {
      console.error('Highlight.js error:', err)
      innerHtml = escapeHtmlForCodeBlock(code)
    }
  } else {
    innerHtml = escapeHtmlForCodeBlock(code)
  }

  const classes = [
    lang ? `language-${lang}` : '',
    hasHighlighting ? 'hljs' : '',
  ].filter(Boolean)
  const classAttr = classes.length > 0 ? ` class="${classes.join(' ')}"` : ''
  return `<pre><code${classAttr}>${innerHtml}</code></pre>`
}

marked.setOptions({
  renderer,
})

function parseMarkdown(markdown: string): string {
  resetHeadingSlugCounters()
  return marked.parse(markdown, { async: false }) as string
}

function parseFrontmatter(raw: string): {
  meta: Record<string, string>
  body: string
} {
  if (!raw.startsWith('---\n')) {
    return { meta: {}, body: raw }
  }
  const end = raw.indexOf('\n---\n', 4)
  if (end === -1) {
    return { meta: {}, body: raw }
  }
  const fm = raw.slice(4, end).trim()
  const body = raw.slice(end + 5)
  const meta: Record<string, string> = {}
  for (const line of fm.split('\n')) {
    const m = /^(\w+):\s*(.+)$/.exec(line)
    if (!m) continue
    meta[m[1]] = m[2].trim().replace(/^['"]|['"]$/g, '')
  }
  return { meta, body }
}

const blogModules = (
  import.meta as unknown as {
    glob: (
      pattern: string,
      options: Record<string, unknown>
    ) => Record<string, string>
  }
).glob('/public/blog/**/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>

function buildPosts(): BlogPost[] {
  return Object.entries(blogModules)
    .map(([path, raw]) => {
      const slug = path.replace(/^\/public\/blog\//, '').replace(/\.md$/i, '')
      const { meta, body } = parseFrontmatter(raw)
      return {
        slug,
        title: meta.title || slug,
        date: meta.date || '',
        description: meta.description || '',
        body: body.trim(),
        html: parseMarkdown(body.trim()),
      }
    })
    .sort((a, b) => b.date.localeCompare(a.date))
}

const posts = buildPosts()

export function useBlogPosts() {
  return posts
}

export function useBlogPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug) ?? null
}
