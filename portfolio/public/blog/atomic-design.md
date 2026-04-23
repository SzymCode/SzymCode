---
title: Atomic Design - czy warto używać go do budowy skalowalnych UI?
date: 2026-01-24
description: Jak wykorzystać Atomic Design w Nuxt i Vue, utrzymać spójność komponentów oraz oddzielić logikę biznesową od warstwy UI.
---

# Atomic Design - czy warto używać go do budowy skalowalnych UI?

Wraz ze wzrostem projektu frontendowego rośnie liczba komponentów, zależności i wyjątków.  
Na początku wszystko wydaje się proste, ale po czasie pojawiają się problemy ze spójnością, utrzymaniem i refaktoryzacją.

Właśnie tutaj dobrze sprawdza się **Atomic Design** - podejście, które dzieli UI na warstwy o jasno określonej odpowiedzialności.

## Czym jest Atomic Design?

Atomic Design (Brad Frost) traktuje interfejs jak system złożony z małych elementów, które łączą się w większe struktury:

- **Atoms** - najmniejsze elementy UI (np. `Button`, `Input`, `Icon`)
- **Molecules** - proste połączenia atomów
- **Organisms** - większe, złożone bloki interfejsu
- **Templates** - układy i szkielety widoków
- **Pages** - kompletne strony

To podejście ułatwia budowę interfejsu, który jest przewidywalny i możliwy do skalowania.

## Najważniejsza zasada: brak logiki biznesowej w warstwie UI

W klasycznym podejściu Atomic komponenty powinny być możliwie „czyste”:

### Dozwolone w komponentach UI

- lokalny stan związany z prezentacją,
- walidacja formatu danych wejściowych,
- animacje i przejścia,
- emitowanie zdarzeń do rodzica,
- renderowanie zależne od propsów.

### Niedozwolone w komponentach UI

- bezpośrednie wywołania API,
- twardo zakodowane endpointy,
- logika domenowa i autoryzacyjna,
- mutacje store'a zależne od reguł biznesowych.

Logikę biznesową warto trzymać w:

- store'ach,
- composables,
- serwisach.

## Rozszerzenie podejścia: warstwy z logiką domenową

W praktyce często potrzebujesz poziomów, które łączą czyste UI z logiką aplikacji.  
Dobrym kierunkiem jest wyraźne oddzielenie takich modułów, np.:

- **Templates** - reużywalne szablony (karty, formularze, modale),
- **Sections** - sekcje stron z logiką układu i danych,
- **Pages** - pełne widoki z API, store i regułami biznesowymi.

Dzięki temu komponenty niższego poziomu pozostają wielokrotnego użytku.

## Przykładowa hierarchia

W bardziej rozbudowanych projektach można dodać jeszcze warstwę pomocniczą:

```html
Bosons     -> typy, helpery, stałe (bez renderowania)
Atoms      -> podstawowe komponenty UI
Molecules  -> małe zestawy atomów
Organisms  -> złożone bloki interfejsu
Templates  -> reużywalne szablony
Sections   -> sekcje stron z logiką
Pages      -> pełne strony i integracja domenowa
```

## Bosons - niewidoczny fundament

To warstwa, która nie renderuje UI, ale buduje fundament pod komponenty:

- interfejsy i typy TypeScript,
- funkcje pomocnicze,
- stałe współdzielone między modułami.

Przykłady:

- `types/interfaces.ts`
- `utils/formatDate.ts`
- `constants/breakpoints.ts`

## Atoms - małe i przewidywalne

Atom powinien robić jedną rzecz dobrze.  
Może obsługiwać kliknięcie, fokus i lokalny stan, ale nie powinien znać logiki domenowej aplikacji.

To dobra baza dla:

- przycisków,
- pól formularza,
- ikon,
- prostych etykiet i badge'y.

## Molecules - małe kompozycje

Molekuły łączą kilka atomów w jedną, prostą funkcję UI.  
Przykładowo: `FloatLabel`, `Anchor`, `Tile`.

Tutaj dopuszczalna jest:

- koordynacja stanu atomów potomnych,
- prosta walidacja formatu,
- lekkie wartości obliczane.

## Organisms - większe sekcje, nadal prezentacyjne

Organizmy to większe bloki UI (np. tabela, menu, dialog), ale nadal bez logiki domenowej.

Dozwolone:

- renderowanie danych z propsów,
- lokalne sortowanie i filtrowanie przekazanych danych,
- stany otwarcia/zamknięcia,
- emitowanie interakcji użytkownika.

Niedozwolone:

- bezpośrednie połączenie z API,
- twarde zależności od store'a.

## Dlaczego to działa w skalowaniu

Atomic Design pomaga utrzymać porządek, bo:

1. **Buduje spójność** - reużywasz tych samych elementów w wielu miejscach.
2. **Ułatwia utrzymanie** - zmiany propagują się przez wspólne komponenty.
3. **Wspiera refaktoryzację** - warstwy mają jasne granice odpowiedzialności.
4. **Usprawnia pracę zespołu** - szybciej wiadomo, gdzie dodać kod i czego nie łamać.

## Dobre praktyki

1. Trzymaj komponenty UI przewidywalne i wolne od logiki biznesowej.
2. Stosuj zasadę: **propsy w dół, zdarzenia w górę**.
3. Dbaj o **single responsibility** na każdym poziomie.
4. Typuj kontrakty komponentów przez TypeScript.
5. Rozdzielaj warstwę UI i domenową już od początku projektu.

## Podsumowanie

Atomic Design nie jest sztywnym „frameworkiem”, tylko sprawdzonym modelem organizacji UI.  
Największą wartość daje wtedy, gdy konsekwentnie oddzielasz prezentację od logiki biznesowej i budujesz komponenty warstwowo.

Jeśli tworzysz aplikację, która ma rosnąć miesiącami lub latami, taki podział bardzo szybko zaczyna się zwracać.
