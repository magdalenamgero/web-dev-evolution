import styles from "../page.module.scss";

export default function CssAbout() {
  return (
    <section className={styles.descriptionSection}>
      <br />
      <h2 className={styles.paraTitle}>About CSS</h2>
      <>
        <p>
          CSS stands for Cascading Style Sheets. It controls the appearance and
          layout of a web page. While HTML provides structure, CSS determines
          colors, spacing, fonts, animations, and how elements are positioned.
        </p>
        <br />

        <p>CSS answers the question: “What should this look like?”</p>
        <br />

        <p
          style={{
            marginTop: "1rem",
            color: "var(--darkorange)",
            fontWeight: "bold",
          }}
        >
          Some of the most important CSS concepts include:
        </p>
        <br />

        <ul>
          <li>
            <strong>Selectors</strong> – Target elements to apply styles (for
            example: classes, IDs, tags).
          </li>
          <br />

          <li>
            <strong>Properties</strong> – The attributes you change, like color,
            margin, padding, width, height, or font-size.
          </li>
          <br />

          <li>
            <strong>Box Model</strong> – Every element has content, padding,
            border, and margin. Understanding this is key to layout.
          </li>
          <br />

          <li>
            <strong>Display</strong> – Controls layout behavior such as block,
            inline-block, inline, flex, or grid.
          </li>
          <br />

          <li>
            <strong>Positioning</strong> – Methods like relative, absolute,
            fixed, and sticky to place elements precisely.
          </li>
          <br />

          <li>
            <strong>Responsive Design</strong> – Making layouts adjust to screen
            size using media queries and flexible units.
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
          Modern CSS provides powerful layout tools like Flexbox and Grid:
        </p>
        <br />

        <pre style={{ whiteSpace: "pre-wrap" }}>
          {`
/* Flexbox example */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Grid example */
.grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
}
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
          Other useful features include:
        </p>
        <br />

        <ul>
          <li>
            <strong>CSS Variables</strong> – Reusable values for colors or
            spacing.
          </li>
          <br />
          <li>
            <strong>Transitions</strong> – Smooth changes for hover effects.
          </li>
          <br />
          <li>
            <strong>Animations</strong> – More advanced motion and keyframes.
          </li>
        </ul>
        <br />

        <p>
          CSS transforms plain HTML into a polished, visually appealing
          experience.
        </p>
      </>
    </section>
  );
}
