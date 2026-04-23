---
title: Dlaczego warto używać plików index - Folder-as-Component
date: 2026-02-03
description: Jak uporządkować frontend w React/Vue/Nuxt dzięki wzorcowi Folder-as-Component i skalować projekt bez chaosu.
---

# Dlaczego warto używać plików index - Folder-as-Component

Czy zdarzyło Ci się szukać jednego komponentu i trafiać na dziesiątki plików typu `Button.vue`, `ButtonTypes.ts`, `ButtonStyles.scss`, `useButton.ts`?  
Na początku to działa, ale wraz ze wzrostem projektu robi się trudne w utrzymaniu.

W tym wpisie pokazuję podejście, które dobrze skaluje się w projektach komponentowych: **Folder-as-Component**.

## Problem: chaos w nazewnictwie

Typowa, płaska struktura często wygląda tak:

```html
components/
├── Button.vue
├── Button.types.ts
├── Button.styles.scss
├── Card.vue
├── Card.types.ts
├── Card.styles.scss
├── Navbar.vue
├── NavbarLinks.vue
├── NavbarDrawer.vue
└── ...
```

### Co z nią nie tak?

1. Wszystko ląduje w jednym miejscu.
2. Nazwy robią się długie i powtarzalne.
3. Trudno ocenić, co należy do którego komponentu.
4. Przy większej liczbie elementów rośnie koszt refaktorów.
5. W IDE pojawia się „tab hell” - mnóstwo podobnych nazw.

## Rozwiązanie: Folder-as-Component

Zamiast nazywać każdy plik nazwą komponentu, nazwij **folder** nazwą komponentu, a wewnątrz trzymaj stały układ:

```html
components/
├── button/
│   ├── index.ts        # eksport komponentu i typów
│   ├── index.vue       # lub index.tsx
│   ├── _index.scss
│   └── types/
│       ├── index.ts
│       └── interfaces.ts
├── card/
│   ├── index.ts
│   ├── index.vue
│   └── _index.scss
└── navbar/
    ├── index.ts
    ├── index.vue
    ├── _index.scss
    └── components/
        ├── index.ts
        ├── _index.scss
        ├── Drawer/
        │   ├── index.ts
        │   ├── index.vue
        │   └── _index.scss
        └── Links/
            ├── index.ts
            ├── index.vue
            └── _index.scss
```

## Jak to wygląda w praktyce

### React: `components/button/`

`index.ts`:

```ts
export { Button } from './index.tsx'
export * from './types'
```

`index.tsx`:

```tsx
import type { ButtonProps } from '.'
import './index.scss'

export const Button = ({ label, icon, children, ...props }: ButtonProps) => {
  return (
    <button className="button" {...props}>
      {icon && <Icon name={icon} />}
      {label && <span>{label}</span>}
      {children}
    </button>
  )
}
```

### Vue/Nuxt: `components/button/`

`index.ts`:

```ts
export { default as Button } from './index.vue'
export * from './types'
```

`index.vue`:

```vue
<template>
  <button class="button">
    <Icon v-if="icon" :name="icon" />
    <span v-if="label">{{ label }}</span>
    <slot />
  </button>
</template>

<script setup lang="ts">
import type { ButtonProps } from '.'

defineProps<ButtonProps>()
</script>

<style lang="scss">
@import 'index';
</style>
```

## Barrel exports: prostsze importy

Dla większych modułów tworzysz agregatory:

`components/atoms/index.ts`:

```ts
export * from './button'
export * from './badge'
export * from './icon'
```

`components/sections/index.ts`:

```ts
export * from './hero'
export * from './faq'
export * from './footer'
```

Dzięki temu importy stają się krótkie i przewidywalne:

```ts
import { Button } from '@/components/atoms'
```

## Zalety wzorca

1. **Lepsza enkapsulacja** - wszystko związane z komponentem jest obok siebie.
2. **Lepsza skalowalność** - struktura pozostaje czytelna przy 50+ i 100+ komponentach.
3. **Łatwiejszy refaktor** - przenosisz cały folder, nie polujesz po plikach.
4. **Lepszy DX** - łatwiejsza nawigacja po zakładkach i wyszukiwarce IDE.
5. **Spójność między zespołem** - każdy wie, gdzie szukać komponentu, styli i typów.
6. **Niezależność od frameworka** - działa podobnie w React, Vue, Nuxt, Next.

## Konwencja plików

- `index.ts` - publiczny eksport modułu (barrel export)
- `index.vue` / `index.tsx` - implementacja komponentu
- `_index.scss` - styl jako SCSS partial
- `types/` - kontrakty typów i interfejsy

To proste reguły, ale bardzo poprawiają czytelność projektu.

## Kiedy warto wdrożyć

Najbardziej opłaca się, gdy:

- masz więcej niż kilkanaście komponentów,
- pracujesz w zespole,
- masz rozbudowane sekcje z subkomponentami (np. `navbar`, `dashboard`, `pricing`),
- chcesz łatwiej utrzymać spójność kodu.

## Podsumowanie

Folder-as-Component nie jest „magicznym” rozwiązaniem, ale jest bardzo skuteczną konwencją organizacji kodu.  
Porządkuje projekt, skraca czas nawigacji i upraszcza refaktory - szczególnie w aplikacjach Nuxt/Vue rozwijanych długoterminowo.
