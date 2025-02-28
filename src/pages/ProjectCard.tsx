import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState } from "../feature/store";

const ProjectCard = () => {
  const { title } = useParams(); // URL-Parameter holen
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { isDesktop, buttonColor } = useSelector(
    (state: RootState) => state.mode
  );

  const decodedProjectTitle = decodeURIComponent(title || "")
    .trim()
    .toLowerCase();

  const projects = t("projectShowCase", { returnObjects: true }) as any[];

  const project = projects.find(
    (p: any) => p.title.trim().toLowerCase() === decodedProjectTitle
  );

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className={`bg-white shadow-lg rounded-xl py-10 ${isDesktop ?  "px-32":""}`}>
      {/* Bildbereich */}
      <div className=" w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      {/* Textbereich */}
      <div
        className={`${
          isDesktop ? "grid grid-cols-2 gap-10 mt-16 justify-around" : "grid grid-cols-1"
        }`}
      >
        <div>
          <h2 className="text-5xl font-bold pb-6 text-gray-900">
            {project.type}
          </h2>
          <p className="text-gray-600 mt-10">{project.description}</p>
           
        </div>

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

          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
