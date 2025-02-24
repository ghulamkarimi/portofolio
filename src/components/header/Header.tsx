import { useSelector } from "react-redux";
import { RootState } from "../../feature/store";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { buttonColor, isDesktop } = useSelector(
    (state: RootState) => state.mode
  );
  const { t } = useTranslation(); // i18next Hook für Übersetzungen

  return (
    <section
      className={`min-h-[60vh] flex ${
        isDesktop ? "flex-row" : "flex-col gap-10"
      } bg-gray-100`}
    >
      {/* Bildbereich - In Mobile oben, in Desktop links */}
      <div className="w-full flex justify-center">
        <img
          className="w-full h-auto object-cover"
          src="/header.webp"
          alt="Header Image"
        />
      </div>

      {/* Textbereich */}
      <div className="w-full max-w-[90%] px-4 text-center md:text-left flex flex-col">
        <h2
          className={`font-bold ${
            isDesktop ? "md:pt-20 lg:pt-28 text-4xl" : "text-3xl"
          }`}
        >
          {t("titlePart1")}{" "}
          <span 
            style={{ color: buttonColor }}
            className="relative font-bold inline-block pb-2"
          >
            {t("titlePart2")}
            {/* Mehrere Unterstreichungen als animierte SVGs */}
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 30"
              className="absolute -bottom-2 left-0 w-full"
              initial={{ strokeDasharray: 200, strokeDashoffset: 200 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              {/* Erste Welle - etwas höher gesetzt */}
              <path
                d="M5 12 Q 25 2, 45 12 T 85 12 T 125 12 T 165 12 T 195 12"
                stroke={buttonColor}
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
              />
              {/* Zweite Welle – etwas weiter unten */}
              <path
                d="M10 22 Q 40 10, 50 22 T 90 22 T 130 22 T 170 22 T 190 22"
                stroke={buttonColor}
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
              />
              {/* Dritte Linie – eine gerade Linie für mehr Style */}
              <path
                d="M20 28 L180 28"
                stroke={buttonColor}
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
              />
            </motion.svg>
          </span>{" "}
          {t("titlePart3")}
        </h2>

        <p
          className={`text-lg ${
            isDesktop ? "md:pt-14 lg:pt-10 xl:pt-20" : "pt-10"
          }`}
        >
          {t("description")}
        </p>

        <div
          className={`flex justify-center ${
            isDesktop ? "pt-6 lg:pt-10 xl:pt-20 gap-4" : "pt-4"
          }`}
        >
          <input
            className="w-60 p-2 border rounded-lg"
            placeholder={t("emailPlaceholder")}
            type="email"
          />
          <button
            className="btn w-36"
            style={{ backgroundColor: buttonColor }}
          >
            {t("signupButton")}
          </button>
        </div>

        <p className="pt-10">
          {t("termsMessage")}{" "}
          <strong className="underline">{t("termsConditions")}</strong>{" "}
          {t("and")}{" "}
          <strong className="underline">{t("privacyPolicy")}</strong>.
        </p>
      </div>
    </section>
  );
};

export default Header;
