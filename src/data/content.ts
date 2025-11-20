import { html, title } from "framer-motion/m";

export const MAIN_CARDS = [
  {
    title: "HTML",
    description: "The structure of the web - learn how it all began.",
    href: "/html",
  },
  {
    title: "CSS",
    description: "The design language of the web.",
    href: "/css",
  },
  {
    title: "JavaScript",
    description: "Interactivity, logic, and dynamic behavior.",
    href: "/javascript",
  },
];

export const TIMELINE_DATA = {
  html: [
    {
      year: "1991",
      title: "Birth of HTML",
      text: "Tim Berners-Lee creates the first version of HTML.",
      image: "/images/html-headings.png",
    },
    {
      year: "1995",
      title: "HTML 2.0",
      text: "Standardization begins...",
      image: "/images/HTML-5-Badge-Logo.png",
    },
    {
      year: "1997",
      title: "HTML 3.2",
      text: "Tables, applets, layout improvements...",
      image: "/images/html-as-div.jpg",
    },
  ],
  css: [
    {
      year: "1996",
      title: "CSS1 Released",
      text: "First official CSS specification.",
      image: "/images/css/css1.png",
    },
    {
      year: "1998",
      title: "CSS2",
      text: "Introduced positioning, z-index, media types.",
      image: "/images/css/css2.png",
    },
    {
      year: "2011",
      title: "CSS3 Modules",
      text: "Expanded styling with animations, flexbox, grid.",
      image: "/images/css/css3.png",
    },
  ],
  javascript: [
    {
      year: "1995",
      title: "JavaScript Created",
      text: "Brendan Eich creates JavaScript in 10 days.",
      image: "/images/js/1995.png",
      code: "console.log('Hello JS!')",
    },
    {
      year: "1997",
      title: "ECMAScript 1",
      text: "First official standardization of JavaScript.",
      image: "/images/js/es1.png",
    },
    {
      year: "2015",
      title: "ES6 / ES2015",
      text: "Major rewrite: classes, arrow functions, let/const.",
      image: "/images/js/es6.png",
      code: "const sum = (a,b)=>a+b;",
    },
  ],
};

export const TECH_DESCRIPTIONS = {
  html: `HTML (HyperText Markup Language) is the structural backbone of the entire web. It defines the content and establishes the meaning of elements on a page. HTML syntax is based on "tags" such as <header>, <nav>, <p>, and <div>, each representing a different type of content or structural role. Early HTML versions relied heavily on generic <div> tags for layout, but HTML5 introduced more semantic elements that make code clearer and improve accessibility and SEO. Over time, HTML evolved from a document-focused format into a foundation capable of embedding video, audio, canvas drawing, and application-level features.


HTML can be written by hand or generated dynamically by JavaScript frameworks. Whether displaying text, creating forms, or embedding images, HTML answers the question "What is this content?" and is the first building block in assembling modern web experiences. When combined with CSS for styling and JavaScript for interactivity, HTML forms part of a powerful trio that defines structure, design, and behavior of the web.`,

  css: `CSS (Cascading Style Sheets) controls the presentation layer of a website. It determines colors, layouts, spacing, typography, and animations. CSS can be applied inline directly on an HTML element, inside a <style> tag, or through external .css files—each method having its own purpose depending on scale and maintainability. External CSS files are the most common and promote separation of concerns, making large projects easier to manage.


Modern CSS includes modules such as Flexbox and Grid for advanced layout control, variables for theme consistency, and keyframe animations for motion design. Over time, CSS evolved from simple color changes to a rich ecosystem capable of responsive design, dark mode, and smooth user interactions. Working alongside HTML and JavaScript, CSS answers "How does this look?" and transforms raw structure into polished experiences.`,

  javascript: `JavaScript provides behavior and logic for web applications. It enables the browser to react to user interactions, update content dynamically, and communicate with servers without reloading the page. Once limited to small effects like button clicks or image swaps, JavaScript today powers full-scale applications thanks to advancements such as ECMAScript updates, Node.js, and modern frameworks.


JavaScript works hand-in-hand with HTML and CSS: HTML provides the structure, CSS defines the style, and JavaScript modifies both in real time through the DOM. This trio creates the foundation of interactive web development. Over its evolution, JavaScript expanded from a scripting tool into one of the most influential programming languages in the world, powering everything from front‑end UI to backend servers. It answers the question "What can this do?" and gives life to otherwise static pages.`,
};
