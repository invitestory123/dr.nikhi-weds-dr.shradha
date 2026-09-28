/**
 * wedding-data.js — Customer-facing editable data layer for rajwada-royale
 * Wedding Invitation: Dr. Nikhil & Dr. Shraddha
 */

window.WEDDING_DATA = {
  couple: {
    groom: "Dr. Nikhil",
    bride: "Dr. Shraddha",
    monogram: "N & S",
    hashtag: "#NikhilWedsShraddha",
  },

  mainEvent: {
    title: "Dr. Nikhil & Dr. Shraddha — Wedding Ceremony",
    startsAt: "2026-12-09T20:00:00+05:30",
    durationMinutes: 300,
    dateLabel: "Wednesday, 9 December 2026",
    timeLabel: "8:00 PM onwards",
    celebrationLabel: "Wedding Festivities",
  },

  families: {
    groomSide: {
      parents: "Mrs. Savita Shrivastava & Mr. Akhil Prasad Shrivastava",
      line: "cordially invite you to celebrate the wedding of their son",
    },
    brideSide: {
      parents: "Mrs. Rita Shrivastava & Mr. Sunil Kumar Shrivastava",
      line: "together with the family of their daughter",
    },
  },

  invitationNote: "With the divine blessings of Lord Ganesha and our elders, we solicit your gracious presence and blessings on the auspicious wedding celebration of our beloved children.",

  story: [
    {
      year: "2022",
      title: "First Encounter",
      text: "Two dedicated doctors, an unexpected conversation over warm cups of chai, and a connection that began to grow.",
      image: "./editable/assets/story-1.jpg",
    },
    {
      year: "2024",
      title: "Growing Together",
      text: "Through demanding hospital schedules, quiet evenings, and shared laughter, discovering a partner and best friend for life.",
      image: "./editable/assets/story-2.jpg",
    },
    {
      year: "2026",
      title: "Forever & Always",
      text: "With hearts full of gratitude and love, choosing to embark upon this sacred journey of marriage together.",
      image: "./editable/assets/story-3.jpg",
    },
  ],

  events: [
    {
      key: "engagement",
      name: "Engagement",
      startsAt: "2026-11-21T19:00:00+05:30",
      durationMinutes: 240,
      venue: "Piccadily",
      address: "Krishna Nagar, Lucknow",
      dressCode: "Festive Glam / Formal",
      dressCodeColor: "#C9A84C",
      note: "Join us for an auspicious evening of exchange of rings and celebration. 7:00 PM onwards.",
    },
    {
      key: "tilak",
      name: "Tilak Ceremony",
      startsAt: "2026-12-05T19:00:00+05:30",
      durationMinutes: 240,
      venue: "Radisson Blu Hotel",
      address: "Main Road, Kadru, Ranchi",
      dressCode: "Traditional Ethnic",
      dressCodeColor: "#B33939",
      note: "An evening of traditional rituals and family blessings. 7:00 PM – 11:00 PM.",
    },
    {
      key: "haldi-sangeet",
      name: "Haldi & Sangeet",
      startsAt: "2026-12-08T14:00:00+05:30",
      durationMinutes: 360,
      venue: "Moments Resort",
      address: "Hardag, Ranchi",
      dressCode: "Haldi Yellow & Sangeet Dazzle",
      dressCodeColor: "#E1A11A",
      note: "Haldi ceremony followed by musical beats, dance performances & dinner. 2:00 PM onwards.",
    },
    {
      key: "wedding",
      name: "Wedding Ceremony",
      startsAt: "2026-12-09T20:00:00+05:30",
      durationMinutes: 300,
      venue: "Moments Resort",
      address: "Khunti Road, Hardag, Ranchi, Dundu, Jharkhand 835221",
      dressCode: "Royal Traditional Formals",
      dressCodeColor: "#7B1E2B",
      note: "Swagatam, Varmala, Dinner followed by sacred Phere and auspicious rituals. 8:00 PM onwards.",
    },
  ],

  venue: {
    name: "Moments Resort",
    address: "Khunti Road, Hardag, Ranchi, Dundu, Jharkhand 835221",
    lat: 23.2384,
    lng: 85.2952,
    directionsNote: "Opposite Usha Martin University & near Sapphire International School, Khunti Road, Hardag. Valet parking available.",
    googleMapsUrl: "https://maps.app.goo.gl/KMFyMJwzCeWDEqsX6?g_st=iw",
  },

  gallery: [
    { src: "./editable/assets/gallery-1.jpg", alt: "Haldi and Mehndi celebration vibes" },
    { src: "./editable/assets/gallery-2.jpg", alt: "Sangeet music and dance celebrations" },
    { src: "./editable/assets/gallery-3.jpg", alt: "Royal mandap decorated with fresh flowers" },
    { src: "./editable/assets/gallery-4.jpg", alt: "Auspicious wedding baraat procession" },
  ],

  closing: {
    blessing: "॥ श्री गणेशाय नमः ॥ With the blessings of our ancestors and elders, two families unite to bless Dr. Nikhil & Dr. Shraddha.",
    signOff: "With warm regards & best compliments,",
  },

  contacts: [
    { name: "Shrivastava Family (Groom)", phone: "+919876543210" },
    { name: "Shrivastava Family (Bride)", phone: "+919812345678" },
  ],

  media: {
    ganesh: "./editable/assets/ganesh.png",
    doorPanel: "./editable/assets/door-panel.png",
    couple: "./editable/assets/couple.png",
    floralCorner: "./editable/assets/floral-corner.png",
    garland: "./editable/assets/garland.png",
    lantern: "./editable/assets/lantern.png",
    footerFloral: "./editable/assets/footer-floral.jpg",
    ambientAudio: "./editable/assets/ambient-shehnai.mp3",
  },
};
