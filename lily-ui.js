/* ============================================================================
   The lily: draws the flower, drops a petal when she picks one, and opens
   the card behind it. Content lives in lily.js -- edit that, not this.
   ============================================================================ */
(function () {
  "use strict";

  const NS = "http://www.w3.org/2000/svg";
  const PETALS = 6;
  // One tepal. Broad and overlapping, the way a stargazer's are -- six narrow
  // ones spaced evenly read as a starfish, not a lily.
  const PETAL_D =
    "M0,-4 C14,-15 29,-33 33,-61 C37,-89 25,-115 9,-132 " +
    "C5,-136 -5,-136 -9,-132 C-25,-115 -37,-89 -33,-61 C-29,-33 -14,-15 0,-4 Z";
  const VEIN_D = "M0,-10 C4,-44 5,-86 1,-124";
  const RUFFLE_D = "M-24,-96 C-14,-108 14,-108 24,-96";

  const make = (tag, attrs) => {
    const n = document.createElementNS(NS, tag);
    for (const k in attrs) n.setAttribute(k, attrs[k]);
    return n;
  };

  function defs() {
    const d = make("defs");

    const g = make("linearGradient", {
      id: "lilyPetal",
      gradientUnits: "userSpaceOnUse",
      x1: 0, y1: -4, x2: 0, y2: -136,
    });
    [["0%", "#a8374f"], ["18%", "#d4718a"], ["46%", "#f0b9c6"], ["78%", "#fbe4ea"], ["100%", "#fffafb"]]
      .forEach(([o, c]) => g.appendChild(make("stop", { offset: o, "stop-color": c })));
    d.appendChild(g);

    const throat = make("radialGradient", { id: "lilyThroat" });
    [["0%", "#6d0f2b"], ["45%", "#a8374f"], ["100%", "rgba(168,55,79,0)"]]
      .forEach(([o, c]) => throat.appendChild(make("stop", { offset: o, "stop-color": c })));
    d.appendChild(throat);

    const stem = make("linearGradient", { id: "lilyStem", x1: "0", y1: "0", x2: "1", y2: "0" });
    [["0%", "#3f6239"], ["50%", "#6fa05f"], ["100%", "#355330"]]
      .forEach(([o, c]) => stem.appendChild(make("stop", { offset: o, "stop-color": c })));
    d.appendChild(stem);

    const leaf = make("linearGradient", { id: "lilyLeaf", x1: "0", y1: "0", x2: "1", y2: "1" });
    [["0%", "#5c8a50"], ["100%", "#33512e"]]
      .forEach(([o, c]) => leaf.appendChild(make("stop", { offset: o, "stop-color": c })));
    d.appendChild(leaf);

    const wrap = make("linearGradient", { id: "lilyWrap", x1: "0", y1: "0", x2: "1", y2: "0" });
    [["0%", "#7c1c34"], ["45%", "#a8374f"], ["100%", "#611427"]]
      .forEach(([o, c]) => wrap.appendChild(make("stop", { offset: o, "stop-color": c })));
    d.appendChild(wrap);

    return d;
  }

  function speckles(seed) {
    const g = make("g", { class: "lily-speckles" });
    for (let i = 0; i < 11; i++) {
      const r = Math.sin((seed * 9 + i) * 12.9898) * 43758.5453;
      const f = r - Math.floor(r);
      const r2 = Math.sin((seed * 3 + i) * 78.233) * 43758.5453;
      const f2 = r2 - Math.floor(r2);
      g.appendChild(make("ellipse", {
        cx: (f - 0.5) * 30,
        cy: -14 - f2 * 60,
        rx: 2.1,
        ry: 3.3,
        fill: "#6d0f2b",
        opacity: 0.5,
      }));
    }
    return g;
  }

  // The shape of one tepal, with or without the bits that make it tappable.
  function petalShape(seed, plain) {
    const shape = make("g", { class: "lily-petal-shape" });
    shape.appendChild(make("path", { d: PETAL_D, fill: "url(#lilyPetal)" }));
    shape.appendChild(make("path", {
      d: VEIN_D, fill: "none", stroke: "#c9607c", "stroke-width": 1.5, opacity: 0.4,
    }));
    shape.appendChild(make("path", {
      d: RUFFLE_D, fill: "none", stroke: "#fff", "stroke-width": 1.6, opacity: 0.3,
    }));
    shape.appendChild(speckles(seed));
    if (!plain) {
      shape.appendChild(make("path", { d: PETAL_D, class: "lily-shimmer", fill: "#fff" }));
      shape.appendChild(make("path", {
        d: PETAL_D, class: "lily-outline", fill: "none",
        stroke: "#fff6f8", "stroke-width": 2.6,
      }));
    }
    return shape;
  }

  function buildPetal(i) {
    // The rotation lives on an inner group so the outer one is free to be
    // animated: a petal has to fall DOWN the screen, whichever way it points.
    const rot = i * (360 / PETALS);
    const outer = make("g", { class: "lily-petal", "data-i": i, tabindex: "0", role: "button" });
    outer.setAttribute("aria-label", "Pick petal " + (i + 1));
    const spun = make("g", { transform: "rotate(" + rot + ")" });
    spun.appendChild(petalShape(i + 1, false));

    // The number rides out along the petal, then turns back the other way so
    // it reads upright whichever direction its petal happens to point.
    const badge = make("g", {
      class: "lily-number",
      transform: "translate(0,-88) rotate(" + -rot + ")",
    });
    const num = make("text", {
      x: 0, y: 7, "text-anchor": "middle", "font-size": 26, fill: "#a8374f",
    });
    num.textContent = String(i + 1);
    badge.appendChild(num);
    spun.appendChild(badge);

    outer.appendChild(spun);
    return outer;
  }

  function buildStamens() {
    const g = make("g", { class: "lily-stamens" });
    for (let i = 0; i < 6; i++) {
      const a = (i * 60 + 30) * (Math.PI / 180);
      const len = 50 + (i % 2) * 10;
      const tx = Math.cos(a - Math.PI / 2) * len;
      const ty = Math.sin(a - Math.PI / 2) * len;
      g.appendChild(make("path", {
        d: "M0,0 Q" + tx * 0.45 + "," + (ty * 0.45 - 11) + " " + tx + "," + ty,
        fill: "none", stroke: "#f2d7a8", "stroke-width": 2.2, "stroke-linecap": "round",
      }));
      const ang = (Math.atan2(ty, tx) * 180) / Math.PI;
      g.appendChild(make("rect", {
        x: -8, y: -2.9, width: 16, height: 5.8, rx: 2.9, fill: "#b5651f",
        transform: "translate(" + tx + "," + ty + ") rotate(" + ang + ")",
      }));
    }
    g.appendChild(make("path", {
      d: "M0,0 Q7,-32 4,-66", fill: "none", stroke: "#dff0cf",
      "stroke-width": 2.8, "stroke-linecap": "round",
    }));
    g.appendChild(make("circle", { cx: 4, cy: -66, r: 5, fill: "#c9e6a8" }));
    return g;
  }

  // The flowers behind the one she picks from. Same shape, smaller and dimmer,
  // and deliberately not tappable.
  function sideLily(x, y, scale, rot, opacity) {
    const g = make("g", {
      class: "lily-side",
      transform: "translate(" + x + "," + y + ") rotate(" + rot + ") scale(" + scale + ")",
      opacity: opacity,
    });
    for (let i = 0; i < PETALS; i++) {
      const spun = make("g", { transform: "rotate(" + (i * 60 + 22) + ")" });
      spun.appendChild(petalShape(i + 7, true));
      g.appendChild(spun);
    }
    g.appendChild(make("circle", { r: 30, fill: "url(#lilyThroat)" }));
    g.appendChild(buildStamens());
    return g;
  }

  function bud(x, y, rot, scale) {
    const g = make("g", {
      class: "lily-bud",
      transform: "translate(" + x + "," + y + ") rotate(" + rot + ") scale(" + scale + ")",
    });
    g.appendChild(make("path", {
      d: "M0,0 C-17,-16 -19,-52 0,-76 C19,-52 17,-16 0,0 Z", fill: "#e8aebc",
    }));
    g.appendChild(make("path", {
      d: "M0,0 C-9,-16 -10,-50 0,-74 C10,-50 9,-16 0,0 Z", fill: "#f6d6de", opacity: 0.75,
    }));
    g.appendChild(make("path", {
      d: "M0,2 C-11,-10 -12,-34 -2,-48", fill: "none", stroke: "#5c8a50",
      "stroke-width": 3.4, "stroke-linecap": "round", opacity: 0.9,
    }));
    return g;
  }
  function leaf(x, y, rot, scale, shade) {
    return make("path", {
      d: "M0,0 C36,-18 84,-12 112,16 C78,40 32,32 0,6 Z",
      fill: shade || "url(#lilyLeaf)",
      transform: "translate(" + x + "," + y + ") rotate(" + rot + ") scale(" + scale + ")",
    });
  }

  // Gypsophila: the little clouds of white that make a bunch look like a
  // bouquet rather than a few flowers standing next to each other.
  function sprig(x, y, rot, scale) {
    const g = make("g", {
      class: "lily-sprig",
      transform: "translate(" + x + "," + y + ") rotate(" + rot + ") scale(" + scale + ")",
    });
    g.appendChild(make("path", {
      d: "M0,0 C-4,-26 2,-52 0,-74", fill: "none",
      stroke: "#5c8a50", "stroke-width": 2, opacity: 0.8,
    }));
    const buds = [
      [0, -78, 5], [-13, -66, 4], [12, -62, 4.2], [-9, -46, 3.4],
      [11, -40, 3.2], [-17, -80, 3.4], [16, -82, 3.2], [2, -94, 3.6],
    ];
    buds.forEach(([bx, by, r], i) => {
      g.appendChild(make("path", {
        d: "M0,-" + (74 - i * 4) + " Q" + bx * 0.6 + "," + (by + 8) + " " + bx + "," + by,
        fill: "none", stroke: "#5c8a50", "stroke-width": 1.2, opacity: 0.6,
      }));
      g.appendChild(make("circle", { cx: bx, cy: by, r: r, fill: "#fdeef1", opacity: 0.92 }));
    });
    return g;
  }

  // Every stem runs down to the one point where the bunch is tied.
  const TIE_X = 0;
  const TIE_Y = 262;

  function stemTo(x, y, w, op) {
    return make("path", {
      d: "M" + x + "," + y + " C" + x * 0.86 + "," + (y + 80) + " " +
         (TIE_X + (x > 0 ? 18 : -18)) + "," + (TIE_Y - 70) + " " + TIE_X + "," + TIE_Y,
      fill: "none", stroke: "url(#lilyStem)", "stroke-width": w,
      "stroke-linecap": "round", opacity: op == null ? 1 : op,
    });
  }

  function stems(list) {
    const g = make("g", { class: "lily-stems" });
    list.forEach(([x, y, w, op]) => g.appendChild(stemTo(x, y, w, op)));
    return g;
  }

  function buildLily() {
    const svg = make("svg", {
      viewBox: "-250 -232 500 520",
      class: "lily-svg",
      role: "img",
      "aria-label": "A bouquet of lilies",
    });
    svg.appendChild(defs());

    const figure = make("g", { class: "lily-figure" });

    // Back: foliage fanning out, deliberately uneven.
    const greens = make("g", { class: "lily-greens" });
    [
      [-28, 120, 182, 1.25, "#33512e"], [26, 112, -8, 1.15, "#33512e"],
      [-34, 168, 206, 1.0, "#2c4728"], [30, 160, -26, 0.95, "#2c4728"],
      [-20, 80, 158, 0.85, "#3f6239"], [22, 64, 20, 0.8, "#3f6239"],
      [-14, 196, 224, 0.72, "#2c4728"], [18, 200, -44, 0.68, "#2c4728"],
    ].forEach(([x, y, r, s, c]) => greens.appendChild(leaf(x, y, r, s, c)));
    figure.appendChild(greens);

    // Filler, at seven different heights so nothing lines up.
    const fillers = make("g", { class: "lily-fillers" });
    [
      [-186, 36, -26, 0.95], [182, 10, 24, 0.9], [-120, -58, -14, 0.8],
      [126, -74, 15, 0.85], [-62, -128, -7, 0.7], [66, -140, 8, 0.72],
      [-210, 120, -34, 0.65], [206, 104, 32, 0.62],
    ].forEach(([x, y, r, s]) => fillers.appendChild(sprig(x, y, r, s)));
    figure.appendChild(fillers);

    // One stem per flower, bud and sprig. Six of the sprigs had none and were
    // hanging in mid-air with nothing holding them to the bunch.
    figure.appendChild(stems([
      [0, 40, 9], [-150, 78, 6.5], [146, 34, 6.5],
      [-176, -18, 5], [168, -48, 5], [-58, -96, 4.4],
      [-30, 130, 5, 0.9], [38, 136, 5, 0.9],
      [-186, 36, 3.2, 0.75], [182, 10, 3.2, 0.75],
      [-120, -58, 2.8, 0.7], [126, -74, 2.8, 0.7],
      [-62, -128, 2.6, 0.65], [66, -140, 2.6, 0.65],
      [-210, 120, 2.8, 0.7], [206, 104, 2.8, 0.7],
    ]));

    // Mid: the flowers she doesn't pick, at four different heights.
    const extra = make("g", { class: "lily-extra" });
    extra.appendChild(bud(-176, -18, -32, 1.05));
    extra.appendChild(bud(168, -48, 28, 0.95));
    extra.appendChild(bud(-58, -96, -11, 0.78));
    extra.appendChild(sideLily(-150, 78, 0.6, -20, 0.8));
    extra.appendChild(sideLily(146, 34, 0.52, 22, 0.74));
    figure.appendChild(extra);


    const head = make("g", { class: "lily-head" });
    const petals = [];
    for (let i = 0; i < PETALS; i++) {
      const p = buildPetal(i);
      petals.push(p);
      head.appendChild(p);
    }
    head.appendChild(make("circle", { r: 40, fill: "url(#lilyThroat)", class: "lily-throat" }));
    head.appendChild(buildStamens());
    head.setAttribute("transform", "translate(0,38)");

    figure.appendChild(head);
    svg.appendChild(figure);
    return { svg, petals };
  }

  /* ----------------------------------------------------------------- page */
  function init() {
    const scene = document.getElementById("scene-lily");
    if (!scene || typeof LILY === "undefined") return;
    if (scene.dataset.ready === "1") return;
    scene.dataset.ready = "1";

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const stage = document.getElementById("lily-stage");
    const hintEl = document.getElementById("lily-hint");
    const promptEl = document.getElementById("lily-prompt");
    const trayEl = document.getElementById("lily-tray");
    const trayWrap = document.getElementById("lily-tray-wrap");
    const resetBtn = document.getElementById("lily-reset");
    const cardEl = document.getElementById("lily-card");
    const cardTitle = document.getElementById("lily-card-title");
    const cardNum = document.getElementById("lily-card-num");
    const cardPhoto = document.getElementById("lily-card-photo");
    const cardImg = document.getElementById("lily-card-img");
    const cardMissing = document.getElementById("lily-card-missing");
    const cardText = document.getElementById("lily-card-text");
    const cardBody = document.getElementById("lily-card-body");
    const cardInner = document.querySelector(".lily-card-inner");
    const cardClose = document.getElementById("lily-card-close");

    hintEl.textContent = LILY.hint || "";

    const { svg, petals } = buildLily();
    stage.appendChild(svg);

    const data = LILY.petals || [];
    const picked = new Set();

    function showCard(i) {
      const p = data[i];
      if (!p) return;

      cardNum.textContent = String(i + 1);
      cardTitle.textContent = p.title || "";
      cardText.textContent = p.text || "";

      if (p.photo) {
        cardPhoto.hidden = false;
        cardImg.hidden = false;
        cardMissing.hidden = true;
        cardImg.alt = p.title || "";
        cardImg.onerror = () => {
          cardImg.hidden = true;
          cardMissing.hidden = false;
          cardMissing.textContent = "put " + p.photo + "\nin this folder";
        };
        cardImg.src = p.photo;
      } else {
        cardPhoto.hidden = true;
      }

      // a hand-stuck tilt that stays put for a given petal
      const r = Math.sin((i + 1) * 12.9898) * 43758.5453;
      cardPhoto.style.setProperty("--tilt", ((r - Math.floor(r)) * 2 - 1) * 3.4 + "deg");

      cardEl.hidden = false;
      requestAnimationFrame(() => {
        cardEl.classList.add("is-open");
        sizeToContent();
      });
    }

    // The writing sits between insets of 21.5% top and bottom, so the card
    // has to be tall enough that the middle 57% of it holds the content.
    const INSET_BAND = 0.57;

    function sizeToContent() {
      const w = cardInner.offsetWidth;

      // Measure the writing at its natural height: with no bottom to pin it
      // the box is only as tall as what is in it.
      cardBody.style.bottom = "auto";
      cardBody.style.height = "auto";
      cardBody.style.overflowY = "visible";
      const contentH = cardBody.offsetHeight;
      cardBody.style.bottom = "";
      cardBody.style.height = "";
      cardBody.style.overflowY = "";

      // The outline stretches with the card, so letting the card grow without
      // limit turned the petal into an egg. It may grow for a longer note,
      // but only so far -- past that the writing scrolls inside the shape.
      const natural = contentH / INSET_BAND;
      const cap = Math.min(w * 1.25, window.innerHeight * 0.84);
      const h = Math.max(w / 1.5, Math.min(natural, cap));
      cardInner.style.height = Math.ceil(h) + "px";
    }

    // A photo that hasn't loaded has no height yet, so measure again when it has.
    cardImg.addEventListener("load", () => {
      if (!cardEl.hidden) sizeToContent();
    });
    window.addEventListener("resize", () => {
      if (!cardEl.hidden) sizeToContent();
    });

    function hideCard() {
      cardEl.classList.remove("is-open");
      setTimeout(() => {
        cardEl.hidden = true;
        cardImg.removeAttribute("src");
      }, reduce ? 0 : 280);
    }

    cardClose.addEventListener("click", hideCard);
    cardEl.addEventListener("click", (e) => {
      if (e.target === cardEl) hideCard();
    });

    // Plucked petals gather underneath, so she can read one again later.
    function addToTray(i) {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "lily-tray-petal";
      b.textContent = String(i + 1);
      b.setAttribute("aria-label", "Read " + (data[i] && data[i].title ? data[i].title : "petal " + (i + 1)) + " again");
      b.style.setProperty("--spin", (i * 23) % 40 - 20 + "deg");
      b.addEventListener("click", () => { if (cardEl.hidden) showCard(i); });
      trayEl.appendChild(b);
      trayWrap.hidden = false;
    }

    // Only one petal at a time. The tepals overlap heavily, so without this
    // the same spot on screen belongs to the next petal down the moment the
    // one above it is taken -- tapping repeatedly in one place stripped the
    // whole flower before she had read a word.
    let picking = false;
    const flights = [];

    function pick(i, node) {
      if (picked.has(i) || picking || !cardEl.hidden) return;
      picked.add(i);
      picking = true;

      node.classList.add("is-gone");
      node.setAttribute("tabindex", "-1");
      node.style.pointerEvents = "none";
      promptEl.classList.add("is-done");

      const land = () => {
        node.style.visibility = "hidden";
        addToTray(i);
      };

      const release = () => { picking = false; };

      if (reduce || typeof node.animate !== "function") {
        land();
        showCard(i);
        release();
        return;
      }

      // It comes off the flower, turns over once, then grows towards her --
      // it is being handed over to be read, not dropped on the floor.
      const drift = i % 2 ? -1 : 1;
      const anim = node.animate(
        [
          { transform: "translate(0px,0px) rotate(0deg) scale(1)", opacity: 1, offset: 0 },
          {
            transform: "translate(" + 16 * drift + "px,62px) rotate(" + 34 * drift + "deg) scale(1.12)",
            opacity: 1, offset: 0.3,
          },
          {
            transform: "translate(" + 6 * drift + "px,34px) rotate(" + 8 * drift + "deg) scale(2.1)",
            opacity: 1, offset: 0.62,
          },
          {
            transform: "translate(0px,6px) rotate(0deg) scale(3.6)",
            opacity: 0, offset: 1,
          },
        ],
        { duration: 1300, easing: "cubic-bezier(.34,.05,.3,1)", fill: "forwards" }
      );

      // The card takes over while the petal is still growing, so the two read
      // as one movement rather than two.
      setTimeout(() => showCard(i), 860);

      let landed = false;
      const once = () => {
        if (landed) return;
        landed = true;
        land();
        release();
      };
      flights.push(anim);
      anim.onfinish = once;
      // The card must open even if the animation never reports finishing.
      setTimeout(once, 1500);
    }

    function resetAll() {
      flights.forEach((a) => {
        try {
          a.cancel();
        } catch (e) {
          /* already gone */
        }
      });
      flights.length = 0;

      picked.clear();
      picking = false;

      petals.forEach((node) => {
        node.classList.remove("is-gone");
        node.style.visibility = "";
        node.style.pointerEvents = "";
        node.style.transform = "";
        node.setAttribute("tabindex", "0");
      });

      trayEl.textContent = "";
      trayWrap.hidden = true;
      promptEl.classList.remove("is-done");
    }

    resetBtn.addEventListener("click", () => {
      if (!cardEl.hidden) hideCard();
      resetAll();
    });

    petals.forEach((node, i) => {
      node.addEventListener("click", () => pick(i, node));
      node.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          pick(i, node);
        }
      });
    });

    document.addEventListener("keydown", (e) => {
      if (!scene.classList.contains("is-active")) return;
      if (e.key === "Escape" && !cardEl.hidden) hideCard();
    });
  }

  window.initLily = init;
})();
