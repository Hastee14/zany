/* ============================================================================
   ✏️  EVERYTHING YOU EDIT IS IN THIS BLOCK. Nothing below it needs touching.

   FILES: drop photos / videos / your mp3 straight into this folder, next to
   index.html, and write the filenames below.

   EVERY SECTION IS OPTIONAL. Leave a list empty ( [] ) or a string empty ( "" )
   and that whole section disappears from the page automatically.
   ============================================================================ */
/* ============================================================================
   ✏️  THE SHELF — the first thing she sees. One card per letter.
   Add a third card here when month three comes around, then add a matching
   entry to LETTERS below. Nothing else needs touching.
   ============================================================================ */
const SHELF = {
  title: "for my zany",
  hint: "pick one ❀",
  cards: [
    { key: "m1", label: "month one", sub: "30 august" },
    { key: "m2", label: "month two", sub: "30 september" },
  ],
};

/* ============================================================================
   ✏️  MONTH TWO — its own letter, its own lock.
   ============================================================================ */
const MONTH2 = {
  password: "6767",
  occasion: "two months",
  lockTitle: "this one's locked too",
  lockHint: "same number ❀",
  lockError: "not quite. try again ❀",

  heroKicker: "chapter two",
  pageTitle: "Happy 2 months, Zany",
  photo: "us2.jpg",
  caption: "my girlfriend 🫶",

  song: "song2.mp3",
  songStart: 69, // 1:09 -- skip the intro


  letter: [
    "HI ZANYYY MERI JAAN. Wow it's been 2 months of us. 1 month of being bf and gf 😛. I just want to say these past 2 months have been the most amazing cutest best 2 months of my life. 2 months with the most amazing, the most special, and my favorite girl in the universe. AAAA MY GIRLFRIEND YAYAYAYAYAYAYAYAY 🫶🫶",
    "Zany you are not only the light in my life. You are the whole sky lit up by the sun too. The moon when everything else is dark. You are my home zany. The most beautiful lily in a room of ordinary flowers. I love you sososososo much",
    "I really don't know what I used to do before having you in my life zany. And I want to experience every part of life with you. I want to marry you. I can't wait until we are married. I can't wait until you are my wife ❤️❤️ when everything is ours. When home is somewhere we both live. When we can just do silly dumb things together always 😭. When we can have our own cutie things like our Lego room, our library, our coffee corner, all the cutie things 🫶🫶. We will have sooo much fun. I'm already having the most fun I've ever had in my life being with you. I can't imagine how amazing it will be being with you every day jaan. I love you 🫶🫶.",
    "I'm incredibly lucky to have someone sooooooooooooo loving. ZANY YOU REALLY ARE A GEM. It's like I won the lottery. It's like you walked straight out of a dream. I'm so lucky that I think about it sometimes and tear up 😭. How can I have someone that is just pure love. The definition of love. A girl that makes people smile just by being there. Just being in your company is the most calming, most relaxing, most enjoyable feeling ever my love. I really am sooo lucky to have someone sooo smart. Like wow, you always tell me things I don't know, you always think of things in such an amazing way, your mind is soo admirable zany. My funny, smart, creative, talented, fun girl 🫶. YOU ARE LITERALLY THE MOST TALENTED EVERR. AND IM SO LUCKY THAT NOT ONLY ARE YOU THE BEST, YOU ARE THE PRETTIEST GIRL IN THE UNIVERSE. Like literally jaw dropping pretty. If the moon could see you it would get jealous 😭. I could get lost in your eyes zany forever and never want to find my way out. Your smile could light up the darkest room better than any light or candle ever could. It's my favorite thing in the whole world and I always want to make you happy and make you smile. I will always try my best my love 🫶🫶🫶",
    "You are literally the best person ever. The love of my life. My soulmate. I CANT WAIT TO GO ON MORE CUTIE DATES WITH YOU. Where we do absolutely nothing or have the most random sidequests ever 😭. They're literally the best. I fall in love with you more and more every second. You are literally unreal. And you're mine forever zany. YAYAYAYYAAY MY GIRL FOREVER. And I'm all yours. ALL OF HISSY IS FOR YOU 🫶🫶🫶. You are perfect meri jaan. And you are always on my mind. The first thing I think about when I wake up, and the last thing I think about before sleeping. That's how amazing you are my girl ❤️. You make me the happiest. I can't wait for life with you. I love you more than anything meri jaan ❤️❤️❤️❤️❤️",
    "I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU  I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU  I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU  I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU   I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU ❤️❤️❤️❤️❤️❤️❤️❤️",
  ],
  signoff: "— Hissy",
};

const CONFIG = {
  herName: "Zany Danny",

  /* ---------- The occasion, shown above the envelope ---------- */
  occasion: "one month",

  /* ---------- The lock. She has to type this to get in. ---------- */
  password: "6767",
  lockTitle: "this one's locked",
  lockHint: "you know the number ❀",
  lockButton: "open ❀",
  lockError: "not quite. try again ❀",

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
  askShy: "(im shy)",
  usPhoto: "us.jpg", // a photo of the two of you

  /* ---------- The moment she answers ---------- */
  yesTitle: "SHE SAID YES",
  yesSubtitle: "the love of my life, forever",
  readButton: "there's more ❀",

  /* ---------- Top of the page ---------- */
  heroKicker: "one month of us",
  pageTitle: "Happy one month, Zany",
  herPhoto: "her.jpg",
  herCaption: "my favourite person in the world",

  /* ---------- Your letter (one string = one paragraph) ---------- */
  letter: [
    "One month. One month and I already know it's you. And only you 🫶",
    "I keep thinking about it. HOW DID I GET THE ZAINAB LODHI. It's just sooo unexpected. Uni was ending and I didn't want to lose touch with anyone, so I started sending everybody reels. And I ended up sending you the AI reel about economics. I had no idea one reel would turn into hundreds and those turned into you being the person that I want to spend my lifetime with.",
    "Talking to you felt like the easiest thing ever. We became best friends faster than anything 😭. By the first week we had a hundred inside jokes. Eating trees, commenting on Brenda's posts, making chiga language, being horses 😭. We already planned on traveling the world together in the first month of talking 😭.",
    "You became my favorite part of the day. I looked forward to our braindead convos every single night. The random talks, the random reels, the voice messages u sent me. I started checking my phone to see if you had texted me. And everything outside our texts started reminding me of you. Every reel (I used to save reels to send to u later 😭), songs started reminding me of you especially birds of a feather because I remember you loved that song even during exchange. EVEN TREES started reminding me of you.",
    "I was so happy when u showed up for my birthday. I thought in my head \"MY BEST FRIEND IS HERE\". I was the happiest I've been in a long time. And I didn't know fully why. It was, being with you that made me so happy. You gave me the Lego London postcard set and it's still on my desk. Reminding me of you every single day. Each day that passed slowly started etching you into my mind. Until one day you were engraved there forever.",
    "June felt different. UOBD extra started. Each time I saw you. I wanted another day of it. Seeing you became the thing I looked forward to more than anything else. Every love song started making sense. Every lyric felt like. It was about you. I wanted to know everything about you",
    "July. The month i said it. Graduation. You in that blue dress. I have no words. The prettiest girl ever I was so in love 😭. July is also when you started writing. Poems about nobody asking about your favorite flower, about wanting to be known. About wanting to be loved the way you never have been. I read them over and over again. I wanted to tell you. That I wanted to be the one who knows.",
    "Then Pakistan, we both went at the same time 😭. And something felt different. The whole time we were there. I felt it every day. We would talk until the sun fully rose every day. And most nights I'd just lie there, staring at the fan. Wanting you. You'd tell me as well, that you were \"thinking of nothing\" or that you were sleepy. But I knew. I knew you were thinking about love. And I wanted to badly say it. \"It's me\". \"It's been me\". \"It's going to be me\". But I couldn't yet.",
    "I left Pakistan early and you were still there. I just couldn't wait anymore. Not another day. It was going to be you. It was only ever going to be you. And I needed you to know",
    "I was missing you and wanted to learn a song u loved and that reminded me of you on the guitar. Birds of a feather. There was no tutorial so i figured it out myself. I made my own version. And when it was finally ready. I sent it to you. The conversation after sending it was just filled with so much love. I couldn't hold it in.",
    "July 30th I said it. My heart was beating like never before hoping for one thing. And then you said . \"Dw Hasaan I like you back\". And after all those days of thinking, all the weight was suddenly lifted off my chest. I read that message 50 times. It felt like a dream. You are my dream. My dream come true. I knew that I was 100% sure about you",
    "One month later. And I still keep falling in love with you. Every single day. Loving you is the easiest thing I have done. Like breathing. Every good thing that happens. You're the first person I want to tell. Every bad thing. And anything and everything. I know I can tell you anything and I'll always love talking to you. Forever",
    "I don't think I have stopped smiling since July 30th. I have been the happiest version of myself. Everything I do I think about you and I smile. Even the songs I listen to now are all ones that remind me of you. I sit in my car and say out loud all the time. \"I love Zainab\".",
    "I can't believe that I have the prettiest girl in the world. So pretty that Everytime I see you whether it's on your story, a picture you send me and in real life. My heart just falls in love and feels the happiest. Your smile does something to me I don't have words for. The way your eyes squint, the way you just look sooo happy. It makes the world feel lighter. It's something I would never get tired of seeing. It's my favorite.",
    "Loving you doesn't feel like a decision I made. It feels like a fact that I had discovered. Something that was always true. It just happened to happen now. I will always love you. Every day. Every second. I will always strive to be the best for you. And I want to keep learning you. Every version of you. I want to be the person you don't have to be anything for. I want to know all the things that nobody thinks to ask. I want to keep knowing you. I have never wanted a future more than the one I want with you. I need the end goal (Bluds will say anything instead of) ——-> I want to marry you. I will always love you.",
    "Thank you for saying yes on July 30th. Thank you for being the girl I can go to about anything. Thank you for being my biggest supporter. Thank you for showing me how amazing love can be ❤️",
    "Now every morning I get to wake up smiling and every night I get to go to sleep smiling. I will always try my best to make you smile. Always. I'm the luckiest man in the world to have you. I wake up randomly in the middle of the night smiling just thinking about you. You are the most loving person I have ever known. You feel like if a warm blanket was put over my soul. One month has passed. Now I want a forever. With you. And only you ❤️",
  ],
  signoff: "— Hissy",

  /* ---------- Photos of her, each with a title and a few lines ---------- */
  galleryTitle: "my zany",
  gallery: [
    {
      src: "photo1.jpg",
      title: "my favourite smile",
      note: "I will do everything to make you smile. Your cutie smile, where you squint your eyes.",
    },
    {
      src: "kid.jpg",
      title: "the little zany who's still there",
      note: "Never lose the inner child that's still there. The super fun zany.\n\nSame smile then. Same smile now.",
    },
    {
      src: "love.jpg",
      title: "the love of my life",
      note: "",
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
      note: "I can't believe it's on video 😭",
    },
    {
      src: "clip1.mp4",
      poster: "clip1-poster.jpg",
      title: "the cutest vlog",
      note: "",
    },
    {
      src: "clip3.mp4",
      poster: "clip3-poster.jpg",
      title: "the best random sidequest at shams",
      note: "",
    },
    {
      src: "clip4.mp4",
      poster: "clip4-poster.jpg",
      title: "cutieieiei coffee review",
      note: "",
    },
  ],

  /* ---------- Reasons. Empty list = section hidden.
     Put entries back in here any time to bring it back.          ---------- */
  reasonsTitle: "one month, some reasons",
  reasons: [],

  /* ---------- Live counter. Empty startDate = section hidden.
     Put a real "YYYY-MM-DD" back here to bring the counter back.  ---------- */
  counterTitle: "us, so far",
  startDate: "",
  counterSince: "and counting ❀",

  /* ---------- Nicknames. Each one is a hidden card she taps to reveal. ---------- */
  nicknamesTitle: "what I love calling you",
  nicknamesHint: "tap them ❀",
  nicknames: [
    "my zany",
    "my love",
    "my heart",
    "my soul",
    "my home",
    "my dream",
    "my everything",
    "my peace",
    "my strength",
    "my biggest supporter",
    "my pretty",
    "my forever",
    "the love of my life",
    "the girl of my dreams",
    "my true love",
    "my cutie",
  ],

  /* The one held back. Locked until she answers the question. */
  lockedNickname: "my girlfriend",
  lockedTeaser: "not unlocked yet ❀",
  lockedHint: "scroll down",

  /* The ask sits behind a card she has to open. */
  askCardLabel: "one more thing ❀",
  askCardSub: "tap to open",

  /* ---------- The last thing she reads ---------- */
  closing: "we have a forever to live together",

  /* ---------- Music: your mp3, in this folder ---------- */
  song: "song.mp3",
  volume: 0.4,
};

/* ============================================================================
   Elements
   ============================================================================ */
const lockScene = document.getElementById("scene-lock");
const letterPage = document.getElementById("scene-letterpage");

const askQuestion = document.getElementById("ask-question");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");

const song = document.getElementById("song");
const musicToggle = document.getElementById("music-toggle");

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const setText = (id, value) => {
  const el = document.getElementById(id);
  // Guard: a stale id must not throw here. This runs at the top level, so one
  // missing element would kill every line below it -- sections, photos, the
  // lock, all of it. Twice now that's exactly what happened.
  if (!el) return;
  el.textContent = value || "";
};

/* ============================================================================
   Copy from CONFIG
   ============================================================================ */
askQuestion.textContent = CONFIG.question;
setText("ask-kicker", CONFIG.askKicker);
setText("ask-lead", CONFIG.askLead);
setText("hero-kicker", CONFIG.heroKicker);
setText("yes-title", CONFIG.yesTitle);
setText("yes-subtitle", CONFIG.yesSubtitle);
setText("page-title", CONFIG.pageTitle);
setText("her-caption", CONFIG.herCaption);
setText("signoff", CONFIG.signoff);

const letterBody = document.getElementById("letter-body");
(CONFIG.letter || []).forEach((para) => {
  const p = document.createElement("p");
  p.textContent = para;
  letterBody.appendChild(p);
});

setText("m2-kicker", MONTH2.heroKicker);
setText("m2-title", MONTH2.pageTitle);
setText("m2-caption", MONTH2.caption);
setText("m2-signoff", MONTH2.signoff);

const m2Body = document.getElementById("m2-body");
(MONTH2.letter || []).forEach((para) => {
  const p = document.createElement("p");
  p.textContent = para;
  m2Body.appendChild(p);
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
loadPhoto("m2-photo-img", "m2-missing", MONTH2.photo);

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

// A little open book, for month two.
function bookPath(ctx, s) {
  const w = s * 0.62;
  const h = s * 0.34;
  ctx.beginPath();
  // left page
  ctx.moveTo(0, -h * 0.5);
  ctx.quadraticCurveTo(-w * 0.55, -h * 1.05, -w, -h * 0.45);
  ctx.lineTo(-w, h * 0.72);
  ctx.quadraticCurveTo(-w * 0.55, h * 0.16, 0, h);
  // right page, mirrored
  ctx.quadraticCurveTo(w * 0.55, h * 0.16, w, h * 0.72);
  ctx.lineTo(w, -h * 0.45);
  ctx.quadraticCurveTo(w * 0.55, -h * 1.05, 0, -h * 0.5);
  ctx.closePath();
}

const HEART_COLORS = ["#6b0f2a", "#8a2433", "#b8455f", "#a3324a"];
const PETAL_COLORS = ["#f2c3ce", "#e28fa0", "#f7d3db", "#d98fa2"];
const BOOK_COLORS = ["#f6dbe2", "#e892a6", "#c9647e"];
const hearts = [];

// Month two mixes little books in among the petals; month one stays petals.
let bookShare = 0;

function spawnHeart(fromBottom = true) {
  const isBook = bookShare > 0 && Math.random() < bookShare;
  const isPetal = !isBook; // lily petals only -- the hearts are retired
  hearts.push({
    isPetal,
    isBook,
    x: Math.random() * vw,
    y: fromBottom ? vh + 40 : Math.random() * vh,
    size: isPetal ? 14 + Math.random() * 26 : 10 + Math.random() * 20,
    speed: 0.25 + Math.random() * 0.7,
    drift: (Math.random() - 0.5) * 0.5,
    phase: Math.random() * Math.PI * 2,
    alpha: 0.25 + Math.random() * 0.4,
    spin: (Math.random() - 0.5) * 0.01,
    rot: (Math.random() - 0.5) * 0.5,
    color: isBook
      ? BOOK_COLORS[(Math.random() * BOOK_COLORS.length) | 0]
      : PETAL_COLORS[(Math.random() * PETAL_COLORS.length) | 0],
  });
}

// Restock so a change of mix shows up straight away.
function setBookShare(share) {
  if (bookShare === share) return;
  bookShare = share;
  hearts.length = 0;
  for (let i = 0; i < 20; i++) spawnHeart(false);
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
    if (p.isBook) {
      bookPath(hCtx, p.size);
    } else if (p.isPetal) {
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
   The ❀ marks in your text become small coloured lilies
   ============================================================================ */
const LILY_ICON =
  '<svg class="lily-ic" viewBox="-60 -60 120 120" aria-hidden="true"><g transform="rotate(0) scale(1)"><path d="M0,-3 C7,-12 14,-19 13,-31 C12,-42 7,-49 0,-55 C-7,-49 -12,-42 -13,-31 C-14,-19 -7,-12 0,-3 Z" fill="#d4718a"/><path d="M0,-10 L0,-46" stroke="#eda6b8" stroke-width="3" opacity=".75"/></g><g transform="rotate(60) scale(.88)"><path d="M0,-3 C7,-12 14,-19 13,-31 C12,-42 7,-49 0,-55 C-7,-49 -12,-42 -13,-31 C-14,-19 -7,-12 0,-3 Z" fill="#d4718a"/><path d="M0,-10 L0,-46" stroke="#eda6b8" stroke-width="3" opacity=".75"/></g><g transform="rotate(120) scale(1)"><path d="M0,-3 C7,-12 14,-19 13,-31 C12,-42 7,-49 0,-55 C-7,-49 -12,-42 -13,-31 C-14,-19 -7,-12 0,-3 Z" fill="#d4718a"/><path d="M0,-10 L0,-46" stroke="#eda6b8" stroke-width="3" opacity=".75"/></g><g transform="rotate(180) scale(.88)"><path d="M0,-3 C7,-12 14,-19 13,-31 C12,-42 7,-49 0,-55 C-7,-49 -12,-42 -13,-31 C-14,-19 -7,-12 0,-3 Z" fill="#d4718a"/><path d="M0,-10 L0,-46" stroke="#eda6b8" stroke-width="3" opacity=".75"/></g><g transform="rotate(240) scale(1)"><path d="M0,-3 C7,-12 14,-19 13,-31 C12,-42 7,-49 0,-55 C-7,-49 -12,-42 -13,-31 C-14,-19 -7,-12 0,-3 Z" fill="#d4718a"/><path d="M0,-10 L0,-46" stroke="#eda6b8" stroke-width="3" opacity=".75"/></g><g transform="rotate(300) scale(.88)"><path d="M0,-3 C7,-12 14,-19 13,-31 C12,-42 7,-49 0,-55 C-7,-49 -12,-42 -13,-31 C-14,-19 -7,-12 0,-3 Z" fill="#d4718a"/><path d="M0,-10 L0,-46" stroke="#eda6b8" stroke-width="3" opacity=".75"/></g><circle r="7" fill="#8e2a45"/><circle r="3.2" fill="#e8c25a"/></svg>';

function renderLilies(el) {
  if (!el) return;
  const text = el.textContent;
  if (text.indexOf("\u2740") === -1) return;

  el.textContent = "";
  text.split("\u2740").forEach((part, i, all) => {
    if (part) el.appendChild(document.createTextNode(part));
    if (i < all.length - 1) {
      const span = document.createElement("span");
      span.className = "lily-ic-wrap";
      span.innerHTML = LILY_ICON;
      el.appendChild(span);
    }
  });
}

["lock-title", "lock-hint", "lock-error", "counter-since", "closing-text"].forEach(
  (id) => renderLilies(document.getElementById(id))
);
document.querySelectorAll(".page-foot, .card-title, .card-note").forEach(renderLilies);

/* ============================================================================
   Nicknames -- hidden cards she taps to turn over
   ============================================================================ */
const nicksGrid = document.getElementById("nicks-grid");

function makeNick(text, extraClass) {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "nick reveal" + (extraClass ? " " + extraClass : "");

  const face = document.createElement("span");
  face.className = "nick-face";
  face.innerHTML = LILY_ICON;

  const label = document.createElement("span");
  label.className = "nick-text";
  label.textContent = text;

  btn.appendChild(face);
  btn.appendChild(label);
  nicksGrid.appendChild(btn);
  return btn;
}

let lockedNick = null;

if ((CONFIG.nicknames || []).length) {
  setText("nicknames-title", CONFIG.nicknamesTitle);
  setText("nicknames-hint", CONFIG.nicknamesHint);
  renderLilies(document.getElementById("nicknames-hint"));

  CONFIG.nicknames.forEach((name) => {
    const card = makeNick(name);
    card.addEventListener("click", () => card.classList.add("open"));
  });

  // the one saved for last
  if (CONFIG.lockedNickname) {
    lockedNick = makeNick(CONFIG.lockedTeaser, "nick--locked");
    const label = lockedNick.querySelector(".nick-text");
    renderLilies(label);

    const sub = document.createElement("span");
    sub.className = "nick-sub";
    sub.textContent = CONFIG.lockedHint;
    lockedNick.appendChild(sub);

    lockedNick.addEventListener("click", () => {
      if (lockedNick.classList.contains("unlocked")) return;
      lockedNick.classList.add("open", "teasing");
    });
  }

  document.getElementById("sec-nicknames").hidden = false;
}

function unlockNickname() {
  if (!lockedNick) return;
  lockedNick.classList.remove("teasing");
  lockedNick.classList.add("open", "unlocked");
  const label = lockedNick.querySelector(".nick-text");
  label.textContent = CONFIG.lockedNickname;
  renderLilies(label);
  const sub = lockedNick.querySelector(".nick-sub");
  if (sub) sub.remove();
}

/* ============================================================================
   The ask, behind a card she opens
   ============================================================================ */
const askCard = document.getElementById("ask-card");
const askBody = document.getElementById("ask-body");

setText("ask-card-label", CONFIG.askCardLabel);
setText("ask-card-sub", CONFIG.askCardSub);
renderLilies(document.getElementById("ask-card-label"));
setText("ask-shy", CONFIG.askShy);

askCard.addEventListener("click", () => {
  askCard.hidden = true;
  askBody.hidden = false;
  askBody.scrollIntoView({
    behavior: reduceMotion ? "auto" : "smooth",
    block: "center",
  });
});

/* ============================================================================
   The shelf -> a lock -> that letter
   ============================================================================ */
const shelfScene = document.getElementById("scene-shelf");
const month2Page = document.getElementById("scene-month2");

// One entry per card on the shelf. `scene` is the page its PIN opens.
const LETTERS = {
  m1: {
    password: CONFIG.password,
    occasion: CONFIG.occasion,
    lockTitle: CONFIG.lockTitle,
    lockHint: CONFIG.lockHint,
    lockError: CONFIG.lockError,
    scene: letterPage,
    song: CONFIG.song,
    songStart: CONFIG.songStart,
    bodyClass: "reading",
    books: 0,
  },
  m2: {
    password: MONTH2.password,
    occasion: MONTH2.occasion,
    lockTitle: MONTH2.lockTitle,
    lockHint: MONTH2.lockHint,
    lockError: MONTH2.lockError,
    scene: month2Page,
    song: MONTH2.song,
    songStart: MONTH2.songStart,
    bodyClass: "reading reading-m2",
    books: 0.32,
  },
};

let active = null; // the letter she picked, until she gets the PIN right

function showScene(scene) {
  [shelfScene, lockScene, letterPage, month2Page].forEach((s) => {
    if (s) s.classList.remove("is-active", "leaving");
  });
  scene.classList.add("is-active");
}

setText("shelf-title", SHELF.title);
setText("shelf-hint", SHELF.hint);

const shelfCards = document.getElementById("shelf-cards");
(SHELF.cards || []).forEach((card) => {
  if (!LETTERS[card.key]) return; // a card with no letter behind it does nothing

  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "shelf-card";

  const env = document.createElement("img");
  env.src = "envelope.png";
  env.alt = "";
  btn.appendChild(env);

  const label = document.createElement("span");
  label.className = "shelf-card-label";
  label.textContent = card.label;
  btn.appendChild(label);

  if (card.sub) {
    const sub = document.createElement("span");
    sub.className = "shelf-card-sub";
    sub.textContent = card.sub;
    btn.appendChild(sub);
  }

  btn.addEventListener("click", () => openLock(card.key));
  shelfCards.appendChild(btn);
});

function openLock(key) {
  active = LETTERS[key];
  if (!active) return;

  // Fresh lock every time -- she may have backed out mid-PIN.
  pin = "";
  locking = false;
  paintDots();
  lockError.hidden = true;
  lockCard.classList.remove("unlocked", "shake");

  setText("occasion-label", active.occasion);
  setText("lock-title", active.lockTitle);
  setText("lock-hint", active.lockHint);
  setText("lock-error", active.lockError);

  showScene(lockScene);
}

function backToShelf() {
  active = null;
  pin = "";
  locking = false;
  paintDots();
  lockError.hidden = true;
  showScene(shelfScene);
}

document.getElementById("lock-back").addEventListener("click", backToShelf);

let opened = false;

function openLetter() {
  if (opened || !active) return;
  opened = true;

  startMusic(active.song, active.songStart);
  setBookShare(active.books);
  heartRate = 0.5;

  document.body.classList.add(...active.bodyClass.split(" "));
  showScene(active.scene);
  window.scrollTo(0, 0);
  setupReveal();
}

const lockError = document.getElementById("lock-error");

const pinDots = document.querySelectorAll("#pin-dots .pin-dot");
const lockCard = document.getElementById("lock-card");
const keypad = document.getElementById("keypad");
const PIN_LENGTH = pinDots.length;

let pin = "";

function paintDots() {
  pinDots.forEach((dot, i) => dot.classList.toggle("filled", i < pin.length));
}

function wrongPin() {
  lockError.hidden = false;
  lockCard.classList.remove("shake");
  void lockCard.offsetWidth; // restart the animation
  lockCard.classList.add("shake");

  setTimeout(() => {
    pin = "";
    paintDots();
  }, 380);
}

function pressKey(key) {
  if (locking) return;

  if (key === "del") {
    pin = pin.slice(0, -1);
    lockError.hidden = true;
    paintDots();
    return;
  }

  if (!/^[0-9]$/.test(key) || pin.length >= PIN_LENGTH) return;

  pin += key;
  lockError.hidden = true;
  paintDots();

  if (pin.length < PIN_LENGTH) return;

  if (active && pin === String(active.password)) {
    locking = true;
    lockCard.classList.add("unlocked");
    setTimeout(openLetter, reduceMotion ? 0 : 420);
  } else {
    wrongPin();
  }
}

let locking = false;

// tapping the on-screen pad
keypad.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-key]");
  if (btn) pressKey(btn.dataset.key);
});

// and a real keyboard, for when she's on a laptop
document.addEventListener("keydown", (e) => {
  if (opened || !active) return;
  if (e.key === "Backspace") {
    e.preventDefault();
    pressKey("del");
  } else if (/^[0-9]$/.test(e.key)) {
    pressKey(e.key);
  }
});

paintDots();

/* ============================================================================
   The No button runs away — on mouse AND on touch
   ============================================================================ */
let noEscaped = false;
const askSection = document.getElementById("sec-ask");

const clamp = (v, lo, hi) => Math.min(Math.max(v, lo), hi);

function dodgeNo() {
  const zone = askSection.getBoundingClientRect();
  const r = noBtn.getBoundingClientRect();

  // First dodge: pop it out of the layout, but ANCHORED TO THE ASK SECTION,
  // not the viewport. Fixed positioning let it teleport to the top of the
  // screen while she was reading the question at the bottom of the page.
  if (!noEscaped) {
    noBtn.style.width = r.width + "px";
    noBtn.style.height = r.height + "px";
    noBtn.style.position = "absolute";
    noBtn.style.margin = "0";
    noBtn.style.left = r.left - zone.left + "px";
    noBtn.style.top = r.top - zone.top + "px";
    noEscaped = true;
    void noBtn.offsetWidth;
  }

  const pad = 8;
  const maxLeft = Math.max(pad, zone.width - r.width - pad);
  const maxTop = Math.max(pad, zone.height - r.height - pad);

  const curLeft = parseFloat(noBtn.style.left) || 0;
  const curTop = parseFloat(noBtn.style.top) || 0;

  let left = curLeft;
  let top = curTop;

  for (let tries = 0; tries < 14; tries++) {
    const angle = Math.random() * Math.PI * 2;
    const dist = 90 + Math.random() * 180;
    left = clamp(curLeft + Math.cos(angle) * dist, pad, maxLeft);
    top = clamp(curTop + Math.sin(angle) * dist, pad, maxTop);
    if (Math.hypot(left - curLeft, top - curTop) > 70) break;
  }

  // cornered? hop anywhere inside the section
  if (Math.hypot(left - curLeft, top - curTop) <= 70) {
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

// touch (and stubborn clickers) never get to land the hit
noBtn.addEventListener("pointerdown", (e) => {
  e.preventDefault();
  dodgeNo();
});

noBtn.addEventListener("click", (e) => {
  e.preventDefault();
  dodgeNo();
});

// keep it inside the section if the window resizes
window.addEventListener("resize", () => {
  if (!noEscaped) return;
  const zone = askSection.getBoundingClientRect();
  const r = noBtn.getBoundingClientRect();
  const pad = 8;
  noBtn.style.left =
    clamp(parseFloat(noBtn.style.left) || 0, pad, Math.max(pad, zone.width - r.width - pad)) + "px";
  noBtn.style.top =
    clamp(parseFloat(noBtn.style.top) || 0, pad, Math.max(pad, zone.height - r.height - pad)) + "px";
});


/* ============================================================================
   YES
   ============================================================================ */
let celebrating = false;

yesBtn.addEventListener("click", () => {
  noBtn.style.display = "none";

  // Swap the ask out for the answer, then the closing line beneath it.
  document.getElementById("sec-ask").hidden = true;
  unlockNickname();
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
   Music
   ============================================================================ */
let songWanted = false; // has she left the music switched on?

let songStart = 0; // where this track comes in, in seconds

function startMusic(src, startAt) {
  const track = src || CONFIG.song;
  if (!track) return;

  songStart = Number(startAt) || 0;

  song.src = track;
  song.volume = 0;

  if (songStart) {
    // Handle the wrap ourselves. `loop` always restarts at 0, and the guard
    // that used to pull it back was firing DURING its own seek -- each seek
    // re-triggered the next, so the track never actually got going.
    song.loop = false;

    song.addEventListener(
      "loadedmetadata",
      () => {
        // A start past the end of the file would strand it in silence.
        if (!isNaN(song.duration) && songStart >= song.duration - 1) {
          songStart = 0;
          song.loop = true;
          return;
        }
        try {
          song.currentTime = songStart;
        } catch (e) {
          songStart = 0; // not seekable: better from the top than not at all
          song.loop = true;
        }
      },
      { once: true }
    );

    song.addEventListener("ended", () => {
      try {
        song.currentTime = songStart;
      } catch (e) {
        song.currentTime = 0;
      }
      song.play().catch(() => { });
    });

    // Watchdog. Seeking straight after load is the fragile part -- on some
    // phones it stalls and the track never starts. Silence is worse than a
    // wrong starting point, so if nothing is playing shortly after, give up
    // on the offset and run the song from the top.
    setTimeout(() => {
      if (song.paused || song.currentTime > 0.4) return;
      songStart = 0;
      song.loop = true;
      try {
        song.currentTime = 0;
      } catch (e) {
        /* nothing else to try */
      }
      song.play().catch(() => { });
    }, 3500);
  }

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
