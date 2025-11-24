import styles from "../page.module.scss";

export default function JavascriptAbout() {
  return (
    <section className={styles.descriptionSection}>
      <br />
      <h2 className={styles.paraTitle}>About JavaScript</h2>
      <>
        <p>
          JavaScript adds interactivity, logic, and dynamic behavior to web
          pages. It works with the browser to respond to clicks, update content,
          fetch data, and control animations.
        </p>
        <br />

        <p>JavaScript answers the question: “What can this do?”</p>
        <br />

        <p
          style={{
            marginTop: "1rem",
            color: "var(--darkorange)",
            fontWeight: "bold",
          }}
        >
          Important beginner concepts include:
        </p>
        <br />

        <ul>
          <li>
            <strong>Variables</strong> – Used to store values. Modern JavaScript
            uses "let" and "const".
          </li>
          <br />
          <li>
            <strong>Data Types</strong> – Common ones are strings, numbers,
            booleans, arrays, objects, and null/undefined.
          </li>
          <br />
          <li>
            <strong>Functions</strong> – Reusable blocks of code. They take
            input, perform work, and return output.
          </li>
          <br />
          <li>
            <strong>Objects</strong> – Collections of key/value pairs. They
            represent real-world things.
          </li>
          <br />
          <li>
            <strong>Arrays</strong> – Ordered lists of data.
          </li>
          <br />
          <li>
            <strong>DOM Manipulation</strong> – Changing HTML content or styling
            using JavaScript.
          </li>
          <br />
          <li>
            <strong>Events</strong> – Code that runs when something happens,
            like a button click.
          </li>
          <br />
          <li>
            <strong>JSON</strong> – A text format for sending and storing data.
          </li>
        </ul>
        <br />

        <p
          style={{
            marginTop: "1rem",
            color: "var(--darkorange)",
            fontWeight: "bold",
          }}
        >
          Here are a few beginner-friendly JavaScript examples:
        </p>
        <br />

        <pre style={{ whiteSpace: "pre-wrap" }}>
          {`
// A simple function
function greet(name) {
  return "Hello " + name;
}

// Variables
const age = 25;
let counter = 0;

// Arrays
const colors = ["red", "blue", "green"];

// Objects
const user = {
  name: "Alice",
  age: 30
};

// Arrow function (ES6)
const add = (a, b) => a + b;

// DOM example
document.querySelector("#btn").addEventListener("click", () => {
  console.log("Button clicked!");
});
`}
        </pre>
        <br />

        <p
          style={{
            marginTop: "1rem",
            color: "var(--darkorange)",
            fontWeight: "bold",
          }}
        >
          Modern JavaScript includes helpful features like:
        </p>
        <br />

        <ul>
          <li>
            <strong>Optional Chaining</strong> – Safely access nested
            properties: user?.profile?.email
          </li>
          <br />
          <li>
            <strong>Nullish Coalescing</strong> – Default values: name ??
            "Guest"
          </li>
          <br />
          <li>
            <strong>Async/Await</strong> – Cleaner asynchronous code for
            fetching data.
          </li>
        </ul>
        <br />

        <pre style={{ whiteSpace: "pre-wrap" }}>
          {`
async function loadData() {
  const res = await fetch("/api/data");
  const json = await res.json();
  console.log(json);
}
`}
        </pre>
        <br />

        <p>
          JavaScript brings websites to life and lets developers create
          everything from simple interactions to full web applications.
        </p>
      </>
    </section>
  );
}
