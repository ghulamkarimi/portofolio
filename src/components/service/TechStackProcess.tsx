import {
  Code,
  Settings,
  Check,
  Rocket,
  Library,
  Cpu,
  Layers,
  Server,
  GitBranch,
} from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "../../feature/store";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { JSX } from "react";

/**
 * Automatische Erkennung des passenden Icons basierend auf Schlüsselwörtern in verschiedenen Sprachen
 */
const findProcessIcon = (step: string): JSX.Element => {
  const lowerStep = step.toLowerCase().trim();

  if (
    lowerStep.includes("planning") ||
    lowerStep.includes("plan") ||
    lowerStep.includes("تخطيط") ||
    lowerStep.includes("برنامه") ||
    lowerStep.includes("planlama")
  ) {
    return <Settings size={24} />;
  }
  if (
    lowerStep.includes("design") ||
    lowerStep.includes("prototyping") ||
    lowerStep.includes("تصميم") ||
    lowerStep.includes("نمونه‌سازی") ||
    lowerStep.includes("tasarım")
  ) {
    return <Code size={24} />;
  }
  if (
    lowerStep.includes("development") ||
    lowerStep.includes("test") ||
    lowerStep.includes("تطوير") ||
    lowerStep.includes("آزمایش") ||
    lowerStep.includes("test")
  ) {
    return <Check size={24} />;
  }
  if (
    lowerStep.includes("deployment") ||
    lowerStep.includes("live-schaltung") ||
    lowerStep.includes("نشر") ||
    lowerStep.includes("راه‌اندازی") ||
    lowerStep.includes("yayınlama")
  ) {
    return <Rocket size={24} />;
  }

  return <Settings size={24} />; // Standard-Icon für nicht erkannte Begriffe
};

/**
 * Tech-Stack-Icons
 */
const techIcons: { [key: string]: JSX.Element } = {
  JavaScript: <Code size={24} />,
  TypeScript: <Code size={24} />,
  React: <Library size={24} />,
  "Next.js": <Cpu size={24} />,
  "Node.js": <Server size={24} />,
  Nginx: <Layers size={24} />,
  Redux: <GitBranch size={24} />,
  "Redux Toolkit": <GitBranch size={24} />,
  Jira: <Settings size={24} />,
  Storybook: <Code size={24} />,
  "Tailwind CSS": <Layers size={24} />,
};

const TechStackProcess = () => {
  const { buttonColor, isDesktop } = useSelector(
    (state: RootState) => state.mode
  );
  const navigate = useNavigate();
  const { t } = useTranslation();

  const processSteps = t("techStack.processSteps", { returnObjects: true }) as {
    step: string;
    description: string;
  }[];

  const languages = ["JavaScript", "TypeScript"];
  const frameworks = ["React", "Next.js", "Node.js", "Nginx"];
  const additionalTechnologies = [
    "Redux",
    "Redux Toolkit",
    "Jira",
    "Storybook",
    "Tailwind CSS",
  ];

  return (
    <section
      className={`px-6 py-12 text-gray-900 ${
        isDesktop ? "md:px-12 lg:px-32" : "px-6"
      }`}
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold">{t("techStack.title")}</h2>
        <p className="text-lg text-gray-600 mt-4">
          {t("techStack.description")}
        </p>
      </div>

      {/* Technologies Section */}
      <div
        className={`mt-8 grid grid-cols-1 gap-8 ${
          isDesktop ? "md:grid-cols-3" : ""
        }`}
      >
        <div>
          <h3 className="text-xl font-semibold">{t("techStack.languages")}</h3>
          <ul className="mt-4 space-y-2">
            {languages.map((lang) => (
              <li key={lang} className="flex items-center gap-3">
                <span style={{ color: buttonColor }}> {techIcons[lang]} </span>
                <span>{lang}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold">{t("techStack.frameworks")}</h3>
          <ul className="mt-4 space-y-2">
            {frameworks.map((fw) => (
              <li key={fw} className="flex items-center gap-3">
                <span style={{ color: buttonColor }}> {techIcons[fw]}</span>
                <span> {fw}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold">
            {t("techStack.additionalTechnologies")}
          </h3>
          <ul className="mt-4 space-y-2">
            {additionalTechnologies.map((tech) => (
              <li key={tech} className="flex items-center gap-3">
                <span style={{ color: buttonColor }}> {techIcons[tech]} </span>
                <span>{tech}</span>
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
        <p className="text-lg text-gray-600 mt-4">
          {t("techStack.processDescription")}
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
            <div className="flex-shrink-0" style={{ color: buttonColor }}>
              {findProcessIcon(step.step.trim())}
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
