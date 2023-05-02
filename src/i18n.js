import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { translationEn } from './locales/en';
import { translationUa } from './locales/ua';

i18n.use(initReactI18next).init({
  // we init with resources
  resources: {
    en: {
      translations: {
        ...translationEn,
      },
    },
    ua: {
      translations: {
        ...translationUa,
      },
    },
  },
  fallbackLng: 'en',
  debug: true,

  // have a common namespace used around the full app
  ns: ['translations'],
  defaultNS: 'translations',

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
