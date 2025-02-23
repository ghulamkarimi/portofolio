import { useDispatch, useSelector } from "react-redux";
import { setMode, setIsDesktop } from "../feature/reducers/modeSlice";
import { RootState } from "../feature/store";
import { Monitor, Smartphone } from "lucide-react"; // Icons von Lucide

const ModeToggle = () => {
  const dispatch = useDispatch();
  const { isDesktop } = useSelector((state: RootState) => state.mode);

  // Funktion zum Umschalten zwischen Desktop und Mobile Modus
  const handleToggle = () => {
    const newMode = isDesktop ? "mobile" : "desktop"; // Direkt aus isDesktop berechnen
    dispatch(setMode(newMode));
    dispatch(setIsDesktop(!isDesktop)); // isDesktop direkt invertieren
  };

  return (
    <div className="flex space-x-2">
      {/* Desktop Button */}
      <button
        onClick={handleToggle}
        className={`p-2 rounded-lg transition-all duration-300 ${
          isDesktop ? "bg-black text-white" : "bg-gray-200"
        }`}
      >
        <Monitor size={24} />
      </button>

      {/* Mobile Button */}
      <button
        onClick={handleToggle}
        className={`p-2 rounded-lg transition-all duration-300 ${
          !isDesktop ? "bg-black text-white" : "bg-gray-200"
        }`}
      >
        <Smartphone size={24} />
      </button>
    </div>
  );
};

export default ModeToggle;
