import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import styles from "./App.module.css";

function App() {
  const { t, i18n } = useTranslation();
  const MERGE_ALL = "mergeAll";
  const PRESERVE_PUNCTUATION = "preservePunctuation";

  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [theme, setTheme] = useState("dark"); // options: 'light', 'dark', 'pink'
  const [processingMode, setProcessingMode] = useState(MERGE_ALL);
  const [copySuccess, setCopySuccess] = useState("");

  useEffect(() => {
    document.body.classList.remove(styles.darkBody, styles.pinkBody); // Remove all theme classes first
    
    // Add the appropriate theme class
    if (theme === "dark") {
      document.body.classList.add(styles.darkBody);
    } else if (theme === "pink") {
      document.body.classList.add(styles.pinkBody);
    }
  }, [theme]);

  useEffect(() => {
    /*
      Things to update:
      1. Update HTML lang attribute when language changes
      2. Update page title
      3. Update meta description
    */
    document.documentElement.lang = i18n.language; 
    document.title = t('app.title'); 
    const metaDescription = document.querySelector('meta[name="description"]'); 
    if (metaDescription) {
      metaDescription.setAttribute('content', t('app.description'));
    }
  }, [i18n.language, t]);

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

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(outputText);
      setCopySuccess(t('messages.copied'))
      setTimeout(() => setCopySuccess(""), 2000);
    } catch (err) {
      setCopySuccess(t('messages.copyFailed'));
      setTimeout(() => setCopySuccess(""), 2000);
    }
  }

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={`${styles.container} ${theme === "dark" ? styles.darkMode : ""} ${theme === "pink" ? styles.pinkMode : ""}`}>
      <div className={styles.themeToggle}>
        <div className={styles.themeSelector}>
          <label htmlFor="theme">{t('theme.label')}:</label>
          <select
            id="theme"
            className={styles.select}
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
          >
            <option value="light">{t('theme.light')}</option>
            <option value="dark">{t('theme.dark')}</option>
            <option value="pink">{t('theme.pink')}</option>
          </select>
        </div>
        <div className={styles.languageSelector}>
          <label htmlFor="language">{t('language.label')}:</label>
          <select
            id="language"
            className={styles.select}
            value={i18n.language}
            onChange={(e) => changeLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="tr">Türkçe</option>
            <option value="de">Deutsch</option>
          </select>
        </div>
      </div>
      <h1 className={styles.header}>{t('app.title')}</h1>
      <div className={styles.processingOptions}>
        <label htmlFor="processingMode">{t('processingMode.label')}</label>
        <select
          id="processingMode"
          className={styles.select}
          value={processingMode}
          onChange={(e) => setProcessingMode(e.target.value)}
        >
          <option value={MERGE_ALL}>
            {t('processingMode.mergeAll')}
          </option>
          <option value={PRESERVE_PUNCTUATION}>{t('processingMode.preservePunctuation')}</option>
        </select>
      </div>
      <p>{t('input.label')}</p>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        className={styles.textarea}
        placeholder={t('input.placeholder')}
      />
      <button onClick={joinLines} className={styles.button}>
        {t('buttons.joinLines')}
      </button>
      <p>{t('output.label')}</p>
      <textarea
        value={outputText}
        readOnly
        className={styles.textarea}
        placeholder={t('output.placeholder')}
      />
      <button
        className={styles.button}
        onClick={handleCopy}
        disabled={!outputText}
      >
        {t('buttons.copy')}
      </button>
      {copySuccess && (
        <span className={styles.centeredMessage} style={{ color: "green" }}>{copySuccess}</span>
      )}
    </div>
  );
}

export default App;
