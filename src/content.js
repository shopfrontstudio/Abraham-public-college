// All editable website text lives here. Update this file to change copy
// without touching component code. Fields named "icon" reference keys in
// src/lib/icons.jsx.
export const content = {
  school: {
    name: "Abraham Public College",
    location: "Lucknow, Uttar Pradesh",
    tagline: "Simple Learning. Strong Values.",
    altTagline: "Building discipline, confidence and good habits from the beginning.",
  },

  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Admissions", href: "#admissions" },
    { label: "Contact", href: "#contact" },
  ],
  navCta: "Enquire Now",

  hero: {
    headline: "Simple Learning. Strong Values.",
    subheadline:
      "Abraham Public College is a local school in Lucknow focused on discipline, basic education, care and personal attention for every child.",
    primaryCta: "Admission Enquiry",
    secondaryCta: "Contact School",
    trustBadges: [
      "Local School in Lucknow",
      "Personal Attention",
      "Discipline & Good Habits",
      "Parent-Friendly",
    ],
    floatingChips: [
      { type: "text", value: "ABC" },
      { type: "text", value: "123" },
      { type: "icon", value: "BookOpen" },
      { type: "icon", value: "PenLine" },
      { type: "icon", value: "Sparkles" },
      { type: "text", value: "Discipline" },
      { type: "text", value: "Care" },
      { type: "text", value: "Confidence" },
    ],
  },

  about: {
    heading: "About Abraham Public College",
    copy: "Abraham Public College is a humble school built with the aim of giving children a caring environment where they can learn, grow and develop good habits. Our focus is on basic education, discipline, respect, confidence and personal attention.",
    quote: "Our aim is to help every child learn with discipline, confidence and care.",
    highlights: [
      { icon: "MapPin", label: "Local school in Lucknow" },
      { icon: "ShieldCheck", label: "Focus on discipline" },
      { icon: "Users", label: "Personal attention" },
      { icon: "HeartHandshake", label: "Value-based learning" },
    ],
    valuesCard: {
      heading: "Our School Promise",
      points: [
        { icon: "ShieldCheck", label: "Discipline" },
        { icon: "HeartHandshake", label: "Care" },
        { icon: "Handshake", label: "Respect" },
        { icon: "Star", label: "Confidence" },
      ],
    },
  },

  approach: {
    heading: "What We Focus On",
    items: [
      {
        icon: "BookOpen",
        title: "Basic Education",
        description:
          "Helping children build strong foundations in reading, writing, numbers and everyday learning.",
      },
      {
        icon: "ShieldCheck",
        title: "Discipline & Good Habits",
        description:
          "Encouraging punctuality, respect, cleanliness and responsible behaviour.",
      },
      {
        icon: "HeartHandshake",
        title: "Personal Attention",
        description: "Supporting each child with care and guidance.",
      },
      {
        icon: "Users",
        title: "Parent Connection",
        description: "Keeping parents involved in the child's learning journey.",
      },
    ],
  },

  homeFeeling: {
    heading: "A School That Feels Like Home",
    copy: "Choosing a school is not only about books and classrooms. It is about finding a place where children are noticed, guided and encouraged every day.",
    points: [
      { icon: "HeartHandshake", label: "Caring environment" },
      { icon: "ShieldCheck", label: "Good manners and discipline" },
      { icon: "Smile", label: "Confidence from early learning" },
    ],
  },

  admissions: {
    heading: "Admission Enquiry",
    copy: "Parents can contact the school to know more about classes, admission process, fees and required documents.",
    ctaText: "Start your child's admission enquiry today.",
    steps: [
      { title: "Contact the school", description: "Reach out by phone or the enquiry form." },
      { title: "Visit and discuss", description: "Meet us and see the school in person." },
      { title: "Submit details", description: "Share your child's information and documents." },
      { title: "Confirm admission", description: "Complete the process and join the school." },
    ],
    form: {
      fields: {
        parentName: "Parent Name",
        studentName: "Student Name",
        classInterested: "Class Interested",
        phone: "Phone Number",
        message: "Message",
      },
      submitLabel: "Submit Enquiry",
      successMessage:
        "Thank you. Your enquiry has been received. The school will contact you soon.",
    },
  },

  gallery: {
    heading: "School Moments",
    intro: "A glimpse of school trips, classroom creativity and special celebrations.",
    groups: [
      {
        label: "Trips",
        sticker: "Trips",
        items: [
          {
            label: "Learning trip with classmates",
            image: "/gallery/trip-water-park.jpg",
            alt: "Abraham Public College students posing together during a school trip",
          },
          {
            label: "Outdoor visit and group day",
            image: "/gallery/trip-nature-hut.jpg",
            alt: "Students and teacher seated together during a school outing",
          },
        ],
      },
      {
        label: "Activities",
        sticker: "Activities",
        items: [
          {
            label: "Colouring activity",
            image: "/gallery/activity-colouring-class.jpg",
            alt: "Young students holding completed colouring sheets in class",
          },
          {
            label: "Art showcase",
            image: "/gallery/activity-art-showcase.jpg",
            alt: "Students showing their artwork in school uniform",
          },
          {
            label: "Creative classroom work",
            image: "/gallery/activity-classroom-art.jpg",
            alt: "Children displaying art sheets during a classroom activity",
          },
          {
            label: "Christmas celebration",
            image: "/gallery/activity-christmas-celebration.jpg",
            alt: "Students gathered around Christmas decorations at school",
          },
          {
            label: "Mothers Day celebration",
            image: "/gallery/activity-mothers-day.jpg",
            alt: "Student and teacher posing with a Mothers Day celebration frame",
          },
        ],
      },
    ],
  },

  contact: {
    heading: "Contact Abraham Public College",
    address: "Abraham Public College, Lucknow, Uttar Pradesh",
    phone: "Add phone number here",
    email: "Add email here",
    timings: "Add timings here",
    directionsLabel: "Get Directions",
    callLabel: "Call School",
  },

  footer: {
    name: "Abraham Public College",
    tagline: "Simple Learning. Strong Values.",
    quickLinks: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Admissions", href: "#admissions" },
      { label: "Contact", href: "#contact" },
    ],
    contactPlaceholder: "Add phone / email here",
    copyright: "© 2026 Abraham Public College. All rights reserved.",
  },
};
