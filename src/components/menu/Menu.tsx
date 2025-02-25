import { useSelector } from "react-redux";
import { RootState } from "../../feature/store";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../toggleLanguage/LanguageSwitcher";

const Menu = () => {
  const { buttonColor } = useSelector((state: RootState) => state.mode);
  const navigate = useNavigate();
  const { lang } = useParams();
  const { t } = useTranslation(); // useTranslation Hook für Mehrsprachigkeit

  return (
    <div className="w-full">
      <div className="flex items-center justify-center gap-4 p-4">
        <h1 className="text-2xl font-bold">ai-webkraft</h1>

        <ul className="flex gap-3 items-center p-3 font-bold">
          <li className="hover:text-blue-400 cursor-pointer transition-all duration-300 ease-in-out">
            <NavLink to={`/${lang}/`}>{t("menu.home")}</NavLink>
          </li>
          <li className="hover:text-blue-400 cursor-pointer transition-all duration-300 ease-in-out">
            <NavLink to={`/${lang}/about`}>{t("menu.about")}</NavLink>
          </li>
          <li className="hover:text-blue-400 cursor-pointer transition-all duration-300 ease-in-out">
            <NavLink to={`/${lang}/portfolio`}>{t("menu.portfolio")}</NavLink>
          </li>
          <li className="hover:text-blue-400 cursor-pointer transition-all duration-300 ease-in-out">
            <NavLink to={`/${lang}/contact`}>{t("menu.contact")}</NavLink>
          </li>
        </ul>

        <button
          onClick={() => navigate(`/${lang}/contact`)}
          className="btn"
          style={{ backgroundColor: buttonColor }}
        >
          {t("menu.contactUs")}
        </button>

        <LanguageSwitcher />
      </div>
      <div className="border border-b-1" />
    </div>
  );
};

export default Menu;
