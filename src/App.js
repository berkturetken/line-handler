import React, { useState, useEffect } from 'react';
import styles from './App.module.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  
  // Apply dark mode class to the body element
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
    
    // Process each paragraph separately
    const processedParagraphs = paragraphs.map(paragraph => {
      // Only join lines within a paragraph that don't end with punctuation
      return paragraph.replace(/([^.!?])\n/g, '$1 ');
    });
    
    // Join the paragraphs back with double newlines
    const result = processedParagraphs.join('\n\n');
    
    setOutputText(result);
  };

  return (
    <div className={`${styles.container} ${darkMode ? styles.darkMode : ''}`}>
      <div className={styles.themeToggle}>
        <button 
          onClick={() => setDarkMode(!darkMode)} 
          className={styles.themeButton}
        >
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>
      <h1 className={styles.header}>Text Line Joiner</h1>
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
        placeholder="Your joined text will appear here"
      />
    </div>
  );
}

export default App;