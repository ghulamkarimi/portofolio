import i18n from "i18next";
import { initReactI18next } from "react-i18next";


import en from "../locales/en.json";
import de from "../locales/de.json";
import fa from "../locales/fa.json";
import ar from "../locales/ar.json";
import tr from "../locales/tr.json";

const savedLang = localStorage.getItem("language") || "de";

const resources = {
  en: { translation: en },
  de: { translation: de },
  fa: { translation: fa },
  ar: { translation: ar },
  tr:{translation: tr}
};

i18n.use(initReactI18next).init({
  resources,
  lng: savedLang,
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
