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
    subtitle: "A day to remember",
    celebrationLabel: "The celebrations",
  },

  families: {
    groomSide: {
      parents: "Mrs. Savita Shrivastava & Mr. Akhil Prasad Shrivastava",
      line: "request the pleasure of your company at the wedding of their son",
    },
    brideSide: {
      parents: "Mrs. Rita Shrivastava & Mr. Sunil Kumar Shrivastava",
      line: "daughter of",
    },
  },

  invitationNote: "As they begin this new chapter, we would be honoured to have you there to share in the celebration and bless the couple.",

  storyKicker: "Their Journey",
  storySectionTitle: "A Beautiful Beginning",
  story: [
    {
      year: "01",
      title: "Brought together",
      text: "Introduced through their families, Nikhil and Shraddha took the time to get to know each other and discover what mattered to them.",
      image: "./editable/assets/story-1.jpg",
    },
    {
      year: "02",
      title: "Choosing each other",
      text: "What began with an introduction grew into a decision they made together: to build a life side by side.",
      image: "./editable/assets/story-2.jpg",
    },
    {
      year: "03",
      title: "A lifetime ahead",
      text: "Now comes the happiest part—celebrating their marriage with the people who have been part of their lives.",
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
      note: "An evening for rings, smiles, and the first celebration of Nikhil and Shraddha’s wedding.",
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
      note: "A cherished tradition, made more memorable by the presence of those dear to us.",
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
      note: "An afternoon of haldi, followed by music, dancing, and dinner. Come ready to celebrate!",
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
      note: "We would be delighted to welcome you for the varmala and dinner, followed by the sacred pheras.",
    },
  ],

  venue: {
    name: "Moments Resort",
    address: "Khunti Road, Hardag, Ranchi, Dundu, Jharkhand 835221",
    lat: 23.2384,
    lng: 85.2952,
    directionsNote: "Opposite Usha Martin University and near Sapphire International School. Valet parking is available.",
    googleMapsUrl: "https://maps.app.goo.gl/KMFyMJwzCeWDEqsX6?g_st=iw",
  },

  galleryTitle: "The celebrations ahead",
  gallerySubtitle: "A glimpse of the colour, tradition, and joy awaiting us as we celebrate Nikhil and Shraddha.",
  gallery: [
    { src: "./editable/assets/gallery-1.jpg", alt: "Haldi and Mehndi celebration vibes" },
    { src: "./editable/assets/gallery-2.jpg", alt: "Sangeet music and dance celebrations" },
    { src: "./editable/assets/gallery-3.jpg", alt: "Royal mandap decorated with fresh flowers" },
    { src: "./editable/assets/gallery-4.jpg", alt: "Auspicious wedding baraat procession" },
  ],

  rsvp: {
    title: "Will you be joining us?",
    note: "We’re looking forward to celebrating together. Please let us know if you can attend.",
    phone: "+917017275479",
  },

  closing: {
    title: "We hope to see you there",
    blessing: "Your presence and blessings will make this occasion even more precious to the couple, and to us.",
    signOff: "We await the pleasure of welcoming you,",
    parents: "Mrs. Savita Shrivastava & Mr. Akhil Prasad Shrivastava",
  },

  contacts: [
    { name: "Shrivastava Family", phone: "+917017275479" },
  ],

  media: {
    ogImage: "./editable/assets/og-image.jpg",
    ganesh: "./editable/assets/ganesh.png",
    doorPanel: "./editable/assets/door-panel.png",
    couple: "./editable/assets/couple.png",
    floralCorner: "./editable/assets/floral-corner.png",
    garland: "./editable/assets/garland.png",
    lantern: "./editable/assets/lantern.png",
    footerFloral: "./editable/assets/footer-floral.jpg",
    ambientAudio: "./editable/assets/ranjha-flute.mp3",
    ranjhaFluteAudio: "./editable/assets/ranjha-flute.mp3",
  },
};
