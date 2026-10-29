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
      title: "",
      text: "ZANYYYY. My baby. It's been 3 months of us. 3 months being with the best, the most loving, the most amazing girl in the universe 🫶🫶🫶. These have been the best 3 months of my life ever and I'm soooo lucky to have you my princess. I LOVE YOU SOOOO MUCH ❤️❤️❤️❤️",
      photo: "petal6.jpg",
    },
    {
      title: "",
      text: "This is our first month long distance. But you have made the hard days so much easier jaanu. The distance will never change us ❤️❤️❤️. Our calls are the best zany. I love all of them. Doing anything on call with you. Even just existing is the best feeling ever. It's a glimpse into our future baby. Existing together 🫶🫶. Each day is one day closer to us being married baby and I can't wait. To have the best prettiest wifey ever ❤️❤️❤️❤️",
      photo: "petal1.jpg",
    },
    {
      title: "",
      text: "I can't wait to be with you always. To hug you. To cuddle you. TO GIVE YOU INFINITE FOREHEAD KISSES. To kiss you on your cutie lips. Rhdhdjfjfjd bye. I can't wait until you are always in my arms. Laying on my chest while I wrap my arms around you. Waking up and the first thing we see is each other. I can't wait for it all jaanu 🫶🫶 us being together always forever.",
      photo: "petal3.jpg",
    },
    {
      title: "",
      text: "But I miss you sooo much baby. I miss being next to you. I miss seeing your pretty face. Talking to you while you are next to me. Holding your hand. Holding your face. Resting our heads on each other. I miss everything. I miss our vlogs. I miss our random sidequests. Trying fire food with you. I miss being with you sooo much meri jaan ❤️🫶🫶😔",
      photo: "petal2.jpg",
    },
    {
      title: "",
      text: "I'm so lucky to have you zany. LIKE IM ACC THE LUCKIEST BOY IN THE UNIVERSE. How are you real my love. I love being loved by you. I love you for who you are. I love everything about you. I'm still think back and I'm like wow. WE ARE SOOO UNEXPECTED. I HAVE BEEN DATING ZAINAB LODHI FOR 3 MONTHS WOWOW. But I'm soooo happy we found each other baby. I love us ❤️❤️❤️ and I love you more than I can ever say jaanu. You are my everything.",
      photo: "petal4.jpg",
    },
    {
      title: "",
      text: "Thank you for everything zany. For loving me the way you do. For being the most amazing. The most caring. The best girlfriend I could ever ask for. Thank you for making me feel sooo loved even when we are thousands of kilometers apart. I'm always going to be here forever jaanu. You are my forever. It has been 3 months baby. We have a whole forever together ❤️❤️❤️. I LOVE YOU IMPOSSIBLY MUCH. I LOVE YOU MORE THAN I CAN SAY. My zany for life 🫶🫶🫶🫶.",
      photo: "petal5.jpg",
    },
  ],

  /* ---------- What she sees once every petal is gone ---------- */
  final: {
    heading: "Happy 3 months Baby",
    text: "I love you so much ❤️",
    signoff: "Your Hissy ❤️",
  },

  /* ---------- Music. Leave song as "" for a quiet page. ---------- */
  song: "",
  songStart: 0,
};
