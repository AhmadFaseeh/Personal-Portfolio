const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 4, suffix: "+", label: "Satisfied Clients" },
  { value: 8, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    name: "React"
  },
  {
    imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    name: "JavaScript"
  },
  {
    imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    name: "Node.js"
  },
  {
    imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    name: "Next.js"
  },
  {
    imgPath: "https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png",
    name: "Vercel"
  },
  {
    imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg",
    name: "Netlify"
  },
  {
    imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    name: "GitHub"
  },
  {
    imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    name: "MongoDB"
  },
  {
    imgPath: "https://appwrite.io/images/logomark/logo.png",
    name: "Appwrite"
  },
  {
    imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    name: "Tailwind CSS"
  },
  {
    imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    name: "Bootstrap"
  },
];
const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
   {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Ahmad's front-end development skills shine through responsive designs and clean code architecture. His work on the Anime Vault demonstrates mastery of modern web technologies and API integration.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Front-End Developer (React & Next.js)",
    date: "December 2024 - Present",
    responsibilities: [
      "Built Anime Vault (anime-vault-beryl-xi.vercel.app) using Next.js with infinite scroll and API integration for dynamic content loading.",
      "Developed responsive websites using React, Next.js, and Tailwind CSS for optimal mobile and desktop experiences.",
      "Created personal portfolio website showcasing projects with GSAP animations and user-friendly interface design.",
    ],
  },
  {
    review: "Ahmad demonstrated strong technical skills in WordPress development, successfully customizing websites and training chatbots to enhance user experience and customer engagement.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "WordPress Developer",
    date: "July 2024 - Present",
    responsibilities: [
      "Developed and customized WordPress websites using Elementor to meet client requirements and improve user experience.",
      "Integrated and configured plugins including WooCommerce, WPML, Yoast SEO, and Tidio.AI to extend functionality.",
      "Trained chatbots on customer questions to work as live agents, improving customer support.",
    ],
  },
  {
    review: "Ahmad's expertise in e-commerce platforms brought significant improvements to product visibility and customer engagement across Shopify and Alibaba platforms.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "E-commerce Developer (Shopify & Alibaba)",
    date: "2024 - Present",
    responsibilities: [
      "Developed and customized Shopify stores, managing themes, apps, and payment integrations.",
      "Uploaded and optimized product listings on Alibaba with accurate details, SEO keywords, and professional presentation.",
      "Improved product visibility and user experience across both platforms, increasing customer engagement and sales opportunities.",
    ],
  },
];
const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Ahmad. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Ahmad was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Ahmad was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Ahmad's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Ahmad is the ideal partner.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Ahmad was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client4.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Ahmad’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client5.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Ahmad was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
