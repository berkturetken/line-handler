import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation resources
const resources = {
  en: {
    translation: {
      app: {
        title: "Line Joiner",
        description: "Join broken lines of text while preserving paragraph breaks. A simple, modern tool for cleaning up fragmented text."
      },
      theme: {
        light: "☀️ Light",
        dark: "🌙 Dark"
      },
      processingMode: {
        label: "Processing Mode:",
        mergeAll: "Merge All Lines (ideal for one paragraph)",
        preservePunctuation: "Preserve Sentence Breaks"
      },
      input: {
        label: "Paste text with broken lines:",
        placeholder: "Paste your text here..."
      },
      output: {
        label: "Result:",
        placeholder: "Your joined text will appear here..."
      },
      buttons: {
        joinLines: "Join Lines",
        copy: "Copy"
      },
      messages: {
        copied: "Copied!",
        copyFailed: "Failed to copy!"
      },
      language: {
        label: "Language"
      }
    }
  },
  tr: {
    translation: {
      app: {
        title: "Satır Birleştirici",
        description: "Paragraf yapısını koruyarak bölünmüş satırları birleştirin. Parçalanmış metinleri temizlemek için basit, modern bir araç."
      },
      theme: {
        light: "☀️ Açık",
        dark: "🌙 Koyu"
      },
      processingMode: {
        label: "İşlem Modu:",
        mergeAll: "Tüm Satırları Birleştir (tek paragraf için ideal)",
        preservePunctuation: "Cümle Sonlarını Koru"
      },
      input: {
        label: "Bölünmüş satırları içeren metni yapıştırın:",
        placeholder: "Metninizi buraya yapıştırın..."
      },
      output: {
        label: "Sonuç:",
        placeholder: "Birleştirilmiş metniniz burada görünecek..."
      },
      buttons: {
        joinLines: "Satırları Birleştir",
        copy: "Kopyala"
      },
      messages: {
        copied: "Kopyalandı!",
        copyFailed: "Kopyalama başarısız!"
      },
      language: {
        label: "Dil"
      }
    }
  },
  de: {
    translation: {
      app: {
        title: "Linien Verbinder",
        description: "Verbinden Sie unterbrochene Textzeilen unter Beibehaltung von Absatzumbrüchen. Ein einfaches, modernes Tool zum Aufräumen fragmentierter Texte."
      },
      theme: {
        light: "☀️ Hell",
        dark: "🌙 Dunkel"
      },
      processingMode: {
        label: "Verarbeitungsmodus:",
        mergeAll: "Alle Zeilen zusammenführen (ideal für einen Absatz)",
        preservePunctuation: "Satzumbrüche beibehalten"
      },
      input: {
        label: "Text mit unterbrochenen Zeilen einfügen:",
        placeholder: "Fügen Sie Ihren Text hier ein..."
      },
      output: {
        label: "Ergebnis:",
        placeholder: "Ihr verbundener Text wird hier angezeigt..."
      },
      buttons: {
        joinLines: "Zeilen Verbinden",
        copy: "Kopieren"
      },
      messages: {
        copied: "Kopiert!",
        copyFailed: "Kopieren fehlgeschlagen!"
      },
      language: {
        label: "Sprache"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language

    // safety net language: if a translation key is missing in the current language,
    // i18next will automatically use the fallback language.
    fallbackLng: 'en',
    interpolation: {
      // React already protects against XSS by automatically escaping content. So, no need for double escaping.
      escapeValue: false 
    }
  });

export default i18n;
