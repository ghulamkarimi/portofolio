import { useSelector } from "react-redux";
import { RootState } from "../../feature/store";
import { fadeIn } from "../../utils/motion";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next"; // Import i18next

const services = [
  {
    key: "customWebsiteDesign",
    image: "/main.webp", // Ersetze mit deinem Bildpfad
  },
  {
    key: "applicationDevelopment",
    image: "/mainOne.webp", // Ersetze mit deinem Bildpfad
  },
  {
    key: "ecommerceSolutions",
    image: "/mainTwo.webp", // Ersetze mit deinem Bildpfad
  },
  {
    key: "responsiveDesign",
    image: "/mainThree.webp", // Ersetze mit deinem Bildpfad
  },
];

const ServicesSection = () => {
  const { isDesktop } = useSelector((state: RootState) => state.mode);
  const { t } = useTranslation(); // useTranslation Hook für Mehrsprachigkeit

  return (
    <section
      className={`py-12 bg-white text-gray-900 ${isDesktop ? "md:px-12" : ""}`}
    >
      <div
        className={`grid gap-3 ${
          isDesktop ? "grid-cols-2 md:grid-cols-4" : "grid-cols-1"
        }`}
      >
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <motion.div
              variants={fadeIn("down", 1.0)}
              initial="hidden"
              animate="show"
              viewport={{ margin: "100px" }}
            >
              <img
                src={service.image}
                alt={t(`services.${service.key}.title`)}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <h3 className="text-xl font-semibold mt-4">
                {t(`services.${service.key}.title`)}
              </h3>
              <p className="text-gray-700 mt-2">
                {t(`services.${service.key}.description`)}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
