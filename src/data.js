// ====== YAHAN APNI DETAILS ======
export const ME = {
  name: "Syed Hassan",
  email: "abchassan2526@gmail.com",
  whatsapp: "+923153448608", // country code + number, bina + ke
};

export const PROJECTS = [
  {
    id: 1, cat: "E-commerce", title: "Novae Ecommerce Store", g: ["#FF8A65", "#FF5B3D"],
    img: "projects/Novae-ecommerce.png",
    desc: "Rebuilt a slow Shopify-style store in React with one-page checkout and instant search.",
    tags: ["React", "Stripe", "Next.js"], stats: [["+62%", "Checkout rate"], ["0.9s", "Load time"]],
    link: "https://syedhassanali-dev.github.io/novae-ecommerce/",
    github: "https://github.com/syedhassanali-dev/novae-ecommerce.git"
  },
  {
    id: 2, cat: "E-commerce", title: "Shopping Cart", g: ["#6C8BFF", "#2A55FF"],
    img: "projects/Shopping-cart.png",
    desc: "Analytics dashboard with live charts, roles and dark mode for a 3,000-user product.",
    tags: ["React", "Node", "Charts"], stats: [["3k+", "Active users"], ["-40%", "Support tickets"]],
    link: "https://shopping-cart000.netlify.app/",
    github: "https://github.com/syedhassanali-dev/react-mini-shopping-cart.git"
  },
  {
    id: 3, cat: "Food", title: "Zomato Food", g: ["#3DD6B0", "#12A38A"],
    img: "projects/Zomato-Landing-Page.png",
    desc: "Landing page with online booking that fills the clinic's calendar every week.",
    tags: ["React", "SEO", "Booking"], stats: [["+118", "Bookings / month"], ["#1", "Local Google rank"]],
    link: "https://visionary-boba-ce15a9.netlify.app/",
    github: "https://github.com/syedhassanali-dev/Zomato-Landing-Page.git"
  },
  {
    id: 4, cat: "Ai Game", title: "Ai Powered Game", g: ["#B28DFF", "#7A4DFF"],
    img: "projects/image.png",
    desc: "Property listing site with filters, map view and WhatsApp lead capture.",
    tags: ["React", "Maps", "API"], stats: [["4x", "More enquiries"], ["98", "Lighthouse score"]],
    link: "https://classy-torrone-ae5073.netlify.app/",
    github: "https://github.com/syedhassanali-dev/AI-Powered-Tic-Tac-Toe-Game.git"
  },
];

export const SERVICES = [
  { n: "Landing Page", p: "$250", note: "starting at", pts: ["1 high-converting page", "Mobile-first design", "Contact + WhatsApp form", "Delivered in 5 days"] },
  { n: "Business Website", p: "$600", note: "starting at", pop: true, pts: ["Up to 8 pages", "SEO + speed optimised", "Admin-editable content", "Analytics setup", "30 days free support"] },
  { n: "Custom Web App", p: "$1,500", note: "starting at", pts: ["Dashboard / SaaS / portal", "Auth + database + API", "Payments integration", "Weekly demo calls"] },
];

export const STEPS = [
  ["Free call", "15 minutes. You tell me your goal, I tell you honestly if I can help."],
  ["Plan + quote", "Fixed price, clear scope, timeline in writing. No surprise bills."],
  ["Build + preview", "You see a live link every few days and give feedback."],
  ["Launch + support", "I deploy, test everything and stay available after going live."],
];

export const REVIEWS = [
  ["Our bookings doubled in two months. He explained everything in simple words and delivered before the deadline.", "Dr. Ayesha K.", "Dental clinic owner", "#2A55FF"],
  ["Best developer I've hired. Fast replies, clean work, and the store finally loads instantly.", "Daniel R.", "Skincare brand founder", "#FF5B3D"],
  ["He understood the business problem, not just the code. Dashboard is exactly what my team needed.", "Hamza S.", "Startup CEO", "#12A38A"],
];

export const FAQ = [
  ["How long does a project take?", "Landing pages take about 5 days, business websites 2 to 3 weeks, and web apps 4 to 8 weeks depending on features."],
  ["How do payments work?", "50% to start, 50% on delivery. For bigger apps we split payment by milestones."],
  ["Will I be able to edit the site myself?", "Yes. I add a simple admin panel or CMS so you can change text and images without code."],
  ["Do you work with international clients?", "Yes. I work across time zones and communicate on WhatsApp, email or Google Meet."],
];

export const STACK = ["React", "Tailwind", "Canva", "VS Code", "Netlify", "Font Awesome", "DevTool", "Github", "Git"];
