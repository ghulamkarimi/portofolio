import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

const languages = [
  { code: "en", label: "English", flag: "/en.png" },
  { code: "de", label: "Deutsch", flag: "/de.png" },
  { code: "fa", label: "فارسی", flag: "/ir.png" },
  { code: "ar", label: "العربية", flag: "/ar.png" },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const { lang } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (newLang: string) => {
    setIsOpen(false); // Menü immer schließen
    if (newLang !== lang) {
      navigate(`/${newLang}`);
      i18n.changeLanguage(newLang);
    }
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-4 gap-3 py-2 bg-white border rounded-lg shadow-md cursor-pointer text-lg hover:bg-gray-100 transition duration-200"
      >
        <img
          src={languages.find((l) => l.code === i18n.language)?.flag || "/flags/en.png"}
          alt={i18n.language}
          className="w-6 h-4 rounded-sm"
        />
        {languages.find((l) => l.code === i18n.language)?.label}
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-40 bg-white border rounded-lg shadow-lg overflow-hidden">
          {languages.map(({ code, label, flag }) => (
            <button
              key={code}
              onClick={() => changeLanguage(code)}
              className="flex items-center w-full gap-3 px-4 py-2 text-left hover:bg-gray-100 transition duration-200"
            >
              <img src={flag} alt={label} className="w-6 h-4 rounded-sm" />
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
