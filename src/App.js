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
    // This regex matches a non-newline character followed by a newline followed by a non-newline character
    // and replaces it with the first character + space + second character
    const result = inputText.replace(/([^\n])\n([^\n])/g, '$1 $2');
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