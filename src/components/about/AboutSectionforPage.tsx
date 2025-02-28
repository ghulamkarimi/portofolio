import { useSelector } from "react-redux";
import { RootState } from "../../feature/store";
import { useTranslation } from "react-i18next";
import { Code, Trophy } from "lucide-react";

// Icon-Zuordnung
const icons = {
  Code: <Code size={40} />,
  Trophy: <Trophy size={70} />,
};

const TeamSection = () => {
  const { buttonColor, isDesktop } = useSelector((state: RootState) => state.mode);
  const { t } = useTranslation();

  return (
    <section className={`py-14 text-center ${isDesktop ? "px-20" : "px-6"}`}>
      {/* Titelbereich */}
      <div className="mb-12">
        <h2 className="text-xl font-bold">{t("meetteam.meetTheTeam")}</h2>
        <h3 className="text-xl font-bold text-gray-800">ai-webcraft</h3>
        <p className="mt-4 text-gray-600 text-lg">{t("meetteam.teamDescription")}</p>
      </div>

      {/* Team-Mitglieder */}
      <div className={`grid gap-8 ${isDesktop ? "grid-cols-3" : "grid-cols-1"}`}>
        {(
          t("team", { returnObjects: true }) as Array<{
            icon: keyof typeof icons;
            name: string;
            role?: string;
            description: string;
            image?: string;
          }>
        ).map((member, index: number) => (
          <div key={index} className="flex flex-col items-center text-center p-6">
            {/* Bild oder Icon anzeigen */}
            {member.image ? (
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full shadow-lg"
              />
            ) : (
              <span className="my-5" style={{ color: buttonColor }}>{icons[member.icon]}</span>
            )}

            {/* Name, Rolle und Beschreibung */}
            <h4 className="text-2xl font-semibold mt-4">{member.name}</h4>
            {member.role && <p className="text-gray-500">{member.role}</p>}
            <p className="mt-2 text-gray-700">{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
