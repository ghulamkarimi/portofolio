import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState } from "../../feature/store";

const TechStack = () => {
    const {isDesktop} = useSelector((state:RootState) => state.mode);
  const { t } = useTranslation();

  // Prüfen, ob die Daten existieren und ein Array sind
  const languages = t("techSta.languages", { returnObjects: true });
  const frameworks = t("techSta.frameworks", { returnObjects: true });

  const languageList = Array.isArray(languages) ? languages : [];
  const frameworkList = Array.isArray(frameworks) ? frameworks : [];

  return (
    <section className={`py-7 mb-6 grid px-10 ${isDesktop ? " px-12 grid-cols-2 gap-32" : "grid-cols-1 items-center"}`}>
      {/* Titel & Beschreibung */}
      <div className="w-full items-center"> 
        <h2 className="text-4xl font-bold">{t("techSta.title")}</h2>
        <p className="mt-4 text-gray-600 text-lg">{t("techSta.description")}</p>
      </div>

      {/* Sprachen & Frameworks */}
      <div className={`gap-8   ${isDesktop ? "flex flex-row " : "flex flex-col "}`}>
        <div>
          <h3 className="text-xl font-semibold">{t("techSta.languagesTitle")}</h3>
          <ul className="mt-4 text-gray-700">
            {languageList.map((lang, index) => (
              <li key={index}>• {lang}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold">{t("techSta.frameworksTitle")}</h3>
          <ul className="mt-4 text-gray-700">
            {frameworkList.map((fw, index) => (
              <li key={index}>• {fw}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
