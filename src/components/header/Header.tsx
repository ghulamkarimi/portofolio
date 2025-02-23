import { useSelector } from "react-redux";
import { RootState } from "../../feature/store";

const Header = () => {
  const { buttonColor, isDesktop } = useSelector(
    (state: RootState) => state.mode
  );

  return (
    <section
      className={`min-h-[60vh] flex ${
        isDesktop ? "flex-row" : "flex-col gap-10"
      }  bg-gray-100`}
    >
      {/* Bildbereich - In Mobile oben, in Desktop links */}
      <div className="w-full flex justify-center">
        <img
          className="w-full h-auto object-cover"
          src="header.webp"
          alt="Header Image"
        />
      </div>

      {/* Textbereich */}
      <div className="w-full max-w-[90%] px-4 text-center md:text-left flex flex-col ">
        <h2
          className={` ${
            isDesktop ? "md:pt-20 lg:pt-28 text-4xl" : "text-3xl"
          }`}
        >
          Transform Your Vision into Reality
        </h2>
        <p
          className={`text-lg ${
            isDesktop ? "md:pt-14 lg:pt-10 xl:pt-20" : "pt-10"
          }`}
        >
          At ai.webkraft, we specialize in creating innovative and responsive
          web solutions tailored to your needs. With expertise in Next.js,
          React, TypeScript, and SQL, we build high-performance applications
          that seamlessly integrate backend and frontend. We are also passionate
          about AI and Python, leveraging cutting-edge technology for automation
          and intelligent solutions. Our goal is to deliver engaging, secure,
          and scalable digital experiences that align with your business
          objectives. Lets build something exceptional together!
        </p>

        <div
          className={`flex justify-center ${
            isDesktop ? "pt-6 lg:pt-10 xl:pt-20 gap-4" : "pt-4"
          }`}
        >
          <input
            className="w-72  p-2 border rounded-lg"
            placeholder="Enter your email"
            type="email"
          />
          <button
            className="btn w-36 "
            style={{ backgroundColor: buttonColor }}
          >
            Sign up
          </button>
        </div>
        <p className="pt-10">
          By signing up, you agree to our{" "}
          <strong className="underline">Terms and Conditions</strong> and{" "}
          <strong className="underline"> Privacy Policy</strong>. We respect
          your privacy and are committed to protecting your personal
          information.
        </p>
      </div>
    </section>
  );
};

export default Header;
