import { Lightbulb, ThumbsUp, Users } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "../../feature/store";
import { fadeIn } from "../../utils/motion";
import { motion } from "framer-motion";

const AboutSection = () => {
  const { buttonColor, isDesktop } = useSelector(
    (state: RootState) => state.mode
  );
  return (
    <section
      className={`px-6 py-12  text-gray-900 ${isDesktop ? "md:px-12" : "px-6"}`}
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          animate="show"
          viewport={{ amount: 0.9 }}
        >
          <h2 className="text-3xl font-bold mb-4">ai.webkraft</h2>
          <p className="text-lg">
            At <span className="font-semibold">ai.webkraft</span>, we specialize
            in delivering high-quality web development solutions that empower
            businesses and create exceptional user experiences. Our team is
            committed to innovation and collaboration.
          </p>
        </motion.div>
      </div>

      <div
        className={`grid gap-8 mt-12 ${
          isDesktop ? "grid-cols-3" : "grid-cols-1"
        }`}
      >
        {/* Mission */}
        <div className="flex flex-col items-center text-center">
          <motion.div
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            animate="show"
            viewport={{ amount: 0.9 }}
          >
            <Lightbulb
              size={40}
              style={{ color: buttonColor }}
              className="text-orange-500 mb-4"
            />
            <h3 className="text-xl font-semibold">Our Mission</h3>
            <p className="text-gray-700 mt-2">
              We provide tailored web solutions that help businesses grow and
              enhance their digital presence.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="flex flex-col items-center text-center">
          <motion.div
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            animate="show"
            viewport={{ amount: 0.9 }}
          >
            <ThumbsUp
              size={40}
              style={{ color: buttonColor }}
              className=" mb-4"
            />
            <h3 className="text-xl font-semibold">Our Values</h3>
            <p className="text-gray-700 mt-2">
              Our core values include{" "}
              <strong>Innovation, Quality, Collaboration, and Integrity</strong>
              . These principles guide our work and ensure the highest standards
              in every project.
            </p>
          </motion.div>
        </div>

        {/* Meet the Team */}
        <div className="flex flex-col items-center text-center">
          <motion.div
            variants={fadeIn("up", 1.0)}
            initial="hidden"
            animate="show"
            viewport={{ margin:100}}
          >
            <Users size={40} style={{ color: buttonColor }} className=" mb-4" />
            <h3 className="text-xl font-semibold">Meet the Team</h3>
            <p className="text-gray-700 mt-2">
              Our talented team consists of experienced developers and designers
              who create modern, functional web solutions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
