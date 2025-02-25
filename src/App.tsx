import { useSelector } from "react-redux";
import { RootState } from "./feature/store";
import ModeToggle from "./components/ModeToggle";
import Sidebar from "./components/Sidebar";
import { useEffect } from "react";
import MenuMobile from "./components/menu/MenuMobile";
import Menu from "./components/menu/Menu";
import ResizeHandler from "./components/handleResize/ResizeHandler"; // Hier gehört es hin
import Footer from "./components/Footer";
import { Outlet,useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const App = () => {
  const { mode, font, isDesktop } = useSelector(
    (state: RootState) => state.mode
  );

  const { lang } = useParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lang && ["en", "de", "fa", "ar"].includes(lang)) {
      i18n.changeLanguage(lang); // Sprache setzen
      document.documentElement.lang = lang; // HTML <lang>-Attribut setzen
      document.documentElement.dir = lang === "fa" || lang === "ar" ? "rtl" : "ltr"; // RTL für Arabisch & Farsi aktivieren
      localStorage.setItem("language", lang); // Sprache speichern
    }
  }, [lang, i18n]);

  useEffect(() => {
    document.body.classList.remove(...document.body.classList);
    document.body.classList.add(font || "font-dancing");
  }, [font]);

  return (
    <div className={`${font || "font-dancing"} min-h-screen`}>
      <ResizeHandler /> {/* WIRD NUR EINMAL GELADEN */}
      <header
        className={`${
          isDesktop
            ? "flex justify-center gap-10 p-4 bg-white shadow-md"
            : "hidden"
        }`}
      >
        <h1 className="text-xl font-bold">ai-webkraft</h1>
        <ModeToggle />
      </header>
      <div className="border border-b-1" />
      <Sidebar />
      <div
        className={`min-h-screen transition-all duration-400 flex flex-col items-center ${
          mode === "mobile" ? "bg-gray-300 " : "bg-white"
        }`}
      >
        <div
          className={`w-full ${
            mode === "mobile"
              ? "max-w-[390px] mx-auto bg-white"
              : "max-w-[1600px] mx-auto"
          } flex flex-col items-center`}
        >
          <main className=" m-4 w-full">
          
            <div className="w-full flex justify-center">
              {mode === "desktop" ? <Menu /> : <MenuMobile />}
            </div>
            <div>
              <Outlet />  
            </div>
            
          <Footer />
       
          </main>
        </div>
       
      </div>
    </div>
  );
};

export default App;
