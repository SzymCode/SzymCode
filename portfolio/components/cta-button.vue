<template>
  <NuxtLink
    class="cta-button rainbow-bg-border-glow-hover-auto"
    :to="href"
    :target="target"
    :rel="target === '_blank' ? 'noopener noreferrer' : undefined"
    @click="emit('click', $event)"
  >
    <slot>
      <Icon v-if="icon" :name="icon" />
      <span class="cta-button-text">{{ text }}</span>
    </slot>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  text: string
  icon?: string
  href: string
  target?: string
}>()

const emit = defineEmits<{
  click: [e: MouseEvent]
}>()
</script>

<style lang="scss">
.cta-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.5rem;
  border-radius: 1.5rem;
  font-size: 1.125rem;
  font-weight: 500;
  text-decoration: none;
  color: black;
  transition: filter 0.2s ease;

  &:hover {
    filter: brightness(1.2);
  }
}
</style>
