import { Code, Settings, CheckCircle, Rocket } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "../../feature/store";

const techStack = {
  languages: ["JavaScript", "Python", "PHP"],
  frameworks: ["React", "Angular", "Laravel"],
};

const TechStackProcess = () => {
  const { buttonColor, isDesktop } = useSelector(
    (state: RootState) => state.mode
  );

  const processSteps = [
    {
      step: "1. Discovery & Planning",
      description:
        "We begin by understanding your vision, goals, and target audience. This crucial phase involves in-depth discussions, brainstorming sessions, and detailed documentation to establish a clear roadmap for your project.",
      icon: <Settings size={24} style={{ color: buttonColor }} />,
    },
    {
      step: "2. Design & Prototyping",
      description:
        "Based on the planning phase, we create wireframes and prototypes to visualize the user experience and functionality of your website. This iterative process ensures a user-friendly and intuitive design.",
      icon: <Code size={24} style={{ color: buttonColor }} />,
    },
    {
      step: "3. Development & Testing",
      description:
        "Our skilled developers meticulously build your website, adhering to the agreed-upon design and functionality specifications. Rigorous testing ensures a smooth and error-free user experience.",
      icon: <CheckCircle size={24} style={{ color: buttonColor }} />,
    },
    {
      step: "4. Deployment & Launch",
      description:
        "After thorough testing, we deploy your website to the live environment. We provide ongoing support and maintenance to ensure a seamless transition and continued performance.",
      icon: <Rocket size={24} style={{ color: buttonColor }} />,
    },
  ];

  return (
    <section
      className={`px-6 py-12  text-gray-900 ${
        isDesktop ? "md:px-12 lg:px-32" : "px-6"
      }`}
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold">Technology Stack</h2>
        <p className="text-lg text-gray-600 mt-4">
          We leverage a modern and robust technology stack to deliver
          high-quality web solutions. Our expertise spans multiple languages,
          frameworks, and tools, ensuring optimal performance.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-12 mt-8 text-lg text-gray-700">
        <div>
          <h3 className="font-semibold text-gray-900">Languages:</h3>
          {techStack.languages.map((lang, index) => (
            <p key={index} className="flex items-center gap-2 mt-2">
              <Code size={18} className="text-gray-500" />
              {lang}
            </p>
          ))}
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">Frameworks:</h3>
          {techStack.frameworks.map((framework, index) => (
            <p key={index} className="flex items-center gap-2 mt-2">
              <Settings size={18} className="text-gray-500" />
              {framework}
            </p>
          ))}
        </div>
      </div>

      <div className="text-center mt-6">
        <button
          style={{ backgroundColor: buttonColor }}
          className="btn rounded-lg shadow-lg "
        >
          View Portfolio
        </button>
      </div>

      {/* Web Development Process Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold">Our Web Development Process</h2>
        <p className="text-lg text-gray-600 mt-4">
          Our structured methodology ensures high-quality results, from initial
          consultation to final launch, guaranteeing a seamless experience for
          our clients.
        </p>
      </div>

      <div className="mt-8 space-y-6">
        {processSteps.map((step, index) => (
          <div
            key={index}
            className={` items-center gap-4 md:gap-8 text-left ${
              isDesktop ? " flex md:flex-row " : "flex flex-col"
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
