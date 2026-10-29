/* ============================================================================
   🌸  THE LILY — month three.

   EVERYTHING YOU EDIT IS IN THIS FILE.

   Six petals, six little letters. She taps a petal, it falls, and the card
   behind it opens. When all six are gone the last message appears.

   Keep it to six -- the flower is drawn with six petals. Write them short;
   each one is a card she reads on her phone, not a whole page.

   PHOTOS: petal1.jpg .. petal6.jpg are the six you sent, already sized down
   for her phone. To change one, drop the new file in this folder and put its
   name on the `photo` line. A photo that isn't there yet shows a label saying
   which file is missing, so nothing breaks silently. Leave `photo` as "" for
   a petal with no picture. Landscape photos fit the petal best.
   ============================================================================ */
const LILY = {
  hint: "pick a petal 🌸",

  /* ---------- The six petals, in the order she'll most likely tap them ---------- */
  petals: [
    {
      title: "Petal one — REPLACE ME",
      text: "REPLACE ME. A few lines. The shorter the better -- this is a note, not a letter.",
      photo: "petal1.jpg",
    },
    {
      title: "Petal two — REPLACE ME",
      text: "REPLACE ME.",
      photo: "petal2.jpg",
    },
    {
      title: "Petal three — REPLACE ME",
      text: "REPLACE ME.",
      photo: "petal3.jpg",
    },
    {
      title: "Petal four — REPLACE ME",
      text: "REPLACE ME.",
      photo: "petal4.jpg",
    },
    {
      title: "Petal five — REPLACE ME",
      text: "REPLACE ME.",
      photo: "petal5.jpg",
    },
    {
      title: "Petal six — REPLACE ME",
      text: "REPLACE ME.",
      photo: "petal6.jpg",
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
