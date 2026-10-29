/* ============================================================================
   📔  THE SCRAPBOOK — month three.

   EVERYTHING YOU EDIT IS IN THIS FILE. Nothing else needs touching.

   Adding next month:  copy a whole { title: "Month 3", ... } block, paste it
   below, change the title/dates, swap the photos and text. That's it -- the
   divider page, the page count and the arrows all follow along by themselves.

   PHOTOS: these start out pointing at photos already in this folder so you can
   see it working. Drop your own in (anywhere you like, e.g. an images/ folder)
   and change the `src` lines. A photo that isn't there yet shows a label
   saying which file is missing, so nothing silently breaks.

   STICKERS you can use: "heart", "lily", "star", "coffee", "book", "note"
   LAYOUTS: leave `layout` out and it picks one from the number of photos.
     "solo"     1 big photo + text        "pair"   2 tilted photos
     "trio"     3 polaroids in a row      "words"  text only, no photos
   ============================================================================ */
const SCRAPBOOK = {
  /* ---------- The closed cover she taps to open ---------- */
  cover: {
    title: "Us 🫶",
    est: "est. 30.07.2026",
  },

  /* ---------- The very end ---------- */
  ending: {
    heading: "To be continued… forever 🫶",
    note: "Three months down. Every single one better than the last.\nI can't wait to fill the rest of these pages with you.",
    signoff: "— Hissy",
  },
  backCover: "Happy 3 months meri jaan ❤️",

  /* ---------- Blank pages, so it always looks like there's more coming ---------- */
  comingSoon: {
    label: "Month 4",
    note: "not written yet ❀",
    count: 2,
  },

  /* ---------- Music. Drop a song3.mp3 in this folder and name it here. ---------- */
  song: "song.mp3",
  songStart: 0,

  months: [
    /* ======================= MONTH ONE ======================= */
    {
      title: "Month 1",
      dates: "30 Jul – 30 Aug",
      sticker: "heart",
      spreads: [
        {
          heading: "Favorite date",
          text: "REPLACE ME — where you went, what you ate, the bit you both still bring up.",
          photos: [{ src: "us.jpg", caption: "the first one" }],
          stickers: ["heart", "lily"],
        },
        {
          heading: "Inside joke of the month",
          text: "REPLACE ME — eating trees? being horses? chiga language? pick the one that still makes her laugh.",
          photos: [],
          stickers: ["star"],
        },
        {
          heading: "Moment I fell even harder",
          text: "REPLACE ME — the exact moment. Not the whole day, the moment.",
          photos: [
            { src: "photo1.jpg", caption: "that smile" },
            { src: "kid.jpg", caption: "same smile, smaller zany" },
          ],
          stickers: ["heart"],
        },
        {
          heading: "Cutest pic",
          text: "REPLACE ME — why this one.",
          photos: [{ src: "her.jpg", caption: "my favourite person in the world" }],
          stickers: ["lily"],
        },
      ],
    },

    /* ======================= MONTH TWO ======================= */
    {
      title: "Month 2",
      dates: "30 Aug – 30 Sep",
      sticker: "book",
      spreads: [
        {
          heading: "Favorite date",
          text: "REPLACE ME.",
          photos: [{ src: "us2.jpg", caption: "us, september" }],
          stickers: ["coffee"],
        },
        {
          heading: "Inside joke of the month",
          text: "REPLACE ME.",
          photos: [],
          stickers: ["star", "note"],
        },
        {
          heading: "Moment I fell even harder",
          text: "REPLACE ME.",
          photos: [
            { src: "love.jpg", caption: "the love of my life" },
            { src: "biceps.jpg", caption: "my giant biceps baddie" },
          ],
          stickers: ["heart"],
        },
        {
          heading: "Cutest pic",
          text: "REPLACE ME.",
          photos: [{ src: "us2.jpg", caption: "this one. obviously." }],
          stickers: ["lily", "heart"],
        },
      ],
    },

    /* ====================== MONTH THREE ====================== */
    {
      title: "Month 3",
      dates: "30 Sep – 30 Oct",
      sticker: "lily",
      spreads: [
        {
          heading: "Favorite date",
          text: "REPLACE ME.",
          photos: [{ src: "us.jpg", caption: "october" }],
          stickers: ["coffee", "heart"],
        },
        {
          heading: "Inside joke of the month",
          text: "REPLACE ME.",
          photos: [],
          stickers: ["star"],
        },
        {
          heading: "Moment I fell even harder",
          text: "REPLACE ME.",
          photos: [
            { src: "photo1.jpg", caption: "…" },
            { src: "her.jpg", caption: "…" },
            { src: "love.jpg", caption: "…" },
          ],
          stickers: ["heart", "lily"],
        },
        {
          heading: "Cutest pic",
          text: "REPLACE ME.",
          photos: [{ src: "us2.jpg", caption: "…" }],
          stickers: ["lily"],
        },
        {
          heading: "Three months of you",
          text: "REPLACE ME — a free page. Add as many of these as you want; they work exactly like the ones above.",
          photos: [],
          stickers: ["note", "heart"],
        },
      ],
    },
  ],
};
