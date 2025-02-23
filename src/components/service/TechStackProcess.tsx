import { Code, Settings, CheckCircle, Rocket, Database, GitBranch } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "../../feature/store";
import { useNavigate } from "react-router-dom";

const techStack = {
  languages: ["JavaScript", "TypeScript"],
  frameworks: ["React", "Next.js", "Node.js", "Express"],
  stateManagement: ["Redux Toolkit"],
  databases: ["MongoDB"],
  tools: ["Git", "Jira", "Storybook", "ShadCN UI"],
  devOps: ["nginx"],
};

const TechStackProcess = () => {
  const { buttonColor, isDesktop } = useSelector(
    (state: RootState) => state.mode
  );
  const navigate = useNavigate();

  const processSteps = [
    {
      step: "1. Discovery & Planning",
      description:
        "Wir beginnen mit einer gründlichen Analyse deiner Vision, Ziele und Zielgruppe. In dieser Phase definieren wir den Projektumfang und erstellen eine detaillierte Roadmap.",
      icon: <Settings size={24} style={{ color: buttonColor }} />,
    },
    {
      step: "2. Design & Prototyping",
      description:
        "Wir erstellen Wireframes und interaktive Prototypen, um das Benutzererlebnis und die Funktionalität zu visualisieren. Dieser iterative Prozess gewährleistet ein intuitives Design.",
      icon: <Code size={24} style={{ color: buttonColor }} />,
    },
    {
      step: "3. Development & Testing",
      description:
        "Unsere Entwickler setzen dein Projekt mit den modernsten Technologien um. Durch ausführliche Tests stellen wir eine reibungslose und fehlerfreie Benutzererfahrung sicher.",
      icon: <CheckCircle size={24} style={{ color: buttonColor }} />,
    },
    {
      step: "4. Deployment & Launch",
      description:
        "Nach erfolgreichen Tests wird deine Website live geschaltet. Wir bieten fortlaufenden Support und Wartung, um eine optimale Performance zu gewährleisten.",
      icon: <Rocket size={24} style={{ color: buttonColor }} />,
    },
  ];

  return (
    <section
      className={`px-6 py-12 text-gray-900 ${isDesktop ? "md:px-12 lg:px-32" : "px-6"}`}
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold">Technology Stack</h2>
        <p className="text-lg text-gray-600 mt-4">
          Wir setzen auf moderne und leistungsstarke Technologien, um qualitativ hochwertige Weblösungen zu liefern.
        </p>
      </div>

      {/* Tech Stack Grid */}
      <div className={`grid  gap-4 mt-8 text-lg text-gray-700 ${isDesktop ? "grid-cols-3" : "grid-cols-1"}`}>
        {/* Sprachen */}
        <div>
          <h3 className="font-semibold text-gray-900">Languages:</h3>
          {techStack.languages.map((lang, index) => (
            <p key={index} className="flex items-center gap-2 mt-2">
              <Code size={18} className="text-gray-500" />
              {lang}
            </p>
          ))}
        </div>

        {/* Frameworks */}
        <div>
          <h3 className="font-semibold text-gray-900">Frameworks:</h3>
          {techStack.frameworks.map((framework, index) => (
            <p key={index} className="flex items-center gap-2 mt-2">
              <Settings size={18} className="text-gray-500" />
              {framework}
            </p>
          ))}
        </div>

        {/* Weitere Technologien */}
        <div>
          <h3 className="font-semibold text-gray-900">Weitere Technologien:</h3>
          {techStack.stateManagement.map((state, index) => (
            <p key={index} className="flex items-center gap-2 mt-2">
              <Settings size={18} className="text-gray-500" />
              {state}
            </p>
          ))}
          {techStack.databases.map((db, index) => (
            <p key={index} className="flex items-center gap-2 mt-2">
              <Database size={18} className="text-gray-500" />
              {db}
            </p>
          ))}
          {techStack.tools.map((tool, index) => (
            <p key={index} className="flex items-center gap-2 mt-2">
              <GitBranch size={18} className="text-gray-500" />
              {tool}
            </p>
          ))}
          {techStack.devOps.map((devOps, index) => (
            <p key={index} className="flex items-center gap-2 mt-2">
              <Rocket size={18} className="text-gray-500" />
              {devOps}
            </p>
          ))}
        </div>
      </div>

      {/* Button für Portfolio */}
      <div className="text-center mt-6">
        <button
        onClick={() => navigate("/portfolio")}
          style={{ backgroundColor: buttonColor }}
          className="btn rounded-lg shadow-lg text-white px-6 py-3"
        >
          View Portfolio
        </button>
      </div>

      {/* Web Development Process Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold">Unser Webentwicklungsprozess</h2>
        <p className="text-lg text-gray-600 mt-4">
          Ein strukturierter Ansatz für erstklassige Ergebnisse – von der ersten Beratung bis zum finalen Launch.
        </p>
      </div>

      <div className="mt-8 space-y-6">
        {processSteps.map((step, index) => (
          <div
            key={index}
            className={`items-center gap-4 md:gap-8 text-left ${
              isDesktop ? "flex md:flex-row" : "flex flex-col"
            }`}
          >
            <div className="flex-shrink-0">{step.icon}</div>
            <div>
              <h3 className="text-xl font-semibold">{step.step}</h3>
              <p className="text-gray-700 mt-2">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStackProcess;
