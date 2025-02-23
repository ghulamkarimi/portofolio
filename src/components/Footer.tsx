import { useSelector } from "react-redux";
import { RootState } from "../feature/store";

const Footer = () => {
  const { isDesktop } = useSelector((state: RootState) => state.mode);
  return (
    <footer className=" text-white bg-black px-6 py-8 md:px-12 lg:px-32">
      {/* Navigation */}
      <div className="flex justify-center space-x-6 text-sm">
        <a href="#about" className="hover:underline">
          About
        </a>
        <a href="#portfolio" className="hover:underline">
          Portfolio
        </a>
        <a href="#contact" className="hover:underline">
          Contact
        </a>
      </div>

      {/* Trennlinie */}
      <div className="border-t border-gray-300 my-6"></div>

      {/* Copyright & Links */}
      <div
        className={`flex justify-between items-center text-sm text-white ${
          isDesktop ? "md:flex-row" : "flex-col"
        }`}
      >
        <p>© 2025 DevCraft. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="/terms" className="hover:underline">
            Terms and Conditions
          </a>
          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
