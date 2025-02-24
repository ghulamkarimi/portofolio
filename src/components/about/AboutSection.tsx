import { Lightbulb, ThumbsUp, Users } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "../../feature/store";
import { fadeIn } from "../../utils/motion";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next"; // Import i18next

const AboutSection = () => {
  const { buttonColor, isDesktop } = useSelector(
    (state: RootState) => state.mode
  );
  const { t } = useTranslation(); // useTranslation Hook für Mehrsprachigkeit

  return (
    <section
      className={`px-6 py-12 text-gray-900 ${isDesktop ? "md:px-12" : "px-6"}`}
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          animate="show"
          viewport={{ amount: 0.9 }}
        >
          <h2 className="text-3xl font-bold mb-4">ai.webkraft</h2>
          <p className="text-lg">{t("about.description")}</p>
        </motion.div>
      </div>

      <div
        className={`grid gap-8 mt-12 ${
          isDesktop ? "grid-cols-3" : "grid-cols-1"
        }`}
      >
        {/* Mission */}
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          animate="show"
          viewport={{ amount: 0.9 }}
          className="flex flex-col items-center text-center"
        >
          <Lightbulb
            size={40}
            style={{ color: buttonColor }}
            className="text-orange-500 mb-2"
          />
          <h3 className="text-xl font-semibold mt-2">{t("about.missionTitle")}</h3>
          <p className="text-gray-700 mt-2">{t("about.missionDescription")}</p>
        </motion.div>

        {/* Core Values */}
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          animate="show"
          viewport={{ amount: 0.9 }}
          className="flex flex-col items-center text-center"
        >
          <ThumbsUp
            size={40}
            style={{ color: buttonColor }}
            className="mb-2"
          />
          <h3 className="text-xl font-semibold mt-2">{t("about.valuesTitle")}</h3>
          <p className="text-gray-700 mt-2">{t("about.valuesDescription")}</p>
        </motion.div>

        {/* Meet the Team */}
        <motion.div
          variants={fadeIn("up", 1.0)}
          initial="hidden"
          animate="show"
          viewport={{ margin: 100 }}
          className="flex flex-col items-center text-center"
        >
          <Users
            size={40}
            style={{ color: buttonColor }}
            className="mb-2"
          />
          <h3 className="text-xl font-semibold mt-2">{t("about.teamTitle")}</h3>
          <p className="text-gray-700 mt-2">{t("about.teamDescription")}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
