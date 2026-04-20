<template>
  <section class="blog-hero" aria-labelledby="blog-title">
    <div class="blog-hero-inner">
      <p class="blog-eyebrow">Blog</p>
      <h1 id="blog-title" class="blog-title">
        Materiały do <span class="rainbow-text-auto">nauki</span>
      </h1>
      <p class="blog-lead">
        Materiały o nauce programowania, budowie portfolio i wejściu do IT.
        Znajdziesz tu konkretne wskazówki z pracy mentora: jak planować naukę,
        czego uczyć się w pierwszej kolejności, jak opisywać projekty i jak
        przygotować się do rozmów technicznych bez chaosu.
        <br /><br />
        To praktyczne treści, które możesz od razu wdrożyć w swoim planie
        działania - niezależnie od tego, czy dopiero zaczynasz, czy chcesz
        przyspieszyć drogę do pierwszej pracy w branży.
      </p>
      <NuxtLink class="blog-back-home" to="/">← Strona główna</NuxtLink>
    </div>
  </section>
</template>

<style lang="scss">
.blog-hero {
  position: relative;
  z-index: 1;
  padding: clamp(5.5rem, 14vw, 8rem) 1rem clamp(2rem, 5vw, 3rem);

  &-inner {
    width: min(1200px, 100%);
    margin-inline: auto;
  }
}

.blog-eyebrow {
  margin: 0 0 0.5rem;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: color-mix(in srgb, #fff 52%, transparent);
}

.blog-title {
  margin: 0 0 0.75rem;
  font-size: clamp(1.75rem, 4.5vw, 2.35rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.15;
  color: #fff;
}

.blog-lead {
  margin: 0 0 1.25rem;
  font-size: clamp(0.95rem, 2vw, 1.05rem);
  line-height: 1.65;
  color: color-mix(in srgb, #fff 78%, transparent);
}

.blog-back-home {
  display: inline-flex;
  font-size: 0.9rem;
  font-weight: 700;
  text-decoration: none;
  color: hsl(var(--rainbow-hue) 58% 62%);

  &:hover {
    text-decoration: underline;
    text-underline-offset: 0.15em;
  }
}
</style>
