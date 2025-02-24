import { useSelector } from "react-redux";
import { RootState } from "../feature/store";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import i18next

const Footer = () => {
  const { isDesktop } = useSelector((state: RootState) => state.mode);
  const { t } = useTranslation(); // useTranslation Hook für Mehrsprachigkeit

  return (
    <footer className="text-white bg-black px-6 py-8 md:px-12 lg:px-32">
      <ul className="flex justify-center gap-6 text-sm">
        <li className="hover:underline">
          <NavLink to="/">{t("footer.home")}</NavLink>
        </li>
        <li className="hover:underline">
          <NavLink to="/about">{t("footer.about")}</NavLink>
        </li>
        <li className="hover:underline">
          <NavLink to="/portfolio">{t("footer.portfolio")}</NavLink>
        </li>
        <li className="hover:underline">
          <NavLink to="/contact">{t("footer.contact")}</NavLink>
        </li>
      </ul>

      <div className="border-t border-gray-300 my-6"></div>

      <div
        className={`flex justify-between items-center text-sm text-white ${
          isDesktop ? "md:flex-row" : "flex-col"
        }`}
      >
        <p>{t("footer.copyright")}</p>
        <div className="flex gap-4">
          <a href="/terms" className="hover:underline">
            {t("footer.terms")}
          </a>
          <a href="/privacy" className="hover:underline">
            {t("footer.privacy")}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
