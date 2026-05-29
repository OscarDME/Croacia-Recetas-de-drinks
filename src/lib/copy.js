// ─────────────────────────────────────────────────────────────────────────────
// COPY.JS — Izvor SVEG vidljivog teksta za landing stranicu.
// Doc §7: Bez hardkodiranog teksta u komponentama. Ako je na ekranu, tu je.
// ─────────────────────────────────────────────────────────────────────────────

export const copy = {
  // ── SEO / METADATA (Layout.astro čita ovo) ──────────────────────────────────
  metadata: {
    lang: 'hr',
    title: '150 recepata za premium koktele kod kuće',
    description:
      'Recepti za koktele spremne za tulum — jednostavni sastojci, brza priprema. Zadivi ekipu, uštedi na skupim barovima i postani zvijezda večeri. Uključuje ekskluzivne bonuse.',
    canonical: 'https://150receitascopao.netlify.app',
    ogImage: '/og-cover.jpg',
    ogType: 'website',
    siteName: 'SVIJET KOKTELA',
  },

  // ── 1. TIMER STICKY ZAGLAVLJE ────────────────────────────────────────────────
  timerBar: {
    icon: '⏰',
    label: 'Ponuda istječe za:',
    initialMinutes: 9,
    initialSeconds: 57,
  },

  // ── 2. HERO ───────────────────────────────────────────────────────────────
  hero: {
    tag: '🍋 Ekskluzivna ponuda',
    titleHighlight: '150 recepata za vrhunske koktele',
    titleConnector: 'za tvoj',
    titleHighlightGreen: 'čisti užitak',
    titleEnd: 'Čak i ako si apsolutni početnik',
    deliveryLabel: 'Dobivaš trenutni pristup preko',
    deliveryChannels: [
      { label: 'WhatsApp', kind: 'whatsapp' },
      { label: 'Email', kind: 'email' },
    ],
    videoAlt: 'Predstavljanje paketa 150 recepata za kućne koktele',
    ctaLabel: '✅ ŽELIM SVOJE RECEPTE ODMAH',
    ctaSub: '🔒 100% sigurna kupnja • Trenutni pristup',
  },

  // ── 3. PREDNOSTI ─────────────────────────────────────────────────────────
  benefits: {
    intro:
      'Recepti stvoreni za maksimalan užitak — jednostavni sastojci, brza priprema,',
    introStrong: 'nevjerojatan okus i izgled s kojim ćeš oboriti s nogu svakog gosta!',
    items: [
      'Pripremati svaki koktel bez ikakvog prethodnog iskustva',
      'Stvarati čaroliju bez profesionalne opreme ili skupe kuhinje',
      'Uživati u provjerenim receptima s lako dostupnim sastojcima',
      'Biti glavna zvijezda svakog kućnog tuluma, druženja na vikendici ili s ekipom',
    ],
    ctaLabel: '🍹 ŽELIM SVOJE RECEPTE ODMAH',
  },

  // ── 4. KARUSEL S RECEPTIMA ────────────────────────────────────────────────
  carousel: {
    title: '🍹 Dio recepata u kojima ćeš',
    titleHighlight: 'uživati s ekipom!',
    slides: [
      { caption: 'Slatki poljubac', alt: 'Koktel Slatki poljubac' },
      {
        caption: 'Španjolsko vino s marakujom',
        alt: 'Koktel Španjolsko vino s marakujom',
      },
      { caption: 'Kremasti MaracuBeats', alt: 'Koktel Kremasti MaracuBeats' },
      { caption: 'Koktel s Halls bombonima', alt: 'Koktel s Halls bombonima' },
      { caption: 'Ljetni povjetarac', alt: 'Koktel Ljetni povjetarac' },
      {
        caption: 'Caipirinha s marakujom i kavom',
        alt: 'Koktel Caipirinha s marakujom i kavom',
      },
    ],
    prevLabel: 'Prethodni slide',
    nextLabel: 'Sljedeći slide',
    dotLabel: 'Na slide',
  },

  // ── 5. BONUSI ──────────────────────────────────────────────────────────────
  bonuses: {
    title: '🎁 I naravno, tu su i',
    titleHighlight: 'BONUSI!',
    items: [
      {
        tag: 'Bonus 1',
        title: '50 recepata za alkoholne shootere i punčeve',
        description: 'Savršena party cuga koju ćeš smiksati u trenu i podijeliti s društvom.',
        alt: '50 recepata za alkoholne shootere i punčeve',
      },
      {
        tag: 'Bonus 2',
        title: 'Pametan popis za kupovinu — kako uštedjeti lovu',
        description:
          'Saznaj točno koje sastojke trebaš kupiti za top koktele, a da ne bankrotiraš po skupim barovima.',
        alt: 'Popis za kupovinu i kalkulator',
      },
      {
        tag: 'Bonus 3',
        title: '✅ Vodič: Kako organizirati savršenu koktel večer',
        description: 'Gotove ideje i koraci kako stvoriti nezaboravno iskustvo i ostaviti goste bez teksta.',
        alt: 'Priručnik za kućni tulum',
      },
      {
        tag: 'Bonus 4',
        title: 'Video lekcija: Kako ukrašavati i posluživati kao profić',
        description:
          'Nauči tajne vrhunske prezentacije koja obično piće pretvara u remek-djelo s 5 zvjezdica.',
        alt: 'Video lekcija za dekoraciju koktela',
      },
    ],
  },

  // ── 6. CIJENE ──────────────────────────────────────────────────────────────
  pricing: {
    sectionId: 'cijene',
    title: 'Odaberi kako želiš započeti već danas:',
    complete: {
      badge: '⭐ Najtraženije',
      title: 'Premium Paket: 150+ recepata za koktele',
      descriptionLead: '150+ recepata za brutalne kućne koktele + svi',
      descriptionStrong: 'ekskluzivni bonusi,',
      descriptionTail: 'kako bi postao najbolji barmen u ekipi.',
      mockupAlt: 'Mockup Premium Paketa sa 150 recepata',
      includesLabel: '🎁 Uključuje sve bonuse:',
      items: [
        '150+ recepata za premium koktele',
        'Popis jeftinih alternativa za skupa pića',
        'Vodič za pametnu kupovinu sastojaka',
        'Priručnik za savršen kućni tulum',
        'Video lekcija za profesionalno ukrašavanje',
      ],
      strikePrice: 'Od 29.90 €',
      price: '8.90 €',
      priceNote: 'trenutni pristup',
      ctaLabel: '🛒 ŽELIM PREMIUM PAKET',
      footer: '✅ Trenutni pristup · Email + WhatsApp · 14 dana garancije',
    },
  },

  // ── 7. GARANCIJA ───────────────────────────────────────────────────────────
  guarantee: {
    icon: '🛡️',
    title: '14 dana bezuvjetne garancije',
    description:
      'Ako iz bilo kojeg razloga ne budeš apsolutno oduševljen, vraćamo ti novac do zadnjeg centa. Nema glupih pitanja, nema natezanja.',
  },

  // ── 8. ČPP (Često postavljana pitanja) ────────────────────────────────────────────────
  faq: {
    title: 'Često postavljana',
    titleHighlight: 'pitanja:',
    items: [
      {
        q: 'Trebam li imati iskustva da bih ih napravio?',
        a: 'Apsolutno ne! Recepti su objašnjeni toliko jednostavno da ih može smiksati baš svatko, čak i ako nikad u životu nisi napravio koktel.',
      },
      {
        q: 'Trebaju li mi skupi shakeri i profesionalna oprema?',
        a: 'Ma kakvi. Sve možeš napraviti doma s običnim priborom koji već imaš u kuhinji.',
      },
      {
        q: 'Za kakve su prigode ovi kokteli?',
        a: 'Za doslovno sve! Od opuštanja nakon teškog radnog dana, preko romantične večere, do ludog kućnog tuluma ili vikenda s ekipom.',
      },
      {
        q: 'Jesu li sastojci skupi?',
        a: 'Ne. Uz naš pametan popis za kupovinu naučit ćeš kako dobiti premium okus s pristupačnim proizvodima iz tvog kvartovskog supermarketa.',
      },
      {
        q: 'Kako ću dobiti pristup nakon kupnje?',
        a: 'Pristup je trenutan! Čim uplata prođe, sve ti stiže direktno na mail i WhatsApp.',
      },
      {
        q: 'Postoji li garancija ako mi se ne svidi?',
        a: 'Naravno! Imaš puna 14 dana bezuvjetne garancije. Ako nisi zadovoljan, vraćamo ti 100% love.',
      },
    ],
  },

  // ── 9. HITNOST ──────────────────────────────────────────────────────────
  urgency: {
    text: '⏰ Ne odgađaj — vikend se bliži, a s njim i još jedna dosadna večer. Promijeni to odmah!',
  },

  // ── 10. FINALNI CTA ─────────────────────────────────────────────────────────
  finalCta: {
    ctaLabel: '🍹 ŽELIM PRISTUP ZA SVIH 150 RECEPATA ODMAH',
    subText: '🔒 Trenutni pristup • 14 dana garancije • Sigurno plaćanje',
  },

  // ── 11. SIGURNOST (bedževi) ────────────────────────────────────────────────
  security: {
    items: [
      { icon: '🔒', label: 'SSL Zaštita' },
      { icon: '💳', label: 'Sigurno plaćanje' },
      { icon: '📲', label: 'Trenutni pristup' },
    ],
  },

  // ── 12. FOOTER ────────────────────────────────────────────────────────────
  footer: {
    text: '© 2026 · SVIJET KOKTELA · Sva prava pridržana',
  },

  // ── A11Y / pomoćni tekst ──
  a11y: {
    skipToContent: 'Preskoči na glavni sadržaj',
  },
};