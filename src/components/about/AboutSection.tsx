import { Lightbulb, ThumbsUp, Users } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "../../feature/store";

const AboutSection = () => {
    const { buttonColor, isDesktop } = useSelector((state: RootState) => state.mode);
  return (
    <section className={`px-6 py-12  text-gray-900 ${isDesktop ? "md:px-12" : "px-6"}`}>
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">ai.webkraft</h2>
        <p className="text-lg">
          At <span className="font-semibold">ai.webkraft</span>, we specialize in delivering high-quality web development solutions 
          that empower businesses and create exceptional user experiences. Our team is committed to innovation and collaboration.
        </p>
      </div>

      <div className={`grid gap-8 mt-12 ${isDesktop ? "grid-cols-3" : "grid-cols-1"}`}>
        {/* Mission */}
        <div className="flex flex-col items-center text-center">
          <Lightbulb size={40}
            style={{color: buttonColor}}
          className="text-orange-500 mb-4" />
          <h3 className="text-xl font-semibold">Our Mission</h3>
          <p className="text-gray-700 mt-2">
            We provide tailored web solutions that help businesses grow and enhance their digital presence.
          </p>
        </div>

        {/* Core Values */}
        <div className="flex flex-col items-center text-center">
          <ThumbsUp size={40}
            style={{color: buttonColor}}
           className=" mb-4" />
          <h3 className="text-xl font-semibold">Our Values</h3>
          <p className="text-gray-700 mt-2">
            Our core values include <strong>Innovation, Quality, Collaboration, and Integrity</strong>. 
            These principles guide our work and ensure the highest standards in every project.
          </p>
        </div>

        {/* Meet the Team */}
        <div className="flex flex-col items-center text-center">
          <Users size={40}
          style={{color: buttonColor}}
          className=" mb-4" />
          <h3 className="text-xl font-semibold">Meet the Team</h3>
          <p className="text-gray-700 mt-2">
            Our talented team consists of experienced developers and designers who create modern, functional web solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
