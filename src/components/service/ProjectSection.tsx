import { useSelector } from "react-redux";
import { RootState } from "../../feature/store";

const projects = [
  {
    name: "Fashionista Co.",
    type: "E-commerce Website",
  },
  {
    name: "John Doe Photography",
    type: "Portfolio Website",
  },
  {
    name: "Tech Innovators Inc.",
    type: "Corporate Website",
  },
];

const categories = [
  {
    title: "E-commerce",
    subcategories: ["Fashion"],
  },
  {
    title: "Corporate",
    subcategories: ["Tech Startup"],
  },
  {
    title: "Photography",
    subcategories: ["Portfolio"],
  },
  {
    title: "Innovative",
    subcategories: ["Solutions"],
  },
];

const ProjectsSection = () => {
  const { isDesktop, buttonColor } = useSelector(
    (state: RootState) => state.mode
  );
  return (
    <section
      className={`bg-black text-white py-12 ${isDesktop ? "md:px-12" : "px-4"}`}
    >
      {/* Hero Image */}
      <div className="relative">
        <img
          src="/main2.webp"
          alt="Portfolio showcase"
          className="w-full max-h-[500px] object-cover  rounded-xl shadow-lg"
        />
      </div>

      {/* Titel & Beschreibung */}
      <div className="max-w-5xl mx-auto text-center mt-8">
        <h2 className="text-3xl font-bold mb-4">Our Projects</h2>
        <p className="text-lg text-gray-400">
          Explore our diverse portfolio that showcases our expertise in web
          development, from e-commerce solutions to stunning personal websites.
        </p>
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
          isDesktop ? "grid grid-cols-4" : "grid grid-cols-2 "
        } gap-8 mt-12 text-gray-300`}
      >
        {categories.map((category, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold text-white">
              {category.title}
            </h3>
            {category.subcategories.map((sub, idx) => (
              <p key={idx} className="text-gray-400">
                {sub}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
