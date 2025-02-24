import { Code, Settings, CheckCircle, Rocket, Library, Cpu, Layers, Server, GitBranch } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "../../feature/store";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { JSX } from "react";



const processIcons: { [key: string]: JSX.Element } = {
  "1. Discovery & Planning": <Settings size={24} />,
  "2. Design & Prototyping": <Code size={24} />,
  "3. Development & Testing": <CheckCircle size={24} />,
  "4. Deployment & Launch": <Rocket size={24} />,
};

const techIcons: { [key: string]: JSX.Element } = {
  "JavaScript": <Code size={24} />,
  "TypeScript": <Code size={24} />,
  "React": <Library size={24} />,
  "Next.js": <Cpu size={24} />,
  "Node.js": <Server size={24} />,
  "Nginx": <Layers size={24} />,
  "Redux": <GitBranch size={24} />,
  "Redux Toolkit": <GitBranch size={24} />,
  "Jira": <Settings size={24} />,
  "Storybook": <Code size={24} />,
  "Tailwind CSS": <Layers size={24} />,
};

const TechStackProcess = () => {
  const { buttonColor, isDesktop } = useSelector((state: RootState) => state.mode);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const processSteps = t("techStack.processSteps", { returnObjects: true }) as {
    step: string;
    description: string;
  }[];

  const languages = ["JavaScript", "TypeScript"];
  const frameworks = ["React", "Next.js", "Node.js", "Nginx"];
  const additionalTechnologies = ["Redux", "Redux Toolkit", "Jira", "Storybook", "Tailwind CSS"];

  return (
    <section className={`px-6 py-12 text-gray-900 ${isDesktop ? "md:px-12 lg:px-32" : "px-6"}`}>
      <div className="text-center">
        <h2 className="text-3xl font-bold">{t("techStack.title")}</h2>
        <p className="text-lg text-gray-600 mt-4">{t("techStack.description")}</p>
      </div>

      {/* Technologies Section */}
      <div className={`mt-8 grid grid-cols-1 gap-8 ${isDesktop ? "md:grid-cols-3" : ""}`}>	
        <div>
          <h3 className="text-xl font-semibold">{t("techStack.languages")}</h3>
          <ul className="mt-4 space-y-2">
            {languages.map((lang) => (
              <li key={lang} className="flex items-center gap-3">
                {techIcons[lang]} <span>{lang}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold">{t("techStack.frameworks")}</h3>
          <ul className="mt-4 space-y-2">
            {frameworks.map((fw) => (
              <li key={fw} className="flex items-center gap-3">
                {techIcons[fw]} <span>{fw}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold">{t("techStack.additionalTechnologies")}</h3>
          <ul className="mt-4 space-y-2">
            {additionalTechnologies.map((tech) => (
              <li key={tech} className="flex items-center gap-3">
                {techIcons[tech]} <span>{tech}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Portfolio Button */}
      <div className="text-center mt-6">
        <button
          onClick={() => navigate("/portfolio")}
          style={{ backgroundColor: buttonColor }}
          className="btn rounded-lg shadow-lg text-white px-6 py-3"
        >
          {t("techStack.portfolioButton")}
        </button>
      </div>

      {/* Web Development Process Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold">{t("techStack.processTitle")}</h2>
        <p className="text-lg text-gray-600 mt-4">{t("techStack.processDescription")}</p>
      </div>

      <div className="mt-8 space-y-6">
        {processSteps.map((step, index) => (
          <div key={index} className={`items-center gap-4 md:gap-8 text-left ${isDesktop ? "flex md:flex-row" : "flex flex-col"}`}>
            <div className="flex-shrink-0" style={{ color: buttonColor }}>
              {processIcons[step.step] || <Settings size={24} />} 
            </div>
            <div>
              <h3 className="text-xl text-start font-semibold">{step.step}</h3>
              <p className="text-gray-700 mt-2">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStackProcess;
