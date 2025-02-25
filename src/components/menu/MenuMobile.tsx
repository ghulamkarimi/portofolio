import { useState } from "react";
import { X, AlignJustify } from "lucide-react";
import { NavLink, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../toggleLanguage/LanguageSwitcher";

const MenuMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { lang } = useParams();
  const { t } = useTranslation();

  return (
    <div className="relative w-full">
      {/* Navbar */}
      <div className="flex items-center justify-between w-full px-4 bg-white shadow-md">
        {/* Logo */}
        <h1 className="text-center text-3xl font-bold">ai-webkraft</h1>
        <LanguageSwitcher />
        {/* Menü-Button mit Animation */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-black text-3xl p-2 transition-transform duration-300 ease-in-out"
        >
          {isOpen ? (
            <X
              size={32}
              className="transform rotate-90 transition-transform duration-300 ease-in-out"
            />
          ) : (
            <AlignJustify
              size={32}
              className="transition-transform duration-300 ease-in-out"
            />
          )}
        </button>
      </div>

      {/* Dropdown-Menü */}
      <div
        className={`absolute top-full left-0 w-full bg-white shadow-lg rounded-b-lg z-50 transition-all duration-500 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <ul className="mt-4 space-y-4 text-center text-lg font-medium">
          <li className="hover:text-blue-500 cursor-pointer transition-all duration-300">
            <NavLink to={`/${lang}/`}>{t("menu.home")}</NavLink>
          </li>
          <li className="hover:text-blue-500 cursor-pointer transition-all duration-300">
            <NavLink to={`/${lang}/about`}>{t("menu.about")}</NavLink>
          </li>

          <li className="hover:text-blue-500 cursor-pointer transition-all duration-300">
            <NavLink to={`/${lang}/portfolio`}>{t("menu.portfolio")}</NavLink>
          </li>
          <li className="hover:text-blue-500 cursor-pointer transition-all duration-300">
            <NavLink to={`/${lang}/contact`}>{t("menu.contact")}</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuMobile;
