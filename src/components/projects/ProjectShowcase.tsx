import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState } from "../../feature/store";

const ProjectShowcase = () => {
  const { isDesktop, buttonColor } = useSelector(
    (state: RootState) => state.mode
  );
  const { t } = useTranslation();

  return (
    <section className="px-4 py-8">
      {/* Titel & Beschreibung */}
      <div className="text-center">
        <h2 className="text-3xl font-bold">{t("projects.title")}</h2>
        <p className="text-lg text-gray-600 mt-4">
          {t("projects.description")}
        </p>
      </div>

      <hr className="my-8 border-gray-300" />

      {/* Projekt-Container */}
      <div
        className={`flex gap-8 p-6 rounded-lg ${
          isDesktop
            ? "flex-row-reverse items-center  "
            : "flex-col items-stretch"
        }`}
      >
        {/* Bildbereich (Rechte Seite auf Desktop) */}
        <div
          className={`w-full flex justify-center bg-slate-300 rounded-xl overflow-hidden ${
            isDesktop ? "w-1/2" : "mt-8"
          }`}
        >
          <img
            src="/pc.png"
            alt={t("projects.list.0.name")}
            className="w-full object-cover rounded-xl shadow-lg hover:shadow-inner hover:scale-105 transition-transform hover:brightness-50 hover:duration-500"
          />
        </div>

        {/* Textbereich (Linke Seite auf Desktop) */}
        <div
          className={`w-full text-start ${
            isDesktop ? "w-1/2 text-left" : "mt-8"
          }`}
        >
          <h3 className="text-2xl font-bold">{t("projects.list.0.name")}</h3>
          <p className="mt-2 text-gray-600">
            {t("projects.list.0.description")}
          </p>

          <div className="text-gray-500 text-sm mt-4">
            <span className="block">
              <strong style={{ color: buttonColor }}>#</strong>{" "}
              {t("projects.client")}: Fashionista Co.
            </span>
            <span className="block">
              <strong style={{ color: buttonColor }}>#</strong>{" "}
              {t("projects.date")}: May 2023
            </span>
            <span className="block">
              <strong style={{ color: buttonColor }}>#</strong>{" "}
              {t("projects.technologies")}: HTML, CSS, JavaScript
            </span>
          </div>

          <a href="#" className="text-blue-500 font-semibold mt-6 inline-block">
            {t("projects.viewProject")} →
          </a>
        </div>
      </div>

      <hr className="my-8 border-gray-300" />
    </section>
  );
};

export default ProjectShowcase;
