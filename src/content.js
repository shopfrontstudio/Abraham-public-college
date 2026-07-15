// All editable website text lives here. Update this file to change copy
// without touching component code. Fields named "icon" reference keys in
// src/lib/icons.jsx.
export const content = {
  school: {
    nameTop: "ABRAHAM",
    nameBottom: "PUBLIC COLLEGE",
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
    welcomePill: "Welcome To",
    headlineLead: "Simple Learning.",
    headlineAccent: "Strong Values.",
    headline: "Simple Learning. Strong Values.",
    subheadline:
      "Abraham Public College is a local school in Lucknow focused on discipline, basic education, care and personal attention for every child.",
    primaryCta: "Admission Enquiry",
    secondaryCta: "Contact School",
    trustBadges: [
      { icon: "MapPin", label: "Local School in Lucknow" },
      { icon: "Users", label: "Personal Attention" },
      { icon: "ShieldCheck", label: "Discipline & Good Habits" },
      { icon: "Heart", label: "Parent Friendly" },
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
    label: "About Us",
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
    promise: {
      title: "Our Promise",
      quote: "Our aim is to help every child learn with discipline, confidence and care.",
      points: [
        { icon: "ShieldCheck", label: "Discipline" },
        { icon: "HeartHandshake", label: "Care" },
        { icon: "Handshake", label: "Respect" },
        { icon: "Star", label: "Confidence" },
      ],
    },
  },

  approach: {
    label: "What We Focus On",
    heading: "What We Focus On",
    items: [
      {
        icon: "BookOpen",
        accent: "blue",
        title: "Basic Education",
        description:
          "Helping children build strong foundations in reading, writing, numbers and everyday learning.",
      },
      {
        icon: "ShieldCheck",
        accent: "green",
        title: "Discipline & Good Habits",
        description:
          "Encouraging punctuality, respect, cleanliness and responsible behaviour.",
      },
      {
        icon: "HeartHandshake",
        accent: "gold",
        title: "Personal Attention",
        description: "Supporting each child with care and guidance.",
      },
      {
        icon: "Users",
        accent: "maroon",
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
    subtitle: "Start your child's admission enquiry today.",
    copy: "Parents can contact the school to know more about classes, admission process, fees and required documents.",
    ctaText: "Start your child's admission enquiry today.",
    steps: [
      "Contact the school",
      "Visit and discuss",
      "Submit details",
      "Confirm admission",
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
    categories: [
      {
        label: "School Building",
        accent: "navy",
        items: [
          { label: "Campus view 01", image: "/gallery/school-building-01.jpg", alt: "Abraham Public College campus building and garden" },
          { label: "Campus walkway", image: "/gallery/school-building-02.jpg", alt: "School walkway with bicycles and greenery" },
          { label: "School lawn", image: "/gallery/school-building-03.jpg", alt: "Open school lawn surrounded by greenery" },
          { label: "Campus garden", image: "/gallery/school-building-04.jpg", alt: "School building seen behind a landscaped garden" },
          { label: "Play area", image: "/gallery/school-building-05.jpg", alt: "Outdoor play area on the school campus" },
          { label: "Green campus", image: "/gallery/school-building-06.jpg", alt: "Green campus grounds at Abraham Public College" },
          { label: "Front garden view", image: "/gallery/school-building-07.jpg", alt: "Front garden and school building view" },
        ],
      },
      {
        label: "Classroom",
        accent: "maroon",
        items: [
          { label: "Classroom learning 01", image: "/gallery/classroom-01.jpg", alt: "Students seated together in a classroom" },
          { label: "Classroom learning 02", image: "/gallery/classroom-02.jpg", alt: "Students looking back during a classroom lesson" },
          { label: "Writing practice", image: "/gallery/classroom-03.jpg", alt: "Students writing at classroom desks" },
          { label: "Board lesson", image: "/gallery/classroom-04.jpg", alt: "Students participating in a blackboard lesson" },
          { label: "Focused class", image: "/gallery/classroom-05.jpg", alt: "Students focused on a classroom blackboard" },
          { label: "Group lesson", image: "/gallery/classroom-06.jpg", alt: "Teacher and students during a classroom session" },
          { label: "Active classroom", image: "/gallery/classroom-07.jpg", alt: "Students studying together in class" },
          { label: "Classroom rows", image: "/gallery/classroom-08.jpg", alt: "Rows of students seated in class" },
          { label: "Notebook work", image: "/gallery/classroom-09.jpg", alt: "Student writing carefully in a notebook" },
          { label: "Class discussion", image: "/gallery/classroom-10.jpg", alt: "Students gathered during a class discussion" },
          { label: "Reading aloud", image: "/gallery/classroom-11.jpg", alt: "Students reading aloud near the classroom board" },
          { label: "Desk work", image: "/gallery/classroom-12.jpg", alt: "Young students working at a shared desk" },
          { label: "Peer learning", image: "/gallery/classroom-13.jpg", alt: "Students learning together at desks" },
          { label: "Class recitation", image: "/gallery/classroom-14.jpg", alt: "Students reciting near the blackboard" },
          { label: "Teacher guidance", image: "/gallery/classroom-15.jpg", alt: "Teacher guiding students during classwork" },
          { label: "Creative notebook", image: "/gallery/classroom-16.jpg", alt: "Student completing creative notebook work" },
          { label: "Teacher support", image: "/gallery/classroom-17.jpg", alt: "Teacher supporting students with classroom work" },
          { label: "Board activity", image: "/gallery/classroom-18.jpg", alt: "Students and teacher working near the classroom board" },
          { label: "Classroom session", image: "/gallery/classroom-19.jpg", alt: "Students seated during a classroom session" },
          { label: "Blackboard lesson", image: "/gallery/classroom-20.jpg", alt: "Blackboard lesson with students seated in class" },
          { label: "Class participation", image: "/gallery/classroom-21.jpg", alt: "Students participating in a classroom activity" },
          { label: "Lesson in progress", image: "/gallery/classroom-22.jpg", alt: "Teacher leading a lesson at the board" },
          { label: "Focused desk work", image: "/gallery/classroom-23.jpg", alt: "Student focused on desk work" },
          { label: "Class activity", image: "/gallery/classroom-24.jpg", alt: "Students working together during class" },
          { label: "Learning moment", image: "/gallery/classroom-25.jpg", alt: "Teacher and students during an active learning moment" },
        ],
      },
      {
        label: "Students",
        accent: "gold",
        items: [
          { label: "Student moment 01", image: "/gallery/students-01.jpg", alt: "Students smiling and relaxing at classroom desks" },
          { label: "Student portrait 01", image: "/gallery/students-02.jpg", alt: "Smiling student portrait in class" },
          { label: "Student portrait 02", image: "/gallery/students-03.jpg", alt: "Young student in school uniform" },
          { label: "Friends in class", image: "/gallery/students-04.jpg", alt: "Two young students smiling in class" },
          { label: "Classmates together", image: "/gallery/students-05.jpg", alt: "Students looking toward the camera from their desks" },
          { label: "Student group", image: "/gallery/students-06.jpg", alt: "Group of students seated together in class" },
          { label: "Student portrait 03", image: "/gallery/students-07.jpg", alt: "Student standing in school uniform" },
          { label: "Confident student", image: "/gallery/students-08.jpg", alt: "Student standing confidently in front of a classroom" },
          { label: "Learning corner", image: "/gallery/students-09.jpg", alt: "Students seated near a play and learning corner" },
          { label: "Classroom friends", image: "/gallery/students-10.jpg", alt: "Students gathered together during class" },
          { label: "Student portrait 04", image: "/gallery/students-11.jpg", alt: "Student in school uniform standing in class" },
          { label: "Student outdoors", image: "/gallery/students-12.jpg", alt: "Young student standing outdoors on campus" },
          { label: "Students at desks", image: "/gallery/students-13.jpg", alt: "Students sitting together at classroom desks" },
          { label: "Happy classmates", image: "/gallery/students-14.jpg", alt: "Young classmates smiling in the classroom" },
          { label: "Quiet classroom moment", image: "/gallery/students-15.jpg", alt: "Students looking toward the camera from behind their desks" },
          { label: "Student close-up", image: "/gallery/students-16.jpg", alt: "Close-up portrait of a student in uniform" },
          { label: "Shared desk work", image: "/gallery/students-17.jpg", alt: "Students working together at a shared desk" },
          { label: "Classroom group", image: "/gallery/students-18.jpg", alt: "Students seated together near a classroom window" },
          { label: "Thoughtful student", image: "/gallery/students-19.jpg", alt: "Student looking thoughtfully during class" },
        ],
      },
      {
        label: "Trips",
        accent: "green",
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
        accent: "blue",
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
    cards: [
      { icon: "MapPin", label: "Address", value: "Abraham Public College, Lucknow, Uttar Pradesh" },
      { icon: "Phone", label: "Phone", value: "Add phone number here" },
      { icon: "Mail", label: "Email", value: "Add email here" },
      { icon: "Clock", label: "Timings", value: "Add timings here" },
    ],
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
    quickLinksTitle: "Quick Links",
    quickLinks: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Admissions", href: "#admissions" },
      { label: "Contact", href: "#contact" },
    ],
    contactPlaceholder: "Add phone / email here",
    copyright: "© 2026 Abraham Public College. All rights reserved.",
    socials: [
      { icon: "Globe", label: "Website", href: "#" },
      { icon: "Camera", label: "Photos", href: "#" },
      { icon: "MapPin", label: "Location", href: "#" },
    ],
  },
};
