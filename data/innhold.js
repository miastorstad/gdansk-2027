// Alt innhold på siden ligger her – endre tekst, tider og steder i denne fila.
// Kartlenker lages automatisk fra «kart»-feltet (kun stedsnavn + adresse).

window.INNHOLD = {
  mottakere: "Heidi og Kjetil",
  introTil: "mamma og pappa",   // vises øverst på billetten
  fra: "Mia, Selma, Linda, Torkel, Mats, Krister og Jeanette",

  flyplasser: {
    TOS: { navn: "Tromsø", lat: 69.683, lon: 18.919 },
    GDN: { navn: "Gdańsk", lat: 54.378, lon: 18.466 }
  },

  utreise: {
    fra: "TOS", til: "GDN",
    dato: "Fredag 12. mars 2027",
    avgang: "13:50", ankomst: "16:40"
  },

  hjemreise: {
    fra: "GDN", til: "TOS",
    dato: "Mandag 15. mars 2027",
    avgang: "05:30", ankomst: "08:25"
  },

  reiseinfoUt: {
    etikett: "Utreise · fredag 12. mars",
    tittel: "Wizz Air fra Tromsø",
    punkter: [
      { ikon: "✈", tittel: "Avgang 13:50 – landing 16:40", tekst: "Direktefly Tromsø → Gdańsk, ca. 2 t 50 min." },
      { ikon: "🧳", tittel: "Én koffert", tekst: "Dere har 1 innsjekket koffert på 20 kg som dere deler (ikke én hver). Pakk smart!" },
      { ikon: "👜", tittel: "Håndbagasje: liten veske hver", tekst: "Gratis liten veske som skal under setet foran, maks 40 × 30 × 20 cm." },
      { ikon: "📱", tittel: "Sjekk inn på forhånd", tekst: "Wizz Air har innsjekking i appen eller på nett før avreise – gjør det i god tid, så slipper dere kø og gebyr." }
    ]
  },

  ankomst: {
    etikett: "Ankomst",
    tittel: "Velkommen til Gdańsk",
    punkter: [
      { ikon: "🚕", tittel: "Fra flyplassen til hotellet", tekst: "Fra Gdańsk lufthavn (Lech Wałęsa) tar taxi, Bolt eller Uber ca. 25–30 minutter til hotellet og koster ca. 60–90 PLN (ca. 145–215 kr) for bilen. I rushtiden kan Bolt/Uber bli dyrere. Billigst er tog (PKM) til Gdańsk Wrzeszcz med bytte til SKM-tog mot sentrum: ca. 8,50 PLN (ca. 20 kr) per person." },
      { ikon: "💳", tittel: "Zloty (PLN)", tekst: "Valutaen heter zloty. Kort fungerer nesten overalt, så dere trenger lite kontanter." },
      { ikon: "🧣", tittel: "Kjølig marsvær", tekst: "Midt i mars er det gjerne 0–8 °C. Ta med varme klær og gode sko – det blir mye gåing på brostein." }
    ]
  },

  hotell: {
    navn: "Radisson Hotel & Apartments Gdańsk",
    adresse: "Chmielna 10-25, Gdańsk",
    lat: 54.3489, lon: 18.6576,
    kart: "Radisson Hotel Gdańsk Chmielna 10-25",
    beskrivelse: "Hotellet ligger på Spichlerzy-øya (Granary Island) ved elva Motława – bare noen minutters gange til gamlebyen.",
    rom: "Cosy Small Room",
    romtekst: "Lite, koselig dobbeltrom på ca. 16 m² med dobbeltseng, regndusj og kaffe/te på rommet.",
    frokost: "Frokost inkludert",
    bilder: [
      { tekst: "Se hotellet", url: "https://www.radissonhotels.com/en-us/hotels/radisson-gdansk" },
      { tekst: "Se rommet", url: "https://www.radissonhotels.com/en-us/hotels/radisson-gdansk/rooms" },
      { tekst: "Se spaet", url: "https://www.radissonhotels.com/en-us/hotels/radisson-gdansk/spa" }
    ],
    spa: {
      navn: "Prana Spa Premium",
      tekst: "Basseng, boblebad, saltgrotte og badstuer. Spaet er ikke inkludert for Cosy-rom, men koster 90 PLN (ca. 215 kr) for 1,5 timer. Åpent ca. kl. 10–21. Massasje og andre behandlinger koster ekstra.",
      kilder: [
        { tekst: "Radisson spa", url: "https://www.radissonhotels.com/en-us/hotels/radisson-gdansk/spa" },
        { tekst: "Prana Spa prisliste", url: "https://rhs.pranaspapremium.pl/en/price-list-wellness" }
      ]
    }
  },

  dager: [
    {
      dato: "Fredag 12. mars",
      tittel: "Ankomstkveld",
      punkter: [
        "Sjekk inn på hotellet og pust ut.",
        "Kveldstur langs Motława og Andersenbrygga (Długie Pobrzeże) – fint opplyst om kvelden.",
        "Middag nær hotellet, for eksempel Tygle (se mat-tipsene)."
      ]
    },
    {
      dato: "Lørdag 13. mars",
      tittel: "Gamlebyen og havna",
      punkter: [
        "Długi Targ / Langgata med Neptunfontenen og Artushof.",
        "Mariakirken – gå opp i tårnet for utsikt over hele byen (ca. 20 zł, stenger i dårlig vær).",
        "Mariacka-gata med små ravbutikker.",
        "Middelalderkrana Krantor og Andersenbrygga.",
        "Markedshallen Hala Targowa ved Katarinakirken – nyåpnet i 2026 med mathall.",
        "Garnbutikk for Heidi: Motkomania er åpen lørdag 10–15 (se Strikk)."
      ]
    },
    {
      dato: "Søndag 14. mars",
      tittel: "Historie og sjø",
      punkter: [
        "Andre verdenskrigsmuseet – stort og sterkt. Søndag åpent 10–18 (stengt mandager).",
        "Alternativ: Det europeiske solidaritetssenteret og verftsområdet, Westerplatte, eller en halvdag i Sopot med den lange trebrygga (SKM-tog ca. 20 min).",
        "Tidlig middag og tidlig i seng – avreise natt til mandag."
      ]
    }
  ],

  mat: {
    ingress: "Noen gode steder å spise og drikke – alt i gangavstand fra hotellet.",
    steder: [
      {
        navn: "Tygle",
        type: "Polsk tradisjonsmat",
        pris: "€€",
        tekst: "Anbefalt av Michelin-guiden og av Mia og Mats. Ligger rett ved hotellet. Bestill bord på forhånd!",
        adresse: "Chmielna 10",
        kart: "Tygle Chmielna 10 Gdańsk",
        nettside: "https://tyglegdanskie.pl/en/tygle-gdansk/",
        booking: "https://widget.thefork.com/en/6f857ee1-77a7-4333-a30d-dba3dc7a0723?step=date",
        fremhevet: true,
        kilde: "https://guide.michelin.com/en/pomerania/gdansk_2403599/restaurant/tygle"
      },
      {
        navn: "Brovarnia",
        type: "Ølbar med eget bryggeri",
        pris: "€€",
        gange: "ca. 5 min",
        tekst: "Bryggeripub i et kornmagasin fra 1600-tallet, rett over elva. Pilsen deres har vunnet gull i Lyon.",
        adresse: "Szafarnia 9 (Hotel Gdańsk)",
        kart: "Brovarnia Szafarnia 9 Gdańsk"
        , nettside: "https://brovarnia.pl/"
      },
      {
        navn: "Pierogarnia Stary Młyn",
        type: "Pierogi",
        pris: "€",
        gange: "ca. 12 min",
        tekst: "Rimelige, ovnsbakte pierogi like ved Mariakirken – perfekt lunsj.",
        adresse: "Świętego Ducha 64",
        kart: "Pierogarnia Stary Młyn Świętego Ducha 64 Gdańsk"
        , nettside: "https://www.pierogarnie.com/"
      },
      {
        navn: "Drukarnia",
        type: "Kafé",
        pris: "€",
        gange: "ca. 10 min",
        tekst: "Koselig kafé i et gammelt trykkeri i Mariacka-gata – god kaffe og kaker.",
        adresse: "Mariacka 36",
        kart: "Drukarnia Mariacka 36 Gdańsk"
        , nettside: "https://www.facebook.com/drukarniacafe/", nettsidetekst: "Facebook"
      },
      {
        navn: "Wine Bar Literacka",
        type: "Vinbar",
        pris: "€€",
        gange: "ca. 10 min",
        tekst: "Over 40 viner på glass i den vakreste gata i byen. Lurt å bestille bord.",
        adresse: "Mariacka 50/52",
        kart: "Wine Bar Literacka Mariacka Gdańsk"
        , nettside: "https://zjedz.my/literacka-restaurant-wine-bar"
      },
      {
        navn: "Zafishowani",
        type: "Fisk og sjømat",
        pris: "€€–€€€",
        gange: "ca. 10 min",
        tekst: "Fisk og sjømat ved elva, inngang fra Andersenbrygga ved Krantor. Litt dyrere enn de andre – en fin «unne seg»-middag.",
        adresse: "Tokarska 6",
        kart: "Zafishowani Tokarska 6 Gdańsk"
        , nettside: "https://zafishowani.pl/"
      }
    ]
  },

  strikk: {
    ingress: "Til Heidi: begge butikkene har stengt søndag, så lørdag formiddag er garndagen!",
    butikker: [
      {
        navn: "Motkomania",
        adresse: "Młyńska 9/11/c, gamlebyen (Stare Miasto)",
        gange: "ca. 20 min å gå",
        tekst: "Liten butikk med kvalitetsgarn fra blant annet Filcolana, Isager, Malabrigo og Holst – for den som vil kjenne på godt garn. Ligger i nærheten av markedshallen Hala Targowa, så de to passer fint sammen.",
        apent: "lørdag 10–15",
        kart: "Motkomania Młyńska 9/11 Gdańsk",
        nettside: "https://motkomania.pl/"
      },
      {
        navn: "Pasmanteria Pasja – Zaspa",
        adresse: "Pilotów 3, Zaspa (i Dom Handlowy «Paulina»)",
        gange: "ca. 25 min med trikk/taxi",
        tekst: "Stor hobby- og garnbutikk med alt til strikking, hekling og søm – garn fra blant annet Drops, Schachenmayr og Red Heart til hyggelige priser.",
        apent: "lørdag 9–13",
        kart: "Pasmanteria Pasja Pilotów 3 Gdańsk",
        nettside: "https://pasmanteriapasja.pl/sklepy-stacjonarne"
      }
    ]
  },

  // «Skjer i Gdańsk»: tom = seksjonen vises ikke. Fyll inn hvis noe spesielt dukker opp.
  skjer: {
    ingress: "",
    ting: []
  },

  reiseinfoHjem: {
    etikett: "Hjemreise · mandag 15. mars",
    tittel: "Tidlig opp!",
    punkter: [
      { ikon: "✈", tittel: "Avgang 05:30 – landing Tromsø 08:25", tekst: "Wizz Air direkte hjem." },
      { ikon: "🚕", tittel: "Bestill taxi kvelden før", tekst: "Dra fra hotellet ca. kl. 03:30." },
      { ikon: "🥐", tittel: "Frokosten rekkes ikke", tekst: "Kjøp noe å spise på flyplassen." }
    ]
  }
};
