import { useSelector } from "react-redux";
import { RootState } from "../../feature/store";

const Header = () => {
  const { buttonColor, isDesktop } = useSelector((state: RootState) => state.mode);

  return (
    <section 
      className={`min-h-screen flex ${isDesktop ? "flex-row" : "flex-col"} justify-center bg-gray-100`}
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
      <div className="w-full max-w-[90%] px-4 text-center md:text-left flex flex-col justify-center">
        <h2 className="text-4xl">Transform Your Vision into Reality</h2>
        <p className="text-lg">
          At DevCraft, we specialize in crafting innovative and responsive web
          solutions tailored to your unique needs. Our team of experts is
          dedicated to delivering high-quality digital experiences that
          captivate and engage your audience.
        </p>
        <div className="flex flex-col items-center md:items-start gap-2">
          <input
            className="w-full max-w-[300px] p-2 border rounded-md"
            placeholder="Enter your email"
            type="email"
          />
          <button className="btn w-full max-w-[150px]" style={{ backgroundColor: buttonColor }}>
            Sign up
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
