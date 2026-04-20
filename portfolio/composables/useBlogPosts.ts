import { marked } from 'marked'

export type BlogPost = {
  slug: string
  title: string
  date: string
  description: string
  body: string
  html: string
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
        html: marked.parse(body.trim(), { async: false }) as string,
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
