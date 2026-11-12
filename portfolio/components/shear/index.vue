<template>
  <div ref="root" class="nuc-shear" aria-hidden="true">
    <div class="nuc-aura" />
    <div class="nuc-grid" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const root = ref<HTMLElement | null>(null)

let rafId: number | null = null
let currentX = 0
let currentY = 0
let targetX = 0
let targetY = 0
let isTracking = false

function updateMotion() {
  if (!root.value) {
    return
  }

  const factor = 0.1
  currentX += (targetX - currentX) * factor
  currentY += (targetY - currentY) * factor

  const mx = currentX.toFixed(3)
  const my = currentY.toFixed(3)

  root.value.style.setProperty('--shell-mx', mx)
  root.value.style.setProperty('--shell-my', my)
  document.documentElement.style.setProperty('--shell-mx', mx)
  document.documentElement.style.setProperty('--shell-my', my)

  const diff = Math.abs(targetX - currentX) + Math.abs(targetY - currentY)
  if (diff > 0.0005 || isTracking) {
    rafId = requestAnimationFrame(updateMotion)
  } else {
    rafId = null
  }
}

function startRaf() {
  if (rafId === null) {
    rafId = requestAnimationFrame(updateMotion)
  }
}

function onPointerMove(event: PointerEvent) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return
  }

  const w = window.innerWidth || 1
  const h = window.innerHeight || 1
  targetX = (event.clientX / w) * 2 - 1
  targetY = (event.clientY / h) * 2 - 1
  isTracking = true
  startRaf()
}

function onPointerLeave() {
  targetX = 0
  targetY = 0
  isTracking = false
  startRaf()
}

onMounted(() => {
  if (!import.meta.client) {
    return
  }

  window.addEventListener('pointermove', onPointerMove, { passive: true })
  document.addEventListener('mouseleave', onPointerLeave)
})

onUnmounted(() => {
  if (!import.meta.client) {
    return
  }

  window.removeEventListener('pointermove', onPointerMove)
  document.removeEventListener('mouseleave', onPointerLeave)

  if (rafId !== null) {
    cancelAnimationFrame(rafId)
    rafId = null
  }
})
</script>

<style lang="scss">
@use 'index' as *;
</style>
