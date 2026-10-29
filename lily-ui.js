/* ============================================================================
   The lily: draws the flower, drops a petal when she picks one, and opens
   the card behind it. Content lives in lily.js -- edit that, not this.
   ============================================================================ */
(function () {
  "use strict";

  const NS = "http://www.w3.org/2000/svg";
  const PETALS = 6;

  // One tepal, pointing straight up from the flower's middle. Narrow at the
  // base, widest about two thirds along, recurving to a point -- a lily, not
  // a daisy.
  const PETAL_D =
    "M0,-4 C11,-20 24,-54 20,-94 C18,-115 9,-128 0,-136 " +
    "C-9,-128 -18,-115 -20,-94 C-24,-54 -11,-20 0,-4 Z";
  const VEIN_D = "M0,-10 C3,-44 4,-84 0,-126";

  const make = (tag, attrs) => {
    const n = document.createElementNS(NS, tag);
    for (const k in attrs) n.setAttribute(k, attrs[k]);
    return n;
  };

  function defs() {
    const d = make("defs");

    // deep at the throat, almost white at the tip
    const g = make("linearGradient", {
      id: "lilyPetal",
      gradientUnits: "userSpaceOnUse",
      x1: 0, y1: -4, x2: 0, y2: -136,
    });
    [["0%", "#b8455f"], ["26%", "#e28fa0"], ["62%", "#f7d3db"], ["100%", "#fff6f8"]]
      .forEach(([o, c]) => g.appendChild(make("stop", { offset: o, "stop-color": c })));
    d.appendChild(g);

    const throat = make("radialGradient", { id: "lilyThroat" });
    [["0%", "#7a1230"], ["55%", "#b8455f"], ["100%", "rgba(184,69,95,0)"]]
      .forEach(([o, c]) => throat.appendChild(make("stop", { offset: o, "stop-color": c })));
    d.appendChild(throat);

    const stem = make("linearGradient", { id: "lilyStem", x1: "0", y1: "0", x2: "1", y2: "0" });
    [["0%", "#4f7a46"], ["50%", "#6fa05f"], ["100%", "#3f6239"]]
      .forEach(([o, c]) => stem.appendChild(make("stop", { offset: o, "stop-color": c })));
    d.appendChild(stem);

    return d;
  }

  function speckles(seed) {
    const g = make("g", { class: "lily-speckles" });
    for (let i = 0; i < 9; i++) {
      // fixed pseudo-random, so the freckles don't dance between redraws
      const r = Math.sin((seed * 9 + i) * 12.9898) * 43758.5453;
      const f = r - Math.floor(r);
      const r2 = Math.sin((seed * 3 + i) * 78.233) * 43758.5453;
      const f2 = r2 - Math.floor(r2);
      g.appendChild(make("ellipse", {
        cx: (f - 0.5) * 20,
        cy: -16 - f2 * 52,
        rx: 1.9,
        ry: 2.9,
        fill: "#7a1230",
        opacity: 0.55,
      }));
    }
    return g;
  }

  function buildPetal(i) {
    // The rotation lives on an inner group so the outer one is free to be
    // animated: a petal has to fall DOWN the screen, whichever way it points.
    const outer = make("g", { class: "lily-petal", "data-i": i, tabindex: "0", role: "button" });
    const spun = make("g", { transform: "rotate(" + i * (360 / PETALS) + ")" });
    const shape = make("g", { class: "lily-petal-shape" });

    shape.appendChild(make("path", { d: PETAL_D, fill: "url(#lilyPetal)" }));
    shape.appendChild(make("path", {
      d: VEIN_D, fill: "none", stroke: "#d98fa2", "stroke-width": 1.4, opacity: 0.5,
    }));
    shape.appendChild(speckles(i + 1));
    shape.appendChild(make("path", { d: PETAL_D, class: "lily-shimmer", fill: "#fff" }));

    spun.appendChild(shape);
    outer.appendChild(spun);
    return outer;
  }

  function buildStamens() {
    const g = make("g", { class: "lily-stamens" });
    for (let i = 0; i < 6; i++) {
      const a = (i * 60 + 30) * (Math.PI / 180);
      const len = 46 + (i % 2) * 9;
      const tx = Math.cos(a - Math.PI / 2) * len;
      const ty = Math.sin(a - Math.PI / 2) * len;
      g.appendChild(make("path", {
        d: "M0,0 Q" + tx * 0.45 + "," + (ty * 0.45 - 10) + " " + tx + "," + ty,
        fill: "none", stroke: "#f2d7a8", "stroke-width": 2.1, "stroke-linecap": "round",
      }));
      const ang = (Math.atan2(ty, tx) * 180) / Math.PI;
      g.appendChild(make("rect", {
        x: -7, y: -2.6, width: 14, height: 5.2, rx: 2.6, fill: "#b5651f",
        transform: "translate(" + tx + "," + ty + ") rotate(" + ang + ")",
      }));
    }
    // the pistil, standing a little proud of the rest
    g.appendChild(make("path", {
      d: "M0,0 Q6,-30 3,-62", fill: "none", stroke: "#dff0cf",
      "stroke-width": 2.6, "stroke-linecap": "round",
    }));
    g.appendChild(make("circle", { cx: 3, cy: -62, r: 4.6, fill: "#c9e6a8" }));
    return g;
  }

  function buildStem() {
    const g = make("g", { class: "lily-stem" });
    g.appendChild(make("path", {
      d: "M0,30 C7,110 -5,180 2,258", fill: "none",
      stroke: "url(#lilyStem)", "stroke-width": 9, "stroke-linecap": "round",
    }));
    g.appendChild(make("path", {
      d: "M1,150 C-42,138 -72,158 -86,186 C-52,196 -16,184 1,162 Z", fill: "#4f7a46", opacity: 0.95,
    }));
    g.appendChild(make("path", {
      d: "M2,200 C40,190 70,208 84,234 C50,244 16,230 2,210 Z", fill: "#5c8a50", opacity: 0.95,
    }));
    return g;
  }

  function buildLily() {
    const svg = make("svg", {
      viewBox: "-150 -150 300 420",
      class: "lily-svg",
      role: "img",
      "aria-label": "A lily with six petals",
    });
    svg.appendChild(defs());

    const figure = make("g", { class: "lily-figure" });
    figure.appendChild(buildStem());

    const head = make("g", { class: "lily-head" });
    const petals = [];
    for (let i = 0; i < PETALS; i++) {
      const p = buildPetal(i);
      petals.push(p);
      head.appendChild(p);
    }
    head.appendChild(make("circle", { r: 34, fill: "url(#lilyThroat)", class: "lily-throat" }));
    head.appendChild(buildStamens());

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
      hintEl.classList.add("is-done");
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
