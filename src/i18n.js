import i18next from 'i18next';
import en from './locales/en.json';
import ru from './locales/ru.json';

const i18n = i18next.createInstance();

i18n.init({
  lng: 'ru',
  resources: {
    en: { translation: en },
    ru: { translation: ru },
  },
});

export default i18n;
