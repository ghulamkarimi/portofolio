import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./feature/store";
import ModeToggle from "./components/ModeToggle";
import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";
import MenuMobile from "./components/menu/MenuMobile";
import Menu from "./components/menu/Menu";
import { setMode } from "./feature/reducers/modeSlice"; // Redux Action
import Header from "./components/header/Header";

const Layout = () => {
  const dispatch = useDispatch();
  const { mode, font } = useSelector((state: RootState) => state.mode);


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

 
  useEffect(() => {
    document.body.classList.remove(...document.body.classList);
    document.body.classList.add(font || "font-dancing");
  }, [font]);
  
  return (
    <div className={`${font || "font-dancing"} min-h-screen`}>
      <header className={`${mode === "desktop" ? "flex justify-center gap-10 p-4 bg-white shadow-md":"hidden"}`}>
        <h1 className="text-xl font-bold">ai.webkraft</h1>
        <ModeToggle />
     
      </header>
       <div className="border border-b-1"/>

      <Sidebar />

      <div
        className={`min-h-screen transition-all duration-400 flex flex-col items-center ${
          mode === "mobile" ? "bg-gray-600 pt-2" : "bg-white"
        }`}
      >
        <div
          className={`w-full ${
            mode === "mobile"
              ? "max-w-[390px] mx-auto bg-white"
              : "max-w-[1600px] mx-auto"
          } flex flex-col items-center`}
        >
          <main className="p-4 w-full">
            {/* Menü-Anzeige mit Berücksichtigung von ModeToggle & Bildschirmbreite */}
            <div className="w-full flex justify-center">
              {mode === "desktop" ? <Menu /> : <MenuMobile />}
            </div>

            <div>
              <Header />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
