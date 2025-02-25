import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState } from "../../feature/store";

import { useNavigate } from "react-router-dom";

const ProjectShowcase = () => {
  const { isDesktop, buttonColor } = useSelector(
    (state: RootState) => state.mode
  );
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Alle Projekte aus der Übersetzungsdatei holen
  const projects = t("projectShowCase", { returnObjects: true }) as any[];

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

      {/* Projekt-Liste */}
      {projects.map((project: any, index: number) => (
        <div key={index}>
          <div
            className={`flex gap-8 p-6 rounded-lg ${
              isDesktop
                ? "flex-row-reverse items-center"
                : "flex-col items-stretch"
            }`}
          >
            {/* Bildbereich */}
            <div
              className={`w-full flex justify-center bg-slate-300 rounded-xl overflow-hidden ${
                isDesktop ? "w-1/2" : "h-76"
              }`}
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full object-cover rounded-xl shadow-lg hover:shadow-inner hover:scale-105 transition-transform hover:brightness-50 hover:duration-500"
              />
            </div>

            {/* Textbereich */}
            <div
              className={`w-full text-start justify-center ${
                isDesktop ? "w-1/2 text-left" : ""
              }`}
            >
              <h3 className="text-2xl font-bold my-4">{project.type}</h3>
              <p className="mt-4 text-gray-600 font-bold">
                {project.description}
              </p>

              <div className="text-sm my-4">
                <span className="block">
                  <strong className="text-lg" style={{ color: buttonColor }}>
                    #
                  </strong>{" "}
                  {project.name}
                </span>
                <span className="block">
                  <strong className="text-lg" style={{ color: buttonColor }}>
                    #
                  </strong>{" "}
                  {project.date}
                </span>
                <span className="block">
                  <strong className="text-lg" style={{ color: buttonColor }}>
                    #
                  </strong>{" "}
                  {project.tech.join(", ")}
                </span>
              </div>

              <button
                onClick={() => navigate(`/projects/${project.name}`)}
                className="btn mt-4"
                style={{ backgroundColor: buttonColor }}
              >
                Mehr erfahren
              </button>
            </div>
          </div>
          <hr className="my-8 border-gray-300" />
        </div>
      ))}
    </section>
  );
};

export default ProjectShowcase;
