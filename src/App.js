import React, { useState, useEffect } from "react";
import styles from "./App.module.css";

function App() {
  const MERGE_ALL = "mergeAll";
  const PRESERVE_PUNCTUATION = "preservePunctuation";

  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [processingMode, setProcessingMode] = useState(MERGE_ALL);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add(styles.darkBody);
    } else {
      document.body.classList.remove(styles.darkBody);
    }
  }, [darkMode]);

  const joinLines = () => {
    // Split the text into paragraphs (empty lines as separators)
    const paragraphs = inputText.split(/\n\n+/);

    const processedParagraphs = paragraphs.map((paragraph) => {
      if (processingMode === MERGE_ALL) {
        // Join all lines within a paragraph regardless of punctuation
        return paragraph.replace(/\n/g, " ");
      } else if (processingMode === PRESERVE_PUNCTUATION) {
        // Only join lines within a paragraph that don't end with dot, exclamation mark, or question mark
        return paragraph.replace(/([^.!?])\n/g, "$1 ");
      } else {
        return "Something off is going on!";
      }
    });

    // Join the paragraphs back with double newlines
    const result = processedParagraphs.join("\n\n");

    setOutputText(result);
  };

  return (
    <div className={`${styles.container} ${darkMode ? styles.darkMode : ""}`}>
      <div className={styles.themeToggle}>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={styles.themeButton}
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
      <h1 className={styles.header}>Text Line Joiner</h1>
      <div className={styles.processingOptions}>
        <label htmlFor="processingMode">Processing Mode:</label>
        <select
          id="processingMode"
          className={styles.select}
          value={processingMode}
          onChange={(e) => setProcessingMode(e.target.value)}
        >
          <option value={MERGE_ALL}>
            Merge All Lines (ideal for one paragraph)
          </option>
          <option value={PRESERVE_PUNCTUATION}>Preserve Sentence Breaks</option>
        </select>
      </div>
      <p>Paste text with broken lines:</p>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        className={styles.textarea}
        placeholder="Paste your text here..."
      />
      <button onClick={joinLines} className={styles.button}>
        Join Lines
      </button>
      <p>Result:</p>
      <textarea
        value={outputText}
        readOnly
        className={styles.textarea}
        placeholder="Your joined text will appear here..."
      />
    </div>
  );
}

export default App;
