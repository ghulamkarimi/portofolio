import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../feature/store";
import { useState } from "react";
import { setMode } from "../../feature/reducers/modeSlice";
import { useEffect } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const { mode,buttonColor } = useSelector((state: RootState) => state.mode);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 820);
  
  useEffect(() => {
    const handleResize = () => {
      const newIsDesktop = window.innerWidth >= 820;

      setIsDesktop(newIsDesktop);

      if (newIsDesktop && mode !== "desktop") {
        dispatch(setMode("desktop"));
      } else if (!newIsDesktop && mode !== "mobile") {
        dispatch(setMode("mobile"));
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mode, dispatch]);

  return (
    <section className={`flex min-h-screen items-center gap-4 bg-gray-100 ${mode === "desktop" ? "flex-row" : "flex-col"}`}>
      <img
        className={`${mode === "desktop" ? " w-1/2" : "w-full"}`}
        src="header.webp"
        alt=""
      />
      <div className="">
        <h2 className="text-4xl">Transform Your Vision into Reality</h2>
        <p>
          At DevCraft, we specialize in crafting innovative and responsive web
          solutions tailored to your unique needs. Our team of experts is
          dedicated to delivering high-quality digital experiences that
          captivate and engage your audience.
        </p>
        <div>
          <input placeholder="Enter your email" type="email" />
          <button className="btn" style={{ backgroundColor: buttonColor }}>Sign up</button>
        </div>
      </div>
    </section>
  );
};

export default Header;
