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
    const outer = make("g", { class: "lily-petal", "data-i": i, tabindex: "0", role: "button" });
    const spun = make("g", { transform: "rotate(" + i * (360 / PETALS) + ")" });
    spun.appendChild(petalShape(i + 1, false));
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

  // Paper, not a pot: two sheets, creased, narrowing to the tie.
  function wrap() {
    const g = make("g", { class: "lily-wrap" });

    // the sheet behind, showing past the front one on both sides
    g.appendChild(make("path", {
      d: "M-132,172 L-96,196 L-54,174 L-8,200 L40,176 L88,198 L130,170 " +
         "L34,348 C12,358 -12,358 -34,348 Z",
      fill: "#5c1326", opacity: 0.92,
    }));

    // the sheet in front, its top edge folded into points
    g.appendChild(make("path", {
      d: "M-108,196 L-74,222 L-34,198 L8,224 L50,200 L92,220 L106,196 " +
         "L28,344 C10,352 -10,352 -28,344 Z",
      fill: "url(#lilyWrap)",
    }));

    // creases running down to the point
    [[-70, 224, -18, 340], [-24, 206, -7, 344], [22, 214, 8, 344], [68, 216, 19, 340]]
      .forEach(([x1, y1, x2, y2]) => {
        g.appendChild(make("path", {
          d: "M" + x1 + "," + y1 + " L" + x2 + "," + y2,
          stroke: "#e892a6", "stroke-width": 1.5, opacity: 0.26, fill: "none",
        }));
      });

    // a highlight along the folded edge
    g.appendChild(make("path", {
      d: "M-108,196 L-74,222 L-34,198 L8,224 L50,200 L92,220 L106,196",
      fill: "none", stroke: "#f0aebd", "stroke-width": 2.6, opacity: 0.7,
    }));

    // ribbon, with tails
    g.appendChild(make("path", {
      d: "M-8,278 C-28,312 -34,338 -22,356", fill: "none",
      stroke: "#e892a6", "stroke-width": 5, "stroke-linecap": "round", opacity: 0.9,
    }));
    g.appendChild(make("path", {
      d: "M8,278 C30,310 38,336 28,358", fill: "none",
      stroke: "#f0aebd", "stroke-width": 5, "stroke-linecap": "round", opacity: 0.9,
    }));
    g.appendChild(make("rect", { x: -42, y: 264, width: 84, height: 13, rx: 6.5, fill: "#e892a6" }));
    g.appendChild(make("path", {
      d: "M-8,271 C-30,254 -50,258 -52,271 C-50,285 -30,288 -8,272 Z", fill: "#f0aebd",
    }));
    g.appendChild(make("path", {
      d: "M8,271 C30,254 50,258 52,271 C50,285 30,288 8,272 Z", fill: "#f0aebd",
    }));
    g.appendChild(make("circle", { cx: 0, cy: 271, r: 6.5, fill: "#f6dbe2" }));
    return g;
  }

  function buildLily() {
    const svg = make("svg", {
      viewBox: "-250 -250 500 650",
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

    figure.appendChild(stems([
      [0, 40, 9], [-150, 78, 6.5], [146, 34, 6.5],
      [-186, 36, 3.4, 0.75], [182, 10, 3.4, 0.75],
      [-176, -18, 5], [168, -48, 5], [-58, -96, 4.4],
      [-30, 130, 5, 0.9], [38, 136, 5, 0.9],
    ]));

    // Mid: the flowers she doesn't pick, at four different heights.
    const extra = make("g", { class: "lily-extra" });
    extra.appendChild(bud(-176, -18, -32, 1.05));
    extra.appendChild(bud(168, -48, 28, 0.95));
    extra.appendChild(bud(-58, -96, -11, 0.78));
    extra.appendChild(sideLily(-150, 78, 0.6, -20, 0.8));
    extra.appendChild(sideLily(146, 34, 0.52, 22, 0.74));
    figure.appendChild(extra);

    figure.appendChild(wrap());

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

  /* ---------------------------------------------------------------- sound */
  let audioCtx = null;
  let muted = false;

  // A soft plucked note, synthesised rather than downloaded.
  function pluckSound() {
    if (muted) return;
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      if (!audioCtx) audioCtx = new AC();
      if (audioCtx.state === "suspended") audioCtx.resume();

      const now = audioCtx.currentTime;
      const notes = [523.25, 587.33, 659.25, 783.99, 880.0];
      const f = notes[Math.floor(Math.random() * notes.length)];

      const osc = audioCtx.createOscillator();
      osc.type = "triangle";
      osc.frequency.value = f;

      const gain = audioCtx.createGain();
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.14, now + 0.012);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.1);

      const soft = audioCtx.createBiquadFilter();
      soft.type = "lowpass";
      soft.frequency.value = 2400;

      osc.connect(soft).connect(gain).connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 1.2);
    } catch (e) {
      /* no sound is fine */
    }
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
    const cardEl = document.getElementById("lily-card");
    const cardTitle = document.getElementById("lily-card-title");
    const cardPhoto = document.getElementById("lily-card-photo");
    const cardImg = document.getElementById("lily-card-img");
    const cardMissing = document.getElementById("lily-card-missing");
    const cardCap = document.getElementById("lily-card-cap");
    const cardText = document.getElementById("lily-card-text");
    const cardClose = document.getElementById("lily-card-close");
    const finalEl = document.getElementById("lily-final");
    const muteBtn = document.getElementById("lily-mute");

    hintEl.textContent = LILY.hint || "";

    const { svg, petals } = buildLily();
    stage.appendChild(svg);

    const data = LILY.petals || [];
    const picked = new Set();

    function showCard(i) {
      const p = data[i];
      if (!p) return;

      cardTitle.textContent = p.title || "";
      cardText.textContent = p.text || "";
      cardCap.textContent = p.caption || "";

      if (p.photo) {
        cardPhoto.hidden = false;
        cardImg.hidden = false;
        cardMissing.hidden = true;
        cardImg.alt = p.caption || "";
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
      requestAnimationFrame(() => cardEl.classList.add("is-open"));
    }

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
      b.setAttribute("aria-label", "Read " + (data[i] && data[i].title ? data[i].title : "petal " + (i + 1)) + " again");
      b.style.setProperty("--spin", (i * 23) % 40 - 20 + "deg");
      b.addEventListener("click", () => showCard(i));
      trayEl.appendChild(b);
      trayEl.hidden = false;
    }

    function finish() {
      if (!LILY.final) return;
      document.getElementById("lily-final-heading").textContent = LILY.final.heading || "";
      document.getElementById("lily-final-text").textContent = LILY.final.text || "";
      document.getElementById("lily-final-sign").textContent = LILY.final.signoff || "";
      finalEl.hidden = false;
      requestAnimationFrame(() => finalEl.classList.add("is-in"));
    }

    function pick(i, node) {
      if (picked.has(i)) return;
      picked.add(i);

      node.classList.add("is-gone");
      node.setAttribute("tabindex", "-1");
      node.style.pointerEvents = "none";
      promptEl.classList.add("is-done");
      pluckSound();

      const land = () => {
        node.style.visibility = "hidden";
        addToTray(i);
        showCard(i);
        if (picked.size === PETALS) setTimeout(finish, 400);
      };

      if (reduce || typeof node.animate !== "function") {
        land();
        return;
      }

      // Falls, drifting side to side and turning over, like a real one.
      const drift = i % 2 ? -1 : 1;
      const anim = node.animate(
        [
          { transform: "translate(0px, 0px) rotate(0deg)", opacity: 1 },
          { transform: "translate(" + 26 * drift + "px, 130px) rotate(" + 58 * drift + "deg)", opacity: 1, offset: 0.35 },
          { transform: "translate(" + -34 * drift + "px, 320px) rotate(" + 150 * drift + "deg)", opacity: 0.8, offset: 0.7 },
          { transform: "translate(" + 14 * drift + "px, 540px) rotate(" + 236 * drift + "deg)", opacity: 0 },
        ],
        { duration: 1500, easing: "cubic-bezier(.33,.08,.5,1)", fill: "forwards" }
      );

      let landed = false;
      const once = () => {
        if (landed) return;
        landed = true;
        land();
      };
      anim.onfinish = once;
      // The card must open even if the animation never reports finishing.
      setTimeout(once, 1700);
    }

    petals.forEach((node, i) => {
      node.addEventListener("click", () => pick(i, node));
      node.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          pick(i, node);
        }
      });
    });

    muteBtn.addEventListener("click", () => {
      muted = !muted;
      muteBtn.classList.toggle("is-muted", muted);
      muteBtn.setAttribute("aria-label", muted ? "Unmute" : "Mute");
    });

    document.addEventListener("keydown", (e) => {
      if (!scene.classList.contains("is-active")) return;
      if (e.key === "Escape" && !cardEl.hidden) hideCard();
    });
  }

  window.initLily = init;
})();
