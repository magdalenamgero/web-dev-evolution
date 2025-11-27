// components/CodeRunner.tsx
"use client";

import { useState } from "react";

export default function CodeRunner({
  code,
  run,
}: {
  code: string;
  run: () => string | string[];
}) {
  const [output, setOutput] = useState<string | string[]>("");

  return (
    <div style={{ marginBottom: "1rem" }}>
      <pre
        style={{
          whiteSpace: "pre-wrap",
          background: "white",
          padding: "0.5rem",
          borderRadius: "8px",
        }}
      >
        {code}
      </pre>

      <button
        onClick={() => setOutput(run())}
        style={{
          padding: "0.4rem 0.8rem",
          background: "black",
          color: "white",
          borderRadius: "6px",
          cursor: "pointer",
          marginBottom: "0.5rem",
        }}
      >
        Run
      </button>

      {output && (
        <div
          style={{
            background: "#eee",
            padding: "0.5rem",
            borderRadius: "6px",
            fontFamily: "monospace",
          }}
        >
          {Array.isArray(output)
            ? output.map((line, i) => <div key={i}>{line}</div>)
            : output}
        </div>
      )}
    </div>
  );
}
