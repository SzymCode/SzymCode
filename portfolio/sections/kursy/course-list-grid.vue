<template>
  <section class="courses-list" :aria-label="ariaLabel">
    <div class="courses-inner courses-grid">
      <article
        v-for="course in courses"
        :key="course.title"
        class="course-card"
        :class="{ 'course-card-not-ready': !courseIsReady(course) }"
        :inert="!courseIsReady(course) || undefined"
      >
        <div class="course-card-accent" aria-hidden="true" />
        <header class="course-card-head">
          <p class="course-level">{{ course.level }}</p>
          <div class="course-card-title-row">
            <div class="course-card-icon-wrap" aria-hidden="true">
              <Icon :name="course.icon" class="course-card-icon" />
            </div>
            <h2 class="course-title">{{ course.title }}</h2>
          </div>
        </header>
        <p class="course-description">{{ course.description }}</p>
        <ul class="course-points">
          <li v-for="point in course.points" :key="point">
            <Icon
              name="mdi:check-circle-outline"
              class="course-point-icon"
              aria-hidden="true"
            />
            <span>{{ point }}</span>
          </li>
        </ul>
        <div v-if="course.tags?.length" class="course-tags">
          <span v-for="tag in course.tags" :key="tag" class="course-tag">
            {{ tag }}
          </span>
        </div>

        <div
          v-if="!courseIsReady(course)"
          class="course-card-building"
          role="presentation"
        >
          <span class="course-building-pill" role="status">W budowie</span>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { CatalogCourse } from '~/composables/courseCatalog'

defineProps<{
  courses: readonly CatalogCourse[]
  ariaLabel: string
}>()

function courseIsReady(course: CatalogCourse) {
  return course.ready !== false
}
</script>

<style lang="scss" scoped>
@use '../../styles/breakpoints' as *;

$course-ease: cubic-bezier(0.22, 1, 0.36, 1);

.courses-list {
  position: relative;
  z-index: 1;
  padding-bottom: clamp(2.5rem, 7vw, 4rem);

  .courses-inner {
    width: min(1200px, calc(100% - 2rem));
    margin-inline: auto;
  }

  .courses-inner.courses-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(17.5rem, 1fr));
    gap: clamp(1rem, 2.5vw, 1.35rem);
    align-items: stretch;

    @include bp-lg-up {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .course-card {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      height: 100%;
      min-height: 15.5rem;
      padding: 1.15rem 1.25rem 1.15rem;
      text-decoration: none;
      color: inherit;
      border-radius: 0.85rem;
      border: 1px solid hsl(var(--rainbow-hue) 58% 62% / 0.55);
      background:
        linear-gradient(180deg, rgb(255 255 255 / 0.07), rgb(255 255 255 / 0.02)),
        linear-gradient(165deg, rgb(8 12 11 / 0.96), rgb(4 7 7 / 0.94));
      backdrop-filter: blur(1rem);
      overflow: hidden;
      isolation: isolate;
      transition:
        border-color 0.22s $course-ease,
        box-shadow 0.22s $course-ease,
        background 0.22s $course-ease;

      &:hover:not(.course-card-not-ready) {
        border-color: hsl(var(--rainbow-hue) 58% 62%);
        background:
          linear-gradient(
            180deg,
            color-mix(in srgb, hsl(var(--rainbow-hue) 55% 52%) 14%, rgb(255 255 255 / 0.07)),
            color-mix(in srgb, hsl(var(--rainbow-hue) 55% 52%) 6%, rgb(255 255 255 / 0.02))
          ),
          linear-gradient(165deg, rgb(9 14 13 / 0.98), rgb(5 8 8 / 0.96));
        box-shadow:
          0 0 0 1px hsl(var(--rainbow-hue) 58% 62% / 0.25),
          0 18px 48px rgb(0 0 0 / 0.38),
          0 0 36px hsl(var(--rainbow-hue) 55% 48% / 0.12);
      }

      &:focus-within:not(.course-card-not-ready) {
        border-color: hsl(var(--rainbow-hue) 58% 62%);
        box-shadow:
          0 0 0 2px color-mix(in srgb, hsl(var(--rainbow-hue) 58% 62%) 45%, transparent),
          0 12px 40px rgb(0 0 0 / 0.3);
      }

      @media (prefers-reduced-motion: reduce) {
        transition: border-color 0.01ms, box-shadow 0.01ms, background 0.01ms;
      }

      .course-card-accent {
        position: absolute;
        inset: 0 0 auto;
        height: 3px;
        background: linear-gradient(
          90deg,
          transparent,
          hsl(var(--rainbow-hue) 58% 58%),
          transparent
        );
        opacity: 0.85;
        pointer-events: none;
        z-index: 0;
      }

      .course-card-head {
        position: relative;
        z-index: 1;
        display: grid;
        grid-template-columns: 1fr;
        row-gap: 0.2rem;
        margin: 0;
        padding: 0;

        .course-level {
          margin: 0 0 0.25rem;
          padding-left: 0.05rem;
          font-size: 0.64rem;
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: color-mix(in srgb, #fff 58%, transparent);
        }

        .course-card-title-row {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          min-width: 0;
        }

        .course-card-icon-wrap {
          display: grid;
          place-items: center;
          width: 2.65rem;
          height: 2.65rem;
          flex-shrink: 0;
          border-radius: 0.65rem;
          border: 1px solid color-mix(in srgb, #fff 12%, transparent);
          background: linear-gradient(
            165deg,
            rgb(255 255 255 / 0.08),
            rgb(255 255 255 / 0.02)
          );
          box-shadow: inset 0 1px 0 rgb(255 255 255 / 0.06);

          .course-card-icon {
            width: 1.35rem;
            height: 1.35rem;
            color: hsl(var(--rainbow-hue) 62% 64%);
          }
        }

        .course-title {
          margin: 0;
          flex: 1;
          min-width: 0;
          font-size: clamp(1.02rem, 1.9vw, 1.12rem);
          font-weight: 700;
          line-height: 1.25;
          letter-spacing: -0.01em;
          color: #fff;
          text-wrap: balance;
        }
      }

      .course-description {
        position: relative;
        z-index: 1;
        margin: 0;
        font-size: 0.9rem;
        line-height: 1.45;
        color: color-mix(in srgb, #fff 72%, transparent);
      }

      .course-points {
        position: relative;
        z-index: 1;
        margin: 0.1rem 0 0;
        padding: 0;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 0.35rem;

        li {
          display: flex;
          align-items: flex-start;
          gap: 0.45rem;
          font-size: 0.86rem;
          line-height: 1.45;
          color: color-mix(in srgb, #fff 80%, transparent);

          .course-point-icon {
            flex-shrink: 0;
            width: 1.05rem;
            height: 1.05rem;
            margin-top: 0.12rem;
            color: hsl(var(--rainbow-hue) 58% 62%);
          }
        }
      }

      .course-tags {
        position: relative;
        z-index: 1;
        display: flex;
        flex-wrap: wrap;
        gap: 0.35rem;
        margin-top: auto;
        padding-top: 0.15rem;

        .course-tag {
          display: inline-flex;
          align-items: center;
          padding: 0.2rem 0.55rem;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          border-radius: 999px;
          border: 1px solid color-mix(in srgb, #fff 14%, transparent);
          color: color-mix(in srgb, #fff 88%, transparent);
          background: rgb(0 0 0 / 0.22);
        }
      }

      .course-card-building {
        position: absolute;
        inset: 0;
        z-index: 8;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        border-radius: inherit;
        background: rgb(0 0 0 / 0.52);
        box-shadow: inset 0 0 0 1px rgb(255 255 255 / 0.06);
        pointer-events: none;
      }

      .course-building-pill {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0.55rem 1.2rem;
        font-size: 0.78rem;
        font-weight: 800;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: color-mix(in srgb, #fff 94%, transparent);
        border-radius: 999px;
        border: 1px solid hsl(var(--rainbow-hue) 58% 62% / 0.75);
        background: rgb(0 0 0 / 0.65);
        box-shadow:
          inset 0 1px 0 rgb(255 255 255 / 0.1),
          0 10px 32px rgb(0 0 0 / 0.5);
      }
    }
  }
}
</style>
