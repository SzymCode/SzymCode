<template>
  <section id="offer" class="offers" aria-labelledby="offers-title">
    <div class="offers-inner">
      <header class="offers-header">
        <p class="offers-eyebrow rainbow-text-auto">Oferta</p>
        <h2 id="offers-title" class="offers-title">
          Plany mentoringu i wsparcia w IT
        </h2>
        <p class="offers-lead">
          Pomagam wejść w branżę i iść dalej: Laravel, Nuxt, React, TypeScript,
          portfolio, rozmowy i sensowna architektura - od jednej godziny po
          dłuższy program.
        </p>
      </header>

      <ul class="offers-grid">
        <li
          v-for="offer in primaryOffers"
          :key="offer.title"
          class="offers-grid-cell"
        >
          <CtaCard v-bind="offer" />
        </li>
      </ul>

      <ul class="offers-grid offers-grid-continued">
        <li
          v-for="offer in extendedOffers"
          :key="offer.title"
          class="offers-grid-cell"
        >
          <CtaCard v-bind="offer" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import CtaCard from '~/components/cta-card.vue'

const calendlyUrl = 'https://calendly.com/szymcode/it-mentoring-consultation'

const primaryOffers = [
  {
    title: 'Spotkanie zapoznawcze',
    subtitle: '30 minut online - sprawdzamy, czy mentoring ma sens',
    icon: 'mdi:calendar-month-outline',
    price: 'Bezpłatne',
    buttonText: 'Umów spotkanie',
    buttonHref: calendlyUrl,
    features: [
      '30 minut online za darmo - bez zobowiązań, żebyś od razu poczuł, czy taki mentoring ma dla Ciebie sens.',
      'Krótko mapujemy: skąd jesteś, dokąd chcesz dojść i co już realnie umiesz - zero oceniania, pełna szczerość.',
      'Sprawdzamy dopasowanie: Twój kierunek i mój sposób pracy muszą do siebie pasować, zanim cokolwiek kupisz.',
      'Laravel, Nuxt, React, TypeScript, PHP, SQL - mówimy o konkretnych ścieżkach, nie o pustych hasłach z ogłoszeń.',
      'Po rozmowie wiesz, czy idziemy w konsultację, mock interview, program rozwojowy (48 h) czy układ szyty na miarę.',
      'Ceny, terminy i zasady - wprost; termin możesz zmienić lub odwołać z wyprzedzeniem.',
      'Żadnej presji sprzedażowej: kolejne kroki zawsze należą do Ciebie.',
      'Staż, junior, mid, senior - każdy poziom jest OK; nie musisz niczego udowadniać przed wejściem na call.',
    ],
  },
  {
    title: 'Konsultacja 1h',
    subtitle: 'Jedna godzina na konkret: kod, projekt, kariera',
    icon: 'mdi:message-text-outline',
    price: '73,80 PLN netto',
    buttonText: 'Umów spotkanie',
    buttonHref: calendlyUrl,
    features: [
      '73,80 zł netto za rozpoczętą godzinę (+ VAT); formę rozliczenia ustalamy przed startem - wiesz, na czym stoisz.',
      'Jedna godzina na to, co teraz najbardziej blokuje: kod, repo, architektura albo decyzja zawodowa.',
      'Na wejściu ustalamy, czy 1 h wystarczy, czy warto zaplanować drugą - nie płacisz za „wypełniacz czasu”.',
      'Architektura modułów, API, front (Vue / Nuxt / React) i sensowna współpraca z backendem - jak w realnym produkcie.',
      'Testy, wydajność, czytelność, refaktor: tam, gdzie kod boli, a Ty chcesz iść dalej bez długu.',
      'Możemy przygotować Cię do rozmowy technicznej albo przejść PR tak, jakbym siedział w Twoim zespole.',
      'Porządek w nauce i w CV: co dalej po Laravelu, Nuxcie, TypeScript, SQL oraz jak opowiedzieć „co robiłem w projekcie”.',
      'Jeśli nie jestem w stanie realnie pomóc - nie płacisz; forma i zakres są pod Ciebie, nie pod cudzy szablon.',
    ],
  },
  {
    title: 'Mocked technical interview',
    subtitle: 'Symulacja rozmowy tech pod Twoje CV lub ofertę',
    icon: 'mdi:laptop-account',
    price: '221,40 PLN netto',
    buttonText: 'Umów spotkanie',
    buttonHref: calendlyUrl,
    features: [
      '221,40 zł netto (+ VAT), ok. 2 h: najpierw symulacja jak na żywo, potem zwięzły feedback - wiesz, co ćwiczyć dalej.',
      'Scenariusz dopasowujemy do Twojego procesu: 1:1, panel, nacisk na architekturę albo live coding.',
      'Gram role HR, deva i tech leada - pierwszy raz w takim układzie nie będzie u obcego rekrutera.',
      'Presja czasu, dopytywanie, przerywanie: uczysz się trzymać koncentracji, nie tylko wkuwać definicje.',
      'Wychodzimy od Twojego CV, stacku albo treści oferty - zero ogólnego „zróbmy coś z podręcznika”.',
      'W jednej sesji możesz mieć teorię, zadanie na żywo, dyskusję o kodzie, architekturę i komunikację.',
      'Na koniec dostajesz jasny obraz: mocne strony, luki i plan na kolejne rundy - nie tylko „poszło nieźle”.',
      'Poziom dobieramy uczciwie - bez „za łatwo” i bez straszenia; bazuję na pracy w produkcie i realnych procesach w IT.',
    ],
  },
] as const

const extendedOffers = [
  {
    title: 'CV mastering',
    subtitle: 'CV pod ATS i ludzkie „10 sekund” rekrutera',
    icon: 'mdi:file-document-edit-outline',
    price: '147,60 PLN netto',
    buttonText: 'Umów spotkanie',
    buttonHref: calendlyUrl,
    features: [
      'Patrzymy na CV oczami rekrutera i filtrem ATS - widzisz, co ginie, zanim wyślesz kolejne podanie.',
      'Wycinamy banały i antywzorce, przez które nawet dobry profil odpada w pierwszych sekundach.',
      'Słowa kluczowe pod Twój stack (Laravel, Vue, React, TS itd.) - widoczne dla maszyny i ludzi, bez keyword spamu.',
      'Układamy doświadczenie, projekty i skills tak, żeby pierwszy rzut oka mówił „to jest kandydat do rozmowy”.',
      'Format i czytelność: PDF i eksport z LinkedIn bez chaosu - rekruter nie musi zgadywać, co jest ważne.',
      'Po spotkaniu krótka iteracja w uzgodnionym terminie - dopinasz tekst w spokoju, ja pilnuję spójności.',
      'Jasny przekaz: kim jesteś zawodowo i czym się wyróżniasz - zamiast dziesięciu zdań, które nic nie mówią.',
      'To, co ustalimy, da się spójnie przenieść na LinkedIn i profile w portalach pracy - jeden wizerunek wszędzie.',
    ],
  },
  {
    title: 'Program rozwojowy',
    subtitle: 'Dłuższy program: od planu nauki po poziom „senior mindset”',
    icon: 'mdi:rocket-launch-outline',
    price: '2 952 PLN netto',
    buttonText: 'Umów spotkanie',
    buttonHref: calendlyUrl,
    features: [
      '48 godzin spotkań w stałym rytmie - koniec z odkładaniem nauki na „kiedyś”, gdy motywacja się rozsypuje.',
      'Plan i tematy pod Twój stack oraz oferty, na które naprawdę chcesz aplikować, nie pod teoretyczny ideał.',
      'Jeden wspólny projekt od pierwszych commitów po wersję do portfolio - coś, co obronisz przy pytaniach, nie tylko ładny README.',
      'Code review i nawyki jak w produkcie: czytelność, testy i refaktor, który nie generuje nowego długu.',
      'Rozmowy i ćwiczenia pod Twoje najsłabsze ogniwa - aż czujesz różnicę w głowie i w tym, jak mówisz o kodzie.',
      'Po sesjach zostają notatki, checklisty i mapy - wracasz do nich zamiast zgadywać, o czym było ostatnio.',
      'Każda godzina idzie w coś, co przybliża Cię do konkretnego celu zawodowego - mało lania wody, dużo ruchu do przodu.',
      'Na finisz wiesz, co robisz dalej samodzielnie; dobry mentoring się kończy wtedy, gdy jesteś gotowy lecieć bez opieki.',
    ],
  },
  {
    title: 'Własny plan',
    subtitle: 'Ty ustalasz tempo i zakres - ja trzymam jakość i kierunek',
    icon: 'mdi:target',
    price: 'Do ustalenia',
    buttonText: 'Dogadajmy się',
    buttonHref: calendlyUrl,
    features: [
      'Wychodzimy od stawki jak przy konsultacji (73,80 zł/h netto + VAT); resztę układamy po rozmowie - płacisz za to, czego faktycznie potrzebujesz.',
      'Ty ustalasz tempo: rzadkie, głębokie sesje albo krótsze i częstsze, gdy wolisz małe kroki.',
      'Łączymy mentoring, konsultacje i review w jednym elastycznym układzie - bez sztywnego „tylko taka forma”.',
      'Zwykle start po bezpłatnym spotkaniu zapoznawczym: wiemy, po co jesteśmy, zanim cokolwiek podpisujemy.',
      'Rozliczenia i odwołania - jasne zasady, bez tajnych haczyków w mailu piątym po fakcie.',
      'Tematy od Laravela i Nuxt po React, testy i narzędzia - w granicach zdrowego rozsądku, za to na poważnie.',
      'Umowa na miarę: żadnych pakietów, z których i tak skorzystałbyś tylko w połowie.',
      'Sprawdza się przy zmianie pracy, freelance albo nietypowym projekcie - elastyczność bez rezygnacji z jakości.',
    ],
  },
] as const
</script>

<style lang="scss">
@use '../styles/breakpoints' as *;

.offers {
  position: relative;
  z-index: 1;
  padding: 0;
  color: #fff;

  &-inner {
    width: min(1200px, calc(100% - 2rem));
    margin-inline: auto;

    @include bp-lg-up {
      width: min(1200px, calc(100% - 4rem));
    }
  }

  &-header {
    margin: 0 0 clamp(1.75rem, 4vw, 2.75rem);
    text-align: center;
    max-width: 46rem;
    margin-inline: auto;
  }

  &-eyebrow {
    margin: 0 0 0.65rem;
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }

  &-title {
    margin: 0 0 0.85rem;
    font-size: clamp(1.5rem, 4vw, 2.35rem);
    line-height: 1.12;
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  &-lead {
    margin: 0;
    font-size: clamp(0.95rem, 1.5vw, 1.05rem);
    line-height: 1.65;
    color: color-mix(in srgb, #fff 74%, transparent);
  }

  &-grid {
    display: grid;
    gap: clamp(1.15rem, 2.5vw, 1.5rem);
    grid-template-columns: 1fr;
    margin: 0 0 clamp(1.15rem, 2.5vw, 1.5rem);
    padding: 0;
    list-style: none;

    @include bp-md-up {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @include bp-lg-up {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    &-cell {
      margin: 0;
      display: flex;
      min-width: 0;
    }

    &-continued {
      margin-bottom: 0;
    }
  }
}
</style>
