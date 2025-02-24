import { useSelector } from "react-redux";
import { RootState } from "../../feature/store";
import { useTranslation } from "react-i18next"; // Import i18next

const ProjectsSection = () => {
  const { isDesktop, buttonColor } = useSelector(
    (state: RootState) => state.mode
  );
  const { t } = useTranslation(); // useTranslation Hook für Mehrsprachigkeit

  // Projekte & Kategorien aus `i18next` holen
  const projects = t("projects.list", { returnObjects: true }) as {
    name: string;
    type: string;
  }[];
  const categories = t("projects.categories", { returnObjects: true }) as {
    title: string;
    subcategories: string[];
  }[];

  return (
    <section
      className={`bg-black text-white py-12 ${isDesktop ? "md:px-16" : "px-4"}`}
    >
      <div className="relative w-full h-[500px] bg-[url('/main2.webp')] bg-cover bg-center rounded-xl shadow-lg"></div>

      {/* Titel & Beschreibung */}
      <div className="max-w-5xl mx-auto text-center mt-8">
        <h2 className="text-3xl font-bold mb-4">{t("projects.title")}</h2>
        <p className="text-lg text-gray-400">{t("projects.description")}</p>
      </div>

      {/* Projekte Liste */}
      <div className="mt-8 space-y-2">
        {projects.map((project, index) => (
          <p key={index} className="text-lg text-gray-300">
            <span style={{ color: buttonColor }}>#</span> {project.name} -{" "}
            {project.type}
          </p>
        ))}
      </div>

      {/* Kategorien */}
      <div
        className={`${
          isDesktop ? "grid grid-cols-4" : "grid grid-cols-2"
        } gap-8 mt-12 text-gray-300`}
      >
        {categories.map((category, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold text-white">
              {category.title}
            </h3>
            {category.subcategories.map((sub, idx) => (
              <p key={idx} className="text-gray-400">{sub}</p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
