import { useDispatch, useSelector } from "react-redux";
import { setMode } from "../feature/reducers/modeSlice";
import { RootState } from "../feature/store";
import { Monitor, Smartphone } from "lucide-react"; // Icons von Lucide

const ModeToggle = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state: RootState) => state.mode.mode);

  return (
    <div className="flex gap-4">
      {/* Desktop Button */}
      <button
        onClick={() => dispatch(setMode("desktop"))}
        className={`p-2 rounded-lg ${mode === "desktop" ? "bg-black text-white" : "bg-gray-200"}`}
      >
        <Monitor size={24} />
      </button>

      {/* Mobile Button */}
      <button
        onClick={() => dispatch(setMode("mobile"))}
        className={`p-2 rounded-lg ${mode === "mobile" ? "bg-black text-white" : "bg-gray-200"}`}
      >
        <Smartphone size={24} />
      </button>
    </div>
  );
};

export default ModeToggle;
