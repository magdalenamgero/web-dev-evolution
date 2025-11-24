import styles from "../page.module.scss";

export default function HtmlAbout() {
  return (
    <section className={styles.descriptionSection}>
      <br />
      <h2 className={styles.paraTitle}>About HTML</h2>
      <>
        <p>
          HTML stands for HyperText Markup Language. It is the basic structure
          and skeleton of every page on the web. While CSS controls appearance
          and JavaScript controls behavior, HTML defines what each piece of
          content actually is.
        </p>
        <br />
        <p>HTML answers the question: “What is this content supposed to be?”</p>
        <br />
        <p
          style={{
            marginTop: "1rem",
            color: "var(--darkorange)",
            fontWeight: "bold",
          }}
        >
          Some of the most important building blocks include:
        </p>
        <br />
        <ul>
          <li>
            <strong>Divs</strong> – General-purpose containers used to group or
            structure content. They act like empty boxes you can style or
            organize.
          </li>
          <br />
          <li>
            <strong>Headings (h1–h6)</strong> – Define titles and sections.
            Search engines and assistive tools rely on them to understand page
            structure.
          </li>
          <br />
          <li>
            <strong>Paragraphs</strong> – Used for regular blocks of text.
          </li>
          <br />
          <li>
            <strong>Links</strong> – Create navigation between pages or external
            sites.
          </li>
          <br />
          <li>
            <strong>Images</strong> – Display pictures and graphics.
          </li>
          <br />
          <li>
            <strong>Lists</strong> – Useful for menus, steps, or grouped
            information.
          </li>
          <br />
          <li>
            <strong>Buttons</strong> – Trigger actions, often combined with
            JavaScript.
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
          Modern HTML encourages the use of semantic elements. These describe
          the meaning of content rather than just its appearance:
        </p>
        <br />
        <ul>
          <li>
            <strong>"header"</strong> – A page or section header, usually
            containing a title or navigation.
          </li>
          <br />
          <li>
            <strong>"nav"</strong> – A dedicated area for menus or navigation
            links.
          </li>
          <br />
          <li>
            <strong>"section"</strong> – A meaningful grouping of related
            content.
          </li>
          <br />
          <li>
            <strong>"article"</strong> – A self-contained piece of content, like
            a post or card.
          </li>
          <br />
          <li>
            <strong>"footer"</strong> – Bottom information, credits, or links.
          </li>
        </ul>
        <br />
        <p>
          By using these elements, HTML becomes easier to read, improves
          accessibility for assistive technology, and provides better structure
          for search engines.
        </p>
        <br />
        <p>
          A typical HTML document follows a predictable skeleton, even though
          the browser doesn’t show it directly:
        </p>

        <pre style={{ whiteSpace: "pre-wrap" }}>
          {`
<html>
  <head>
    Metadata, title, and links to stylesheets
  </head>
  <body>
    All visible content appears here
  </body>
</html>
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
          When combined with CSS and JavaScript, HTML becomes the foundation for
          all modern web experiences:
        </p>
        <br />
        <ul>
          <li>HTML provides structure</li>
          <li>CSS provides design</li>
          <li>JavaScript provides interactivity</li>
        </ul>
        <br />
        <p>
          Understanding these basics helps beginners make sense of how websites
          are built and how each layer works together.
        </p>
      </>
    </section>
  );
}
