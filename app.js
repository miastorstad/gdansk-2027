(function () {
  "use strict";

  var D = window.INNHOLD;
  var KARTSTIL = "https://tiles.openfreemap.org/styles/positron";
  var KARTSTIL_NATT = "https://tiles.openfreemap.org/styles/dark";
  var redusert = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function $(sel, rot) { return (rot || document).querySelector(sel); }
  function kartlenke(q) {
    return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(q);
  }
  // Gårute i Google Maps: fra hotellet, via stoppene (maks 9 mellomstopp), til siste stopp.
  function rutelenke(stopp) {
    var mellom = stopp.slice(0, -1).map(encodeURIComponent).join("%7C");
    return "https://www.google.com/maps/dir/?api=1&travelmode=walking" +
      "&origin=" + encodeURIComponent(D.hotell.kart) +
      "&destination=" + encodeURIComponent(stopp[stopp.length - 1]) +
      (mellom ? "&waypoints=" + mellom : "");
  }
  function lenkeKnapp(q, tekst, liten) {
    return '<a class="knapp' + (liten ? " liten" : "") + '" href="' + kartlenke(q) +
      '" target="_blank" rel="noopener">📍 ' + (tekst || "Åpne i Google Maps") + "</a>";
  }

  /* ---------- Tekstinnhold ---------- */
  $("#intro-for").textContent = "Til " + (D.introTil || D.mottakere);
  $("#intro-fra").textContent = "God jul fra " + D.fra;
  $("#slutt-tittel").innerHTML = "God tur, <em>" + D.mottakere + "</em>!";
  $("#slutt-klem").textContent = "Klem fra " + D.fra;

  function faktaSeksjon(id, data) {
    var html = '<p class="seksjon-etikett">' + data.etikett + "</p><h2>" + data.tittel + "</h2>";
    html += '<div class="kort"><ul class="faktaliste">';
    data.punkter.forEach(function (p) {
      html += '<li><span class="ikon" aria-hidden="true">' + p.ikon + "</span><div><strong>" +
        p.tittel + "</strong>" + p.tekst + "</div></li>";
    });
    html += "</ul></div>";
    $(id).innerHTML = html;
  }
  faktaSeksjon("#reiseinfo-ut", D.reiseinfoUt);
  faktaSeksjon("#ankomst", D.ankomst);
  faktaSeksjon("#reiseinfo-hjem", D.reiseinfoHjem);

  // Hotell
  (function () {
    var h = D.hotell;
    var html = '<p class="seksjon-etikett">Hotellet</p><h2>' + h.navn + "</h2>" +
      '<p class="ingress">' + h.beskrivelse + "</p>" +
      '<p><span class="merkelapp">' + h.rom + '</span><span class="merkelapp">' + h.frokost + "</span></p>" +
      "<p>" + h.romtekst + "</p>" +
      '<div class="bildeknapper">' + h.bilder.map(function (b) {
        return '<a class="knapp liten" href="' + b.url + '" target="_blank" rel="noopener">📷 ' + b.tekst + "</a>";
      }).join("") + '</div>' +
      '<div class="hotellkart" id="hotellkart" role="img" aria-label="Kart som viser hotellet"></div>' +
      '<p class="meta">' + h.adresse + "</p>" + lenkeKnapp(h.kart) +
      '<div class="kort" style="margin-top:18px"><h3>♨ Spa: ' + h.spa.navn + "</h3><p>" + h.spa.tekst + "</p>" +
      '<p class="kilde">Kilder: ' + h.spa.kilder.map(function (k) {
        return '<a href="' + k.url + '" target="_blank" rel="noopener">' + k.tekst + "</a>";
      }).join(" · ") + "</p></div>";
    $("#hotell").innerHTML = html;
  })();

  // Dag for dag
  (function () {
    var html = '<p class="seksjon-etikett">Dag for dag</p><h2>Forslag til helgen</h2>' +
      '<p class="ingress">Bare forslag – gjør akkurat det dere har lyst til.</p>';
    D.dager.forEach(function (d) {
      html += '<div class="dag"><p class="meta">' + d.dato.toUpperCase() + "</p><h3>" + d.tittel +
        "</h3><ul>" + d.punkter.map(function (p) { return "<li>" + p + "</li>"; }).join("") + "</ul>" +
        (d.stopp || d.ekstra ? '<div class="bildeknapper">' +
          (d.stopp ? '<a class="knapp liten" href="' + rutelenke(d.stopp) + '" target="_blank" rel="noopener">🗺️ Dagens rute i Google Maps</a>' : "") +
          (d.ekstra || []).map(function (e) { return lenkeKnapp(e.kart, e.tekst, true); }).join("") +
          "</div>" : "") +
        "</div>";
    });
    $("#dager").innerHTML = html;
  })();

  // Mat
  (function () {
    var html = '<p class="seksjon-etikett">Mat og drikke</p><h2>Matforslag</h2>' +
      '<p class="ingress">' + D.mat.ingress + "</p>";
    D.mat.steder.forEach(function (s) {
      html += '<div class="kort' + (s.fremhevet ? " fremhevet" : "") + '">' +
        (s.fremhevet ? '<span class="merkelapp rust">Mias favoritt</span>' : "") +
        "<h3>" + s.navn + '</h3><p class="meta">' + s.type + " · " + s.pris +
        (s.gange ? " · " + s.gange : "") + "</p><p>" + s.tekst + "</p>" +
        '<p class="meta">' + s.adresse + "</p>" +
        (s.booking ? '<a class="knapp" href="' + s.booking + '" target="_blank" rel="noopener">🍽 Bestill bord</a><br>' : "") +
        (s.telefon ? '<a class="knapp liten" href="tel:' + s.telefon.replace(/\s/g, "") + '">☎ Ring ' + s.telefon + "</a> " : "") +
        lenkeKnapp(s.kart, "Kart", true) +
        (s.nettside ? ' <a class="knapp liten" href="' + s.nettside + '" target="_blank" rel="noopener">🌐 ' + (s.nettsidetekst || "Nettside") + "</a>" : "") +
        "</div>";
    });
    $("#mat").innerHTML = html;
  })();

  // Strikk
  (function () {
    if (!D.strikk.butikker.length) return;
    var html = '<p class="seksjon-etikett">Strikk</p><h2>Garn i Gdańsk</h2><p class="ingress">' + D.strikk.ingress + "</p>";
    D.strikk.butikker.forEach(function (b) {
      html += '<div class="kort"><h3>🧶 ' + b.navn + '</h3><p class="meta">' + b.adresse +
        (b.gange ? " · " + b.gange : "") + "</p><p>" + b.tekst + "</p>" +
        (b.apent ? '<p class="meta">Åpent: ' + b.apent + "</p>" : "") +
        lenkeKnapp(b.kart, "Kart", true) +
        (b.nettside ? ' <a class="knapp liten" href="' + b.nettside + '" target="_blank" rel="noopener">🌐 Nettside</a>' : "") +
        "</div>";
    });
    $("#strikk").innerHTML = html;
  })();

  // Skjer
  (function () {
    var s = D.skjer;
    if (!s.ingress && !s.ting.length) return;
    var html = '<p class="seksjon-etikett">12.–15. mars</p><h2>Skjer i Gdańsk</h2><p class="ingress">' + s.ingress + "</p>";
    s.ting.forEach(function (t) {
      html += '<div class="kort"><h3>' + t.tittel + "</h3><p>" + t.tekst + "</p>" +
        (t.url ? '<a class="knapp liten" href="' + t.url + '" target="_blank" rel="noopener">' + (t.lenketekst || "Les mer") + "</a>" : "") +
        "</div>";
    });
    $("#skjer").innerHTML = html;
  })();

  /* ---------- Kart ---------- */
  if (!window.maplibregl || !window.turf) {
    console.warn("Kartbibliotek kunne ikke lastes.");
    return;
  }

  // Gi bakgrunnskartet en varm, retro tone.
  function retroTone(map) {
    map.getStyle().layers.forEach(function (l) {
      try {
        if (l.type === "background") map.setPaintProperty(l.id, "background-color", "#f1e7d2");
        else if (l.type === "fill" && /water/.test(l.id)) map.setPaintProperty(l.id, "fill-color", "#a9c4cc");
        else if (l.type === "line" && /water/.test(l.id)) map.setPaintProperty(l.id, "line-color", "#a9c4cc");
        else if (l.type === "fill" && /(landcover|park|wood|grass)/.test(l.id)) map.setPaintProperty(l.id, "fill-color", "#e3dcc0");
      } catch (e) { /* noen lag tåler ikke endring – greit */ }
    });
  }

  // Mørk marineblå natt-tone for hjemreisen.
  function nattTone(map) {
    map.getStyle().layers.forEach(function (l) {
      try {
        if (l.type === "background") map.setPaintProperty(l.id, "background-color", "#18243b");
        else if (l.type === "fill" && /water/.test(l.id)) map.setPaintProperty(l.id, "fill-color", "#0b1426");
        else if (l.type === "line" && /water/.test(l.id)) map.setPaintProperty(l.id, "line-color", "#0b1426");
      } catch (e) { /* greit */ }
    });
  }

  function tilMin(t) { var p = t.split(":"); return +p[0] * 60 + +p[1]; }
  function tilTid(m) {
    m = Math.round(m);
    return String(Math.floor(m / 60) % 24).padStart(2, "0") + ":" + String(m % 60).padStart(2, "0");
  }

  var flyreiser = [];

  function lagFlyreise(seksjon, reise, natt) {
    var a = D.flyplasser[reise.fra], b = D.flyplasser[reise.til];
    var rute = turf.greatCircle([a.lon, a.lat], [b.lon, b.lat], { npoints: 120 });
    var lengde = turf.length(rute);
    var sticky = $(".sticky", seksjon);

    $(".fly-dato", seksjon).textContent = reise.dato;
    $(".fra-kode", seksjon).textContent = reise.fra;
    $(".til-kode", seksjon).textContent = reise.til;
    $(".fra-tid", seksjon).textContent = a.navn + " " + reise.avgang;
    $(".til-tid", seksjon).textContent = b.navn + " " + reise.ankomst;

    var klokke = $(".klokke", seksjon), km = $(".km", seksjon), fyll = $(".fremdrift-fyll", seksjon);
    var t0 = tilMin(reise.avgang), t1 = tilMin(reise.ankomst);

    var map = new maplibregl.Map({
      container: $(".kart", seksjon),
      style: natt ? KARTSTIL_NATT : KARTSTIL,
      interactive: false,
      attributionControl: { compact: true },
      bounds: turf.bbox(rute),
      fitBoundsOptions: { padding: polstring() },
      fadeDuration: 0
    });

    var el = document.createElement("div");
    el.className = "fly-markør";
    el.innerHTML = '<img src="img/fly.svg" alt="">';
    var markør = new maplibregl.Marker({ element: el, rotationAlignment: "map", pitchAlignment: "map" })
      .setLngLat([a.lon, a.lat]).addTo(map);

    [a, b].forEach(function (f) {
      var e = document.createElement("div");
      e.className = "by-etikett";
      e.textContent = f.navn;
      new maplibregl.Marker({ element: e, anchor: "left" }).setLngLat([f.lon, f.lat]).addTo(map);
    });

    var rutefarge = natt ? "#e9a23b" : "#b5452f";
    var klar = false, sist = -1;

    map.on("load", function () {
      if (natt) nattTone(map); else retroTone(map);
      map.addSource("hele", { type: "geojson", data: rute });
      map.addSource("tegnet", { type: "geojson", data: turf.lineString([rute.geometry.coordinates[0], rute.geometry.coordinates[0]]) });
      map.addSource("punkter", { type: "geojson", data: turf.featureCollection([
        turf.point([a.lon, a.lat], { navn: a.navn }), turf.point([b.lon, b.lat], { navn: b.navn })
      ]) });
      map.addLayer({ id: "hele", type: "line", source: "hele",
        paint: { "line-color": rutefarge, "line-width": 2, "line-opacity": .45, "line-dasharray": [2, 2] } });
      map.addLayer({ id: "tegnet", type: "line", source: "tegnet",
        layout: { "line-cap": "round" },
        paint: { "line-color": rutefarge, "line-width": 4 } });
      map.addLayer({ id: "punkter", type: "circle", source: "punkter",
        paint: { "circle-radius": 7, "circle-color": natt ? "#e9a23b" : "#1d2f4f", "circle-stroke-width": 3, "circle-stroke-color": natt ? "#0f1a2e" : "#f3ead8" } });
      klar = true;
      sist = -1;
      oppdater();
    });

    function polstring() {
      var h = window.innerHeight;
      return { top: Math.min(130, h * .17), bottom: Math.min(240, h * .3), left: 60, right: 60 };
    }

    function fremdrift() {
      if (redusert) return 1;
      var r = seksjon.getBoundingClientRect();
      var total = seksjon.offsetHeight - sticky.offsetHeight;
      if (total <= 0) return 1;
      var raa = -r.top / total;
      // litt «venting» på bakken i starten og slutten
      var p = (raa - 0.05) / 0.85;
      return Math.max(0, Math.min(1, p));
    }

    function oppdater() {
      var p = fremdrift();
      if (Math.abs(p - sist) < 0.0005) return;
      sist = p;
      var d = Math.max(0.001, lengde * p);
      var pos = turf.along(rute, d).geometry.coordinates;
      var foran = turf.along(rute, Math.min(lengde, d + 5)).geometry.coordinates;
      var bak = turf.along(rute, Math.max(0, d - 5)).geometry.coordinates;
      var retning = d + 5 <= lengde ? turf.bearing(pos, foran) : turf.bearing(bak, pos);
      markør.setLngLat(pos).setRotation(retning);
      if (klar) map.getSource("tegnet").setData(turf.lineSliceAlong(rute, 0, d));
      klokke.textContent = p === 0 ? reise.avgang : tilTid(t0 + (t1 - t0) * p);
      km.textContent = Math.round(lengde * p) + " / " + Math.round(lengde) + " km";
      fyll.style.width = (p * 100).toFixed(1) + "%";
    }

    if (redusert) seksjon.classList.add("redusert");

    flyreiser.push({
      oppdater: oppdater,
      resize: function () { map.resize(); map.fitBounds(turf.bbox(rute), { padding: polstring(), duration: 0 }); sist = -1; oppdater(); }
    });
    oppdater();
  }

  lagFlyreise($("#utreise"), D.utreise, false);
  lagFlyreise($("#hjemreise"), D.hjemreise, true);

  var ventende = false;
  function påScroll() {
    if (ventende) return;
    ventende = true;
    requestAnimationFrame(function () {
      ventende = false;
      flyreiser.forEach(function (f) { f.oppdater(); });
    });
  }
  window.addEventListener("scroll", påScroll, { passive: true });
  var resizeTimer;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () { flyreiser.forEach(function (f) { f.resize(); }); }, 150);
  });

  // Lite hotellkart
  (function () {
    var h = D.hotell;
    var map = new maplibregl.Map({
      container: "hotellkart",
      style: KARTSTIL,
      center: [h.lon, h.lat],
      zoom: 14,
      interactive: false,
      attributionControl: { compact: true }
    });
    map.on("load", function () { retroTone(map); });
    var pin = document.createElement("div");
    pin.className = "hotell-pin";
    pin.innerHTML = '<svg viewBox="0 0 34 44" width="34" height="44" aria-hidden="true"><path d="M17 1C8.2 1 1 8 1 16.7 1 28.5 17 43 17 43s16-14.5 16-26.3C33 8 25.8 1 17 1z" fill="#b5452f" stroke="#f3ead8" stroke-width="2"/><circle cx="17" cy="16.5" r="6" fill="#f3ead8"/></svg>';
    new maplibregl.Marker({ element: pin, anchor: "bottom" }).setLngLat([h.lon, h.lat]).addTo(map);
  })();
})();
