import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/index.json';
import translationKAZ from './locales/kz/index.json';
import translationRU from './locales/ru/index.json';

// the translations
const resources = {
  en: { translation: translationEN },
  kaz: { translation: translationKAZ },
  ru: { translation: translationRU }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n instance to react-i18next.
  .init({
    resources,
    fallbackLng: 'kaz', // use en if detected lng is not available

    detection: {
      order: ['queryString', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage', 'cookie']
    },

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
