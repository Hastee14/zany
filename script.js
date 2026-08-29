/* ============================================================================
   ✏️  EVERYTHING YOU EDIT IS IN THIS BLOCK. Nothing below it needs touching.

   FILES: drop photos / videos / your mp3 straight into this folder, next to
   index.html, and write the filenames below.

   EVERY SECTION IS OPTIONAL. Leave a list empty ( [] ) or a string empty ( "" )
   and that whole section disappears from the page automatically.
   ============================================================================ */
const CONFIG = {
  herName: "Zany Danny",

  /* ---------- The occasion, shown above the envelope ---------- */
  occasion: "one month",

  /* ---------- Typed before the question. One string = one line. ---------- */
  opening: [
    "One month today.",
    "You told me I never asked you properly.",
    "So. Properly:",
  ],

  /* ---------- The ask, now at the very end of the scroll ---------- */
  askKicker: "oh — and one more thing",
  askLead: "You said I never asked you properly.",
  question: "Will you be my girlfriend?",
  usPhoto: "us.jpg", // a photo of the two of you

  /* ---------- The moment she answers ---------- */
  yesTitle: "SHE SAID YES",
  yesSubtitle: "Properly asked. Properly answered.",
  readButton: "there's more ♡",

  /* ---------- Top of the page ---------- */
  heroKicker: "one month of us",
  pageTitle: "Happy one month, Zany",
  herPhoto: "her.jpg",
  herCaption: "my favourite person in the world",

  /* ---------- Your letter (one string = one paragraph) ---------- */
  letter: [
    "One month ago you said yes to me, and I've been quietly delighted about it every day since.",
    "You said I never asked you properly. You were right, and it bothered me more than I let on — so I spent a while building this instead of just saying it badly again.",
    "Write the real thing here. What changed for you this month. The small stuff you noticed. Why her, specifically.",
    "Here's to the first of many.",
  ],
  signoff: "— Your Name",

  /* ---------- Photos of her, each with a title and a few lines ---------- */
  galleryTitle: "you",
  gallery: [
    {
      src: "photo1.jpg",
      title: "She's got a smile that could light up the whole town",
      note: "I will always love your cutie smile, the one where you squint your eyes with the dimply things. its my favorite in the whole world",
    },
    {
      src: "kid.jpg",
      title: "the little Zany who's still in there",
      note: "The hat. The denim vest. The Hello Kitty jeans. Fully posing for the camera like she owns the place.\n\nAnd honestly? She's still in there. Same confidence, same face when you're pleased with yourself. I'd never want you to lose her.",
    },
    {
      src: "biceps.jpg",
      title: "my giant biceps baddie",
      note: "Maybe one day I'll get biceps like you 😔",
    },
  ],

  /* ---------- Videos of us. Two-up on a laptop, stacked on a phone. ---------- */
  videosTitle: "i want to keep making vlogs with you, for life",
  videos: [
    {
      src: "clip2.mp4",
      poster: "clip2-poster.jpg",
      title: "the first time I said I like you",
      note: "So crazy its caugh on camera crying emoji",
    },
    {
      src: "clip1.mp4",
      poster: "clip1-poster.jpg",
      title: "the cutitiest vlog",
      note: "I love this vlog so much",
    },
    {
      src: "clip3.mp4",
      poster: "clip3-poster.jpg",
      title: "the best random sidequest at shams",
      note: "bluds really pulled up to a desert to hang out",
    },
  ],

  /* ---------- Reasons ---------- */
  reasonsTitle: "one month, some reasons",
  reasons: [
    "You make ordinary days feel like something.",
    "You laugh at my worst jokes. Even the really bad ones.",
    "You're the first person I want to tell everything to.",
    "You're kinder than you give yourself credit for.",
  ],

  /* ---------- Live counter. Set startDate to the day you started. ---------- */
  counterTitle: "us, so far",
  startDate: "2026-07-29", // YYYY-MM-DD -- CHANGE THIS to your real date
  counterSince: "and counting ♡",

  /* ---------- What's next ---------- */
  futureTitle: "what's next",
  future: [
    "That trip we keep talking about.",
    "Lilies, properly, not just on a website.",
    "A hundred more ordinary Tuesdays.",
  ],

  /* ---------- The last thing she reads ---------- */
  closing: "One month down.\nForever to go.",

  /* ---------- Music: your mp3, in this folder ---------- */
  song: "song.mp3",
  volume: 0.4,
};

/* ============================================================================
   Elements
   ============================================================================ */
const envelopeScene = document.getElementById("scene-envelope");
const windowScene = document.getElementById("scene-window");
const letterPage = document.getElementById("scene-letterpage");
const letterWindow = document.getElementById("letter-window");

const typedText = document.getElementById("typed-text");
const askQuestion = document.getElementById("ask-question");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const openPageBtn = document.getElementById("open-page");

const song = document.getElementById("song");
const musicToggle = document.getElementById("music-toggle");

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const setText = (id, value) => {
  document.getElementById(id).textContent = value || "";
};

/* ============================================================================
   Copy from CONFIG
   ============================================================================ */
askQuestion.textContent = CONFIG.question;
setText("ask-kicker", CONFIG.askKicker);
setText("ask-lead", CONFIG.askLead);
setText("occasion-label", CONFIG.occasion);
setText("hero-kicker", CONFIG.heroKicker);
setText("yes-title", CONFIG.yesTitle);
setText("yes-subtitle", CONFIG.yesSubtitle);
setText("open-page", CONFIG.readButton);
setText("page-title", CONFIG.pageTitle);
setText("her-caption", CONFIG.herCaption);
setText("signoff", CONFIG.signoff);

const letterBody = document.getElementById("letter-body");
(CONFIG.letter || []).forEach((para) => {
  const p = document.createElement("p");
  p.textContent = para;
  letterBody.appendChild(p);
});

/* ============================================================================
   Photos — with a placeholder naming the file while it's still missing
   ============================================================================ */
function wirePhoto(img, missing, src) {
  const showMissing = () => {
    img.hidden = true;
    missing.hidden = false;
    missing.textContent = "put " + (src || "your photo") + "\nin this folder";
  };

  if (!src) {
    showMissing();
    return;
  }

  // The image must stay VISIBLE while it loads. Hiding it first deadlocks a
  // lazy-loaded image: hidden means no layout box, so the browser never counts
  // it as near the viewport, so it never loads, so `load` never fires and it
  // never gets unhidden. Show it, and only swap to the placeholder on error.
  img.hidden = false;
  missing.hidden = true;
  img.addEventListener("error", showMissing);
  img.src = src;
}

function loadPhoto(imgId, missingId, src) {
  const img = document.getElementById(imgId);
  const missing = document.getElementById(missingId);
  // Guard: if the markup for a photo slot isn't on the page, skip it quietly.
  // Without this, one stale id throws at the top level of this file and every
  // single thing below it -- sections, typewriter, buttons -- never runs.
  if (!img || !missing) return;
  wirePhoto(img, missing, src);
}

loadPhoto("us-photo", "us-missing", CONFIG.usPhoto);
loadPhoto("her-photo", "her-missing", CONFIG.herPhoto);

/* ============================================================================
   Page sections. Each one only appears if you actually filled it in.
   ============================================================================ */
function buildSection(secId, titleId, titleText, items, render) {
  const list = items || [];
  if (!list.length) return; // stays hidden

  setText(titleId, titleText);
  list.forEach(render);
  document.getElementById(secId).hidden = false;
}

// --- Gallery ---
const galleryGrid = document.getElementById("gallery-grid");

buildSection("sec-gallery", "gallery-title", CONFIG.galleryTitle, CONFIG.gallery, (item) => {
  const card = document.createElement("figure");
  card.className = "card-photo reveal";

  const img = document.createElement("img");
  img.alt = item.title || "";
  const missing = document.createElement("span");
  missing.className = "photo-missing";
  missing.hidden = true;

  card.appendChild(img);
  card.appendChild(missing);
  wirePhoto(img, missing, item.src);

  if (item.title) {
    const t = document.createElement("figcaption");
    t.className = "card-title";
    t.textContent = item.title;
    card.appendChild(t);
  }
  const note = item.note || item.caption;
  if (note) {
    const c = document.createElement("p");
    c.className = "card-note";
    c.textContent = note;
    card.appendChild(c);
  }

  galleryGrid.appendChild(card);
});

// --- Videos ---
const videosGrid = document.getElementById("videos-grid");

// Every clip on the page, so only one can ever be playing at a time.
const allVideos = [];
let fullscreenVideo = null;

buildSection("sec-videos", "videos-title", CONFIG.videosTitle, CONFIG.videos, (item) => {
  const card = document.createElement("figure");
  card.className = "card-photo card-video reveal";

  const video = document.createElement("video");
  video.controls = true;
  video.playsInline = true;
  video.preload = "none";
  video.src = item.src;
  if (item.poster) video.poster = item.poster;

  const missing = document.createElement("span");
  missing.className = "photo-missing";
  missing.hidden = true;
  video.addEventListener("error", () => {
    video.hidden = true;
    missing.hidden = false;
    missing.textContent = "put " + item.src + "\nin this folder";
  });

  allVideos.push(video);

  video.addEventListener("play", () => {
    duckSong();
    // Only one clip at a time -- stop whatever else was running.
    allVideos.forEach((other) => {
      if (other !== video && !other.paused) other.pause();
    });
  });

  video.addEventListener("pause", unduckSong);
  video.addEventListener("ended", unduckSong);

  // iOS Safari doesn't fire fullscreenchange; it has its own event.
  video.addEventListener("webkitendfullscreen", () => video.pause());

  card.appendChild(video);
  card.appendChild(missing);

  if (item.title) {
    const t = document.createElement("figcaption");
    t.className = "card-title";
    t.textContent = item.title;
    card.appendChild(t);
  }
  const vnote = item.note || item.caption;
  if (vnote) {
    const c = document.createElement("p");
    c.className = "card-note";
    c.textContent = vnote;
    card.appendChild(c);
  }

  videosGrid.appendChild(card);
});

// --- Reasons ---
const reasonsList = document.getElementById("reasons-list");

buildSection("sec-reasons", "reasons-title", CONFIG.reasonsTitle, CONFIG.reasons, (text) => {
  const li = document.createElement("li");
  li.className = "reveal";
  const span = document.createElement("span");
  span.textContent = text;
  li.appendChild(span);
  reasonsList.appendChild(li);
});

// --- What's next ---
const futureList = document.getElementById("future-list");

buildSection("sec-future", "future-title", CONFIG.futureTitle, CONFIG.future, (text) => {
  const li = document.createElement("li");
  li.className = "reveal";
  const span = document.createElement("span");
  span.textContent = text;
  li.appendChild(span);
  futureList.appendChild(li);
});

// --- Closing ---
// The closing line and the answer both stay hidden until she says yes.
if (CONFIG.closing) setText("closing-text", CONFIG.closing);
if (CONFIG.question) document.getElementById("sec-ask").hidden = false;

/* ============================================================================
   Live counter
   ============================================================================ */
const counterEl = document.getElementById("counter");
let counterTimer = null;

function startCounter() {
  if (!CONFIG.startDate) return;

  const start = new Date(CONFIG.startDate + "T00:00:00");
  if (isNaN(start.getTime())) {
    // Bad date in CONFIG — better to drop the section than show NaN
    console.warn("startDate isn't a valid YYYY-MM-DD date:", CONFIG.startDate);
    return;
  }

  setText("counter-title", CONFIG.counterTitle);
  setText("counter-since", CONFIG.counterSince);

  const units = [
    ["days", 86400000],
    ["hours", 3600000],
    ["minutes", 60000],
    ["seconds", 1000],
  ];

  const boxes = units.map(([label]) => {
    const box = document.createElement("div");
    box.className = "count-box";
    const num = document.createElement("span");
    num.className = "count-num";
    const lab = document.createElement("span");
    lab.className = "count-label";
    lab.textContent = label;
    box.appendChild(num);
    box.appendChild(lab);
    counterEl.appendChild(box);
    return num;
  });

  const tick = () => {
    let remaining = Math.max(0, Date.now() - start.getTime());
    units.forEach(([, ms], i) => {
      const value = Math.floor(remaining / ms);
      remaining -= value * ms;
      boxes[i].textContent = String(value);
    });
  };

  tick();
  counterTimer = setInterval(tick, 1000);
  document.getElementById("sec-counter").hidden = false;
}

startCounter();

/* ============================================================================
   Scroll reveal.
   The hidden start state is added by JS (via the js-reveal class), so if this
   ever fails the content just shows up normally instead of staying invisible.
   ============================================================================ */
function setupReveal() {
  const targets = document.querySelectorAll(".reveal");
  if (!targets.length) return;

  if (reduceMotion || typeof IntersectionObserver === "undefined") {
    targets.forEach((el) => el.classList.add("in"));
    return;
  }

  document.body.classList.add("js-reveal");

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.05 }
  );

  targets.forEach((el) => io.observe(el));

  // Safety net. Everything above is opacity:0 until the observer reveals it,
  // so if that never happens the whole letter silently stays blank.
  //
  // The test is "did anything actually become visible", NOT "did the observer
  // call back" -- it calls back for off-screen elements too, reporting
  // isIntersecting:false, which would disarm this net while the page is still
  // completely empty. Losing the fade is nothing; losing the letter is the
  // entire point of the page.
  setTimeout(() => {
    if (document.querySelector(".reveal.in")) return;
    io.disconnect();
    document.body.classList.remove("js-reveal");
  }, 1500);
}

/* ============================================================================
   A lily either side of each section heading
   ============================================================================ */
/* ============================================================================
   Floating hearts + confetti
   ============================================================================ */
const heartsCanvas = document.getElementById("hearts-canvas");
const confettiCanvas = document.getElementById("confetti-canvas");
const hCtx = heartsCanvas.getContext("2d");
const cCtx = confettiCanvas.getContext("2d");

let vw = 0;
let vh = 0;

function sizeCanvases() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  vw = window.innerWidth;
  vh = window.innerHeight;
  for (const cv of [heartsCanvas, confettiCanvas]) {
    cv.width = vw * dpr;
    cv.height = vh * dpr;
    cv.getContext("2d").setTransform(dpr, 0, 0, dpr, 0, 0);
  }
}

sizeCanvases();
window.addEventListener("resize", sizeCanvases);

function heartPath(ctx, x, y, s) {
  ctx.beginPath();
  ctx.moveTo(x, y + s * 0.3);
  ctx.bezierCurveTo(x, y, x - s / 2, y, x - s / 2, y + s * 0.3);
  ctx.bezierCurveTo(x - s / 2, y + s * 0.62, x, y + s * 0.8, x, y + s);
  ctx.bezierCurveTo(x, y + s * 0.8, x + s / 2, y + s * 0.62, x + s / 2, y + s * 0.3);
  ctx.bezierCurveTo(x + s / 2, y, x, y, x, y + s * 0.3);
  ctx.closePath();
}

// A lily petal: pointed at the tip, rounded at the base.
function petalPath(ctx, s) {
  ctx.beginPath();
  ctx.moveTo(0, -s / 2);
  ctx.bezierCurveTo(s * 0.44, -s * 0.16, s * 0.30, s * 0.34, 0, s / 2);
  ctx.bezierCurveTo(-s * 0.30, s * 0.34, -s * 0.44, -s * 0.16, 0, -s / 2);
  ctx.closePath();
}

const HEART_COLORS = ["#6b0f2a", "#8a2433", "#b8455f", "#a3324a"];
const PETAL_COLORS = ["#f2c3ce", "#e28fa0", "#f7d3db", "#d98fa2"];
const hearts = [];

function spawnHeart(fromBottom = true) {
  const isPetal = Math.random() < 0.6;
  hearts.push({
    isPetal,
    x: Math.random() * vw,
    y: fromBottom ? vh + 40 : Math.random() * vh,
    size: isPetal ? 14 + Math.random() * 26 : 10 + Math.random() * 20,
    speed: 0.25 + Math.random() * 0.7,
    drift: (Math.random() - 0.5) * 0.5,
    phase: Math.random() * Math.PI * 2,
    alpha: 0.25 + Math.random() * 0.4,
    spin: (Math.random() - 0.5) * 0.01,
    rot: (Math.random() - 0.5) * 0.5,
    color: isPetal
      ? PETAL_COLORS[(Math.random() * PETAL_COLORS.length) | 0]
      : HEART_COLORS[(Math.random() * HEART_COLORS.length) | 0],
  });
}

for (let i = 0; i < 18; i++) spawnHeart(false);

let heartRate = 0.35;

function updateHearts() {
  if (Math.random() < heartRate && hearts.length < 140) spawnHeart();

  hCtx.clearRect(0, 0, vw, vh);

  for (let i = hearts.length - 1; i >= 0; i--) {
    const p = hearts[i];
    p.y -= p.speed;
    p.phase += 0.02;
    p.x += p.drift + Math.sin(p.phase) * 0.4;
    p.rot += p.spin;

    if (p.y < -60) {
      hearts.splice(i, 1);
      continue;
    }

    hCtx.save();
    hCtx.globalAlpha = p.alpha;
    hCtx.translate(p.x, p.y);
    hCtx.rotate(p.rot);
    hCtx.fillStyle = p.color;
    if (p.isPetal) {
      petalPath(hCtx, p.size);
    } else {
      heartPath(hCtx, 0, -p.size / 2, p.size);
    }
    hCtx.fill();
    hCtx.restore();
  }
}

const CONFETTI_COLORS = ["#6b0f2a", "#8a2433", "#b8455f", "#e28fa0", "#f2c3ce", "#f7d3db", "#fff7f7"];
const confetti = [];

function burstConfetti(count = 170) {
  const cx = vw / 2;
  const cy = vh * 0.42;
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 4 + Math.random() * 12;
    confetti.push({
      x: cx + (Math.random() - 0.5) * 60,
      y: cy + (Math.random() - 0.5) * 40,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 5,
      w: 5 + Math.random() * 8,
      h: 8 + Math.random() * 10,
      rot: Math.random() * Math.PI * 2,
      vr: (Math.random() - 0.5) * 0.35,
      color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
      isHeart: Math.random() < 0.32,
      life: 1,
    });
  }
}

function updateConfetti() {
  cCtx.clearRect(0, 0, vw, vh);
  if (!confetti.length) return;

  for (let i = confetti.length - 1; i >= 0; i--) {
    const p = confetti[i];
    p.vy += 0.24;
    p.vx *= 0.992;
    p.x += p.vx;
    p.y += p.vy;
    p.rot += p.vr;
    p.life -= 0.0055;

    if (p.life <= 0 || p.y > vh + 80) {
      confetti.splice(i, 1);
      continue;
    }

    cCtx.save();
    cCtx.globalAlpha = Math.min(1, p.life * 1.6);
    cCtx.translate(p.x, p.y);
    cCtx.rotate(p.rot);
    cCtx.fillStyle = p.color;
    if (p.isHeart) {
      heartPath(cCtx, 0, -p.h / 2, p.h);
      cCtx.fill();
    } else {
      cCtx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
    }
    cCtx.restore();
  }
}

function loop() {
  updateHearts();
  updateConfetti();
  requestAnimationFrame(loop);
}

if (!reduceMotion) loop();

/* ============================================================================
   Typewriter — one line, then straight to the question
   ============================================================================ */
let skipTyping = false;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function typeLine(line, speed = 45) {
  return new Promise((resolve) => {
    // Whatever is already typed stays put; this line is added onto it.
    const base = typedText.textContent;

    if (reduceMotion) {
      typedText.textContent = base + line;
      resolve();
      return;
    }

    let i = 0;
    const tick = () => {
      if (skipTyping) {
        typedText.textContent = base + line;
        resolve();
        return;
      }
      typedText.textContent = base + line.slice(0, i + 1);
      i++;
      if (i < line.length) {
        const ch = line[i - 1];
        setTimeout(tick, ",.!?—".includes(ch) ? speed * 6 : speed);
      } else {
        resolve();
      }
    };
    tick();
  });
}

async function runIntro() {
  typedText.textContent = "";
  typedText.classList.remove("done");

  const lines = Array.isArray(CONFIG.opening) ? CONFIG.opening : [CONFIG.opening];

  for (let i = 0; i < lines.length; i++) {
    skipTyping = false; // a tap skips the current line, not the whole intro
    await typeLine(lines[i]);
    if (i < lines.length - 1) {
      typedText.textContent += "\n";
      await sleep(reduceMotion ? 0 : 420);
    }
  }

  typedText.classList.add("done");
  openPageBtn.hidden = false;
}

document.getElementById("pane-intro").addEventListener("click", () => {
  if (!typedText.classList.contains("done")) skipTyping = true;
});

/* ============================================================================
   Envelope → window
   ============================================================================ */
let opened = false;

envelopeScene.addEventListener("click", () => {
  if (opened) return;
  opened = true;

  startMusic();
  heartRate = 0.6;

  envelopeScene.classList.remove("is-active");
  windowScene.classList.add("is-active");

  // Force a layout pass so the window has a starting point to animate FROM.
  // (requestAnimationFrame would do this too, but it doesn't fire while the
  // tab is hidden -- glance away mid-open and you'd come back to a blank box.)
  void letterWindow.offsetWidth;

  letterWindow.classList.add("open");
  setTimeout(runIntro, reduceMotion ? 0 : 550);
});

/* ============================================================================
   The No button runs away — on mouse AND on touch
   ============================================================================ */
let noEscaped = false;

const clamp = (v, lo, hi) => Math.min(Math.max(v, lo), hi);

function dodgeNo() {
  const r = noBtn.getBoundingClientRect();

  if (!noEscaped) {
    noBtn.style.width = r.width + "px";
    noBtn.style.height = r.height + "px";
    noBtn.style.position = "fixed";
    noBtn.style.margin = "0";
    noBtn.style.left = r.left + "px";
    noBtn.style.top = r.top + "px";
    noEscaped = true;
    void noBtn.offsetWidth;
  }

  const pad = 10;
  const maxLeft = Math.max(pad, vw - r.width - pad);
  const maxTop = Math.max(pad, vh - r.height - pad);

  let left = 0;
  let top = 0;

  for (let tries = 0; tries < 12; tries++) {
    const angle = Math.random() * Math.PI * 2;
    const dist = 150 + Math.random() * 280;
    left = clamp(r.left + Math.cos(angle) * dist, pad, maxLeft);
    top = clamp(r.top + Math.sin(angle) * dist, pad, maxTop);
    if (Math.hypot(left - r.left, top - r.top) > 90) break;
  }

  if (Math.hypot(left - r.left, top - r.top) <= 90) {
    left = pad + Math.random() * (maxLeft - pad);
    top = pad + Math.random() * (maxTop - pad);
  }

  noBtn.style.left = left + "px";
  noBtn.style.top = top + "px";
  noBtn.style.transform = "rotate(" + (Math.random() * 24 - 12).toFixed(1) + "deg)";
}

noBtn.addEventListener("pointerenter", (e) => {
  if (e.pointerType !== "touch") dodgeNo();
});

noBtn.addEventListener("pointerdown", (e) => {
  e.preventDefault();
  dodgeNo();
});

noBtn.addEventListener("click", (e) => {
  e.preventDefault();
  dodgeNo();
});

window.addEventListener("resize", () => {
  if (!noEscaped) return;
  const r = noBtn.getBoundingClientRect();
  noBtn.style.left = clamp(r.left, 10, Math.max(10, vw - r.width - 10)) + "px";
  noBtn.style.top = clamp(r.top, 10, Math.max(10, vh - r.height - 10)) + "px";
});

/* ============================================================================
   YES
   ============================================================================ */
let celebrating = false;

yesBtn.addEventListener("click", () => {
  noBtn.style.display = "none";

  // Swap the ask out for the answer, then the closing line beneath it.
  document.getElementById("sec-ask").hidden = true;
  const answered = document.getElementById("sec-answered");
  answered.hidden = false;
  if (CONFIG.closing) document.getElementById("sec-closing").hidden = false;

  heartRate = 1.2;
  celebrating = true;

  if (!reduceMotion) {
    burstConfetti();
    setTimeout(() => celebrating && burstConfetti(90), 400);
    setTimeout(() => celebrating && burstConfetti(70), 850);
  }

  // She's at the bottom of a long page -- bring the answer into view rather
  // than leaving her looking at the gap the ask left behind.
  answered.scrollIntoView({
    behavior: reduceMotion ? "auto" : "smooth",
    block: "center",
  });

  setTimeout(() => {
    heartRate = 0.7;
  }, 6000);
});

/* ============================================================================
   → the scrolling page
   ============================================================================ */
openPageBtn.addEventListener("click", () => {
  letterWindow.classList.add("dismiss");

  // Clear any confetti still in the air -- it sits on a canvas above the
  // page and would drift over the letter while she's trying to read it.
  celebrating = false;
  confetti.length = 0;
  heartRate = 0.4;

  setTimeout(
    () => {
      windowScene.classList.remove("is-active");
      document.body.classList.add("reading");
      letterPage.classList.add("is-active");
      window.scrollTo(0, 0);
      setupReveal();
    },
    reduceMotion ? 0 : 500
  );
});

/* ============================================================================
   Music
   ============================================================================ */
let songWanted = false; // has she left the music switched on?

function startMusic() {
  if (!CONFIG.song) return;

  song.src = CONFIG.song;
  song.volume = 0;

  song
    .play()
    .then(() => {
      songWanted = true;
      musicToggle.hidden = false;
      // Fade in so it doesn't blast her
      const step = CONFIG.volume / 40;
      const fade = setInterval(() => {
        song.volume = Math.min(CONFIG.volume, song.volume + step);
        if (song.volume >= CONFIG.volume) clearInterval(fade);
      }, 50);
    })
    .catch(() => {
      // Autoplay blocked or the file is missing — no music, no problem
      musicToggle.hidden = true;
    });
}

// A video is playing: get out of its way
function duckSong() {
  if (!song.paused) {
    song.pause();
    musicToggle.classList.add("is-muted");
  }
}

function unduckSong() {
  // Only come back if she hadn't deliberately switched the music off
  if (songWanted && song.paused) {
    song.play().catch(() => { });
    musicToggle.classList.remove("is-muted");
  }
}

// Leaving fullscreen should stop the clip, not leave it playing in its card.
function onFullscreenChange() {
  const current = document.fullscreenElement || document.webkitFullscreenElement;
  if (current && current.tagName === "VIDEO") {
    fullscreenVideo = current;
  } else if (!current && fullscreenVideo) {
    fullscreenVideo.pause();
    fullscreenVideo = null;
  }
}

document.addEventListener("fullscreenchange", onFullscreenChange);
document.addEventListener("webkitfullscreenchange", onFullscreenChange);

musicToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  if (song.paused) {
    songWanted = true;
    song.play().catch(() => { });
    musicToggle.classList.remove("is-muted");
  } else {
    songWanted = false;
    song.pause();
    musicToggle.classList.add("is-muted");
  }
});
