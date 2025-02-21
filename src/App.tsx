import { useSelector } from "react-redux";
import { RootState } from "./feuture/store";
import ModeToggle from "./components/ModeToggle";

const Layout = () => {
  const mode = useSelector((state: RootState) => state.mode.mode);

  return (
    <div>
   <div className={`${mode === "desktop" ? " border-b-2" : ""}`}>


   
      <header className="flex justify-center gap-6 p-4">
        <h1 className="text-xl font-bold text-black">ai.webkraft</h1>
        <ModeToggle />
      
      </header>
      </div>

      <div
        className={`min-h-screen transition-all duration-400 ${
          mode === "mobile" ? "bg-black mt-2 pt-2" : "bg-white "
        }`}
      >
        <div
          className={`${
            mode === "mobile"
              ? "w-[390px] mx-auto bg-white"
              : "max-w-[1600px] mx-auto"
          }`}
        >
          <main className="p-4">
            <h2 className="text-2xl font-bold text-black">Hello World!</h2>
            <p className="text-lg text-black">Welcome to the world of AI!</p>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
