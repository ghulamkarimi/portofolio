import { Code, Settings, CheckCircle, Rocket, Database, GitBranch } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "../../feature/store";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import i18next

const processIcons: { [key: string]: JSX.Element } = {
  "1. Discovery & Planning": <Settings size={24} />,
  "2. Design & Prototyping": <Code size={24} />,
  "3. Development & Testing": <CheckCircle size={24} />,
  "4. Deployment & Launch": <Rocket size={24} />,
};

const TechStackProcess = () => {
  const { buttonColor, isDesktop } = useSelector((state: RootState) => state.mode);
  const navigate = useNavigate();
  const { t } = useTranslation(); // useTranslation Hook für Mehrsprachigkeit

  const processSteps = t("techStack.processSteps", { returnObjects: true }) as {
    step: string;
    description: string;
  }[];

  return (
    <section className={`px-6 py-12 text-gray-900 ${isDesktop ? "md:px-12 lg:px-32" : "px-6"}`}>
      <div className="text-center">
        <h2 className="text-3xl font-bold">{t("techStack.title")}</h2>
        <p className="text-lg text-gray-600 mt-4">{t("techStack.description")}</p>
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
              {processIcons[step.step] || <Settings size={24} />} {/* Standard-Icon, falls nicht gefunden */}
            </div>
            <div>
              <h3 className="text-xl text-start  font-semibold">{step.step}</h3>
              <p className="text-gray-700 mt-2">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStackProcess;
