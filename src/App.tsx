import { useSelector } from "react-redux";
import { RootState } from "./feuture/store";
import ModeToggle from "./components/ModeToggle";
import Sidebar from "./components/Sidebar";
import { TriangleAlert } from "lucide-react";

const Layout = () => {
  const { mode, buttonColor, iconColor, font } = useSelector((state: RootState) => state.mode);

  return (
    <div  
     style={{ fontFamily: font }}>  {/* ✅ Schriftart für die gesamte Seite setzen */}
      <div className={`${mode === "desktop" ? "border-b-2" : ""}`}>
        <header className="flex justify-center gap-6 p-4">
          <h1 className="text-xl font-bold">ai.webkraft</h1>  {/* ✅ Icon-Farbe */}
          <ModeToggle />
        </header>
      </div>

      {/* ✅ Sidebar einbinden */}
      <Sidebar />

      <div className={`min-h-screen  transition-all duration-400 ${mode === "mobile" ? "bg-black mt-2 pt-2" : "bg-white "}`}>
        <div className={`${mode === "mobile" ? "w-[390px] mx-auto bg-white" : "max-w-[1600px] mx-auto"}`}>
          <main className="p-4">
            <h2 className="text-2xl font-bold">Hello World!</h2>  {/* ✅ Icon-Farbe */}
            <p className="text-lg">Welcome to the world of AI!</p>
          </main>

          {/* ✅ Beispiel-Button */}
          <button style={{ backgroundColor: buttonColor, color: "white" }} className="px-4 py-2 rounded">
            Main Button
          </button>

          {/* ✅ Beispiel-Icon */}
          {/* <p style={{ color: iconColor }}>This is an icon</p> */}
          <TriangleAlert style={{color:iconColor}} />
        </div>
      </div>
    </div>
  );
};

export default Layout;
