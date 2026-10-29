/* ============================================================================
   🌸  THE LILY — month three.

   EVERYTHING YOU EDIT IS IN THIS FILE.

   Six petals, six little letters. She taps a petal, it falls, and the card
   behind it opens. When all six are gone the last message appears.

   Keep it to six -- the flower is drawn with six petals. Write them short;
   each one is a card she reads on her phone, not a whole page.

   PHOTOS point at pictures already in this folder so you can see it working.
   Swap the `photo` lines for your own. A photo that isn't there yet shows a
   label saying which file is missing, so nothing breaks silently.
   Leave `photo` as "" for a card with no picture.
   ============================================================================ */
const LILY = {
  hint: "pick a petal 🌸",

  /* ---------- The six petals, in the order she'll most likely tap them ---------- */
  petals: [
    {
      title: "Petal one — REPLACE ME",
      text: "REPLACE ME. A few lines. The shorter the better -- this is a note, not a letter.",
      photo: "us.jpg",
      caption: "us",
    },
    {
      title: "Petal two — REPLACE ME",
      text: "REPLACE ME.",
      photo: "her.jpg",
      caption: "my favourite person in the world",
    },
    {
      title: "Petal three — REPLACE ME",
      text: "REPLACE ME.",
      photo: "photo1.jpg",
      caption: "that smile",
    },
    {
      title: "Petal four — REPLACE ME",
      text: "REPLACE ME.",
      photo: "us2.jpg",
      caption: "september",
    },
    {
      title: "Petal five — REPLACE ME",
      text: "REPLACE ME.",
      photo: "love.jpg",
      caption: "the love of my life",
    },
    {
      title: "Petal six — REPLACE ME",
      text: "REPLACE ME.",
      photo: "kid.jpg",
      caption: "same smile, smaller zany",
    },
  ],

  /* ---------- What she sees once every petal is gone ---------- */
  final: {
    heading: "REPLACE ME",
    text: "REPLACE ME. This is the one she reads last, so make it the one that lands.",
    signoff: "— Hissy",
  },

  /* ---------- Music. Leave song as "" for a quiet page. ---------- */
  song: "",
  songStart: 0,
};
