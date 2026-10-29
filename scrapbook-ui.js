/* ============================================================================
   The scrapbook: turns SCRAPBOOK (scrapbook.js) into pages, and flips them.

   Nothing in here needs editing to add a month -- it reads whatever is in
   scrapbook.js. See that file instead.
   ============================================================================ */
(function () {
  "use strict";

  const DOODLES = {
    heart: "M12 21s-7.5-4.7-9.6-9A5.3 5.3 0 0 1 12 6.6 5.3 5.3 0 0 1 21.6 12c-2.1 4.3-9.6 9-9.6 9z",
    star: "M12 2l2.6 6.5L21.5 9l-5 4.6 1.4 6.9L12 17l-5.9 3.5 1.4-6.9-5-4.6 6.9-.5z",
    lily: "M12 22c0-5 3-7 6-8-3-1-6-3-6-8 0 5-3 7-6 8 3 1 6 3 6 8z",
    coffee: "M4 8h11v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8zm11 1h2.5a2 2 0 0 1 0 4H15M3 21h14",
    book: "M4 5a2 2 0 0 1 2-2h5v17H6a2 2 0 0 0-2 2V5zm16 0a2 2 0 0 0-2-2h-5v17h5a2 2 0 0 1 2 2V5z",
    note: "M6 3h9l4 4v14H6zM15 3v4h4",
  };

  const STROKE_DOODLES = new Set(["coffee", "note"]);

  // Hand-stuck photos: a repeatable wobble instead of Math.random(), so a
  // photo doesn't jump to a new angle every time the page is turned.
  function wobble(seed, spread) {
    const n = Math.sin(seed * 12.9898) * 43758.5453;
    return ((n - Math.floor(n)) * 2 - 1) * spread;
  }

  function el(tag, cls, text) {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function doodle(name, cls) {
    const d = DOODLES[name];
    if (!d) return null;
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("class", cls || "sb-doodle");
    svg.setAttribute("aria-hidden", "true");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", d);
    if (STROKE_DOODLES.has(name)) {
      path.setAttribute("fill", "none");
      path.setAttribute("stroke", "currentColor");
      path.setAttribute("stroke-width", "1.8");
      path.setAttribute("stroke-linecap", "round");
    } else {
      path.setAttribute("fill", "currentColor");
    }
    svg.appendChild(path);
    return svg;
  }

  /* ---------------------------------------------------------------- pages */
  // One flat list of pages: month dividers, the spreads themselves, the
  // ending, the empty pages for next month, and the back cover.
  function buildPages(data) {
    const pages = [];

    (data.months || []).forEach((month, mi) => {
      pages.push({ kind: "divider", month, index: mi + 1 });
      (month.spreads || []).forEach((spread, si) => {
        pages.push({ kind: "spread", spread, month, seed: mi * 17 + si * 7 + 3 });
      });
    });

    if (data.ending) pages.push({ kind: "ending", ending: data.ending });

    const soon = data.comingSoon;
    if (soon && soon.count > 0) {
      for (let i = 0; i < soon.count; i++) pages.push({ kind: "soon", soon });
    }

    if (data.backCover) pages.push({ kind: "back", text: data.backCover });
    return pages;
  }

  function layoutFor(spread) {
    if (spread.layout) return spread.layout;
    const n = (spread.photos || []).length;
    if (n === 0) return "words";
    if (n === 1) return "solo";
    if (n === 2) return "pair";
    return "trio";
  }

  function photoNode(photo, seed, i, onOpen) {
    const fig = el("figure", "sb-photo");
    fig.style.setProperty("--tilt", wobble(seed + i * 3.3, 4) + "deg");

    const tape = el("span", "sb-tape");
    tape.style.setProperty("--tape-tilt", wobble(seed + i * 5.1, 9) + "deg");
    fig.appendChild(tape);

    const img = el("img");
    img.alt = photo.caption || "";
    img.loading = "lazy";
    img.decoding = "async";
    const missing = el("span", "sb-missing");
    missing.hidden = true;
    img.addEventListener("error", () => {
      img.hidden = true;
      missing.hidden = false;
      missing.textContent = "put " + photo.src + "\nin this folder";
    });
    img.src = photo.src;

    fig.appendChild(img);
    fig.appendChild(missing);

    if (photo.caption) fig.appendChild(el("figcaption", "sb-caption", photo.caption));

    fig.addEventListener("click", () => {
      if (!img.hidden) onOpen(photo);
    });
    return fig;
  }

  function renderPage(page, onOpenPhoto) {
    const node = el("div", "sb-page sb-page--" + page.kind);

    if (page.kind === "divider") {
      node.appendChild(el("p", "sb-divider-dates", page.month.dates || ""));
      node.appendChild(el("h2", "sb-divider-title", page.month.title || ""));
      const d = doodle(page.month.sticker || "lily", "sb-doodle sb-doodle--big");
      if (d) node.appendChild(d);
      return node;
    }

    if (page.kind === "ending") {
      node.appendChild(el("h2", "sb-end-heading", page.ending.heading || ""));
      if (page.ending.note) node.appendChild(el("p", "sb-end-note", page.ending.note));
      if (page.ending.signoff) node.appendChild(el("p", "sb-end-sign", page.ending.signoff));
      const d = doodle("heart", "sb-doodle sb-doodle--big");
      if (d) node.appendChild(d);
      return node;
    }

    if (page.kind === "soon") {
      node.appendChild(el("p", "sb-soon-label", page.soon.label || ""));
      node.appendChild(el("p", "sb-soon-note", page.soon.note || ""));
      return node;
    }

    if (page.kind === "back") {
      node.appendChild(el("p", "sb-back-text", page.text));
      return node;
    }

    // a content page
    const spread = page.spread;
    const layout = layoutFor(spread);
    node.classList.add("sb-layout--" + layout);

    if (spread.heading) node.appendChild(el("h3", "sb-heading", spread.heading));

    const photos = spread.photos || [];
    if (photos.length) {
      const wrap = el("div", "sb-photos");
      photos.forEach((p, i) => wrap.appendChild(photoNode(p, page.seed, i, onOpenPhoto)));
      node.appendChild(wrap);
    }

    if (spread.text) node.appendChild(el("p", "sb-text", spread.text));

    (spread.stickers || []).forEach((name, i) => {
      const d = doodle(name, "sb-doodle sb-doodle--stuck sb-doodle--" + (i + 1));
      if (d) node.appendChild(d);
    });

    return node;
  }

  /* ---------------------------------------------------------------- sound */
  // Synthesised rather than a file: a short filtered noise burst is what a
  // page turn sounds like, and it costs nothing to download.
  let audioCtx = null;
  let muted = false;

  function pageSound() {
    if (muted) return;
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      if (!audioCtx) audioCtx = new AC();
      if (audioCtx.state === "suspended") audioCtx.resume();

      const dur = 0.32;
      const rate = audioCtx.sampleRate;
      const buf = audioCtx.createBuffer(1, Math.floor(rate * dur), rate);
      const ch = buf.getChannelData(0);
      for (let i = 0; i < ch.length; i++) {
        const t = i / ch.length;
        // two little rushes of air, like the leaf passing
        const env = Math.pow(1 - t, 2.2) * (0.6 + 0.4 * Math.sin(t * 22));
        ch[i] = (Math.random() * 2 - 1) * env;
      }

      const src = audioCtx.createBufferSource();
      src.buffer = buf;

      const band = audioCtx.createBiquadFilter();
      band.type = "bandpass";
      band.frequency.value = 2100;
      band.Q.value = 0.7;

      const gain = audioCtx.createGain();
      gain.gain.value = 0.16;

      src.connect(band).connect(gain).connect(audioCtx.destination);
      src.start();
    } catch (e) {
      /* no sound is fine */
    }
  }

  /* ----------------------------------------------------------------- book */
  function init() {
    const scene = document.getElementById("scene-scrapbook");
    if (!scene || typeof SCRAPBOOK === "undefined") return;
    if (scene.dataset.ready === "1") return;
    scene.dataset.ready = "1";

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const coverEl = document.getElementById("sb-cover");
    const bookEl = document.getElementById("sb-book");
    const leftEl = document.getElementById("sb-left");
    const rightEl = document.getElementById("sb-right");
    const flipEl = document.getElementById("sb-flip");
    const flipFront = flipEl.querySelector(".sb-flip-front");
    const flipBack = flipEl.querySelector(".sb-flip-back");
    const counterEl = document.getElementById("sb-counter");
    const prevBtn = document.getElementById("sb-prev");
    const nextBtn = document.getElementById("sb-next");
    const muteBtn = document.getElementById("sb-mute");
    const box = document.getElementById("sb-lightbox");
    const boxImg = document.getElementById("sb-lightbox-img");
    const boxCap = document.getElementById("sb-lightbox-cap");

    document.getElementById("sb-cover-title").textContent = SCRAPBOOK.cover.title || "";
    document.getElementById("sb-cover-est").textContent = SCRAPBOOK.cover.est || "";

    const pages = buildPages(SCRAPBOOK);
    const cache = [];

    function openPhoto(photo) {
      boxImg.src = photo.src;
      boxCap.textContent = photo.caption || "";
      box.hidden = false;
    }
    function closePhoto() {
      box.hidden = true;
      boxImg.removeAttribute("src");
    }
    box.addEventListener("click", closePhoto);

    function pageNode(i) {
      if (i < 0 || i >= pages.length) return null;
      if (!cache[i]) cache[i] = renderPage(pages[i], openPhoto);
      return cache[i];
    }

    // Render the neighbours too, so a turn never waits on an image decode.
    function warm(i) {
      for (let k = i - 2; k <= i + 3; k++) pageNode(k);
    }

    function put(slot, i) {
      slot.textContent = "";
      const n = pageNode(i);
      if (n) slot.appendChild(n);
      slot.classList.toggle("is-blank", !n);
    }

    // Desktop reads two pages at a time, a phone reads one.
    const twoUp = () => window.matchMedia("(min-width: 900px)").matches;

    let cursor = 0; // index of the LEFT page in two-up, or the page in one-up
    let busy = false;

    function step() {
      return twoUp() ? 2 : 1;
    }

    function draw() {
      if (twoUp()) {
        if (cursor % 2 !== 0) cursor -= 1;
        put(leftEl, cursor);
        put(rightEl, cursor + 1);
        rightEl.hidden = false;
      } else {
        put(leftEl, cursor);
        rightEl.hidden = true;
      }
      warm(cursor);

      const total = pages.length;
      const shown = twoUp()
        ? Math.min(cursor + 2, total) + " / " + total
        : cursor + 1 + " / " + total;
      counterEl.textContent = shown;

      prevBtn.disabled = cursor <= 0;
      nextBtn.disabled = cursor + step() >= total;
    }

    function turn(dir) {
      if (busy) return;
      const next = cursor + dir * step();
      if (next < 0 || next >= pages.length) return;

      pageSound();

      if (reduce) {
        cursor = next;
        draw();
        return;
      }

      busy = true;

      // The leaf that lifts: going forward it's the right-hand page swinging
      // left; going back it's the left-hand page swinging right.
      const forward = dir > 0;
      const liftIndex = twoUp() ? (forward ? cursor + 1 : cursor) : cursor;
      const landIndex = twoUp() ? (forward ? next : next + 1) : next;

      flipFront.textContent = "";
      flipBack.textContent = "";
      const a = pageNode(liftIndex);
      const b = pageNode(landIndex);
      if (a) flipFront.appendChild(a.cloneNode(true));
      if (b) flipBack.appendChild(b.cloneNode(true));

      flipEl.classList.toggle("sb-flip--back", !forward);
      flipEl.hidden = false;

      // Reveal what is underneath before the leaf has moved off it.
      if (twoUp()) {
        if (forward) put(rightEl, next + 1);
        else put(leftEl, next);
      }

      requestAnimationFrame(() => {
        flipEl.classList.add("is-turning");
      });

      const done = () => {
        flipEl.classList.remove("is-turning", "sb-flip--back");
        flipEl.hidden = true;
        flipFront.textContent = "";
        flipBack.textContent = "";
        cursor = next;
        busy = false;
        draw();
      };

      flipEl.addEventListener("transitionend", done, { once: true });
      // The leaf must never get stuck mid-air if the transition is skipped.
      setTimeout(() => {
        if (busy) done();
      }, 900);
    }

    nextBtn.addEventListener("click", () => turn(1));
    prevBtn.addEventListener("click", () => turn(-1));

    muteBtn.addEventListener("click", () => {
      muted = !muted;
      muteBtn.classList.toggle("is-muted", muted);
      muteBtn.setAttribute("aria-label", muted ? "Unmute page turns" : "Mute page turns");
    });

    document.addEventListener("keydown", (e) => {
      if (!scene.classList.contains("is-active")) return;
      if (!box.hidden && e.key === "Escape") return closePhoto();
      if (e.key === "ArrowRight") turn(1);
      if (e.key === "ArrowLeft") turn(-1);
    });

    // Swipe, for her phone.
    let sx = 0, sy = 0, tracking = false;
    const stage = document.getElementById("sb-stage");
    stage.addEventListener("touchstart", (e) => {
      if (e.touches.length !== 1) return;
      sx = e.touches[0].clientX;
      sy = e.touches[0].clientY;
      tracking = true;
    }, { passive: true });
    stage.addEventListener("touchend", (e) => {
      if (!tracking) return;
      tracking = false;
      const t = e.changedTouches[0];
      const dx = t.clientX - sx;
      const dy = t.clientY - sy;
      // Ignore a scroll that happens to drift sideways.
      if (Math.abs(dx) < 45 || Math.abs(dx) < Math.abs(dy) * 1.4) return;
      turn(dx < 0 ? 1 : -1);
    }, { passive: true });

    let resizeTimer = null;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(draw, 160);
    });

    coverEl.addEventListener("click", () => {
      coverEl.classList.add("is-open");
      pageSound();
      setTimeout(() => {
        coverEl.hidden = true;
        bookEl.hidden = false;
        draw();
      }, reduce ? 0 : 900);
    });

    warm(0);
  }

  window.initScrapbook = init;
})();
