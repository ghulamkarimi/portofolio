import { useDispatch, useSelector } from "react-redux";
import {
  setButtonColor,
  setIconColor,
  setFont,
  saveSettings,
  toggleSidebar,
} from "../feature/reducers/modeSlice";
import { RootState } from "../feature/store/index";
import { useState } from "react";
import { CircleX, Palette, Check } from "lucide-react";

interface Color {
  name: string;
  hex: string;
}

interface Font {
  name: string;
  style: string;
}

const colors: Color[] = [
  { name: "AI generated", hex: "#ffffff" },
  { name: "Indigo", hex: "#4B0082" },
  { name: "Han blue", hex: "#446CCF" },
  { name: "Orchid pink", hex: "#DA70D6" },
  { name: "Basque green", hex: "#2E8B57" },
  { name: "Red berry", hex: "#8B0000" },
  { name: "Purplish blue", hex: "#6A5ACD" },
  { name: "Obsidian shell", hex: "#635147" },
  { name: "Beagle brown", hex: "#A52A2A" },
  { name: "Chinese plant", hex: "#BDB76B" },
  { name: "Aurora orange", hex: "#FF4500" },
];

const fonts: Font[] = [
  { name: "Dancing Script", style: "'Dancing Script', cursive" },
  { name: "Pacifico", style: "'Pacifico', cursive" },
  { name: "Great Vibes", style: "'Great Vibes', cursive" },
  { name: "Sacramento", style: "'Sacramento', cursive" },
  { name: "Lobster", style: "'Lobster', cursive" },
  { name: "Parisienne", style: "'Parisienne', cursive" },
  { name: "Satisfy", style: "'Satisfy', cursive" },
  { name: "Allura", style: "'Allura', cursive" },
  { name: "Tangerine", style: "'Tangerine', cursive" },
  { name: "Homemade Apple", style: "'Homemade Apple', cursive" },
  { name: "Courgette", style: "'Courgette', cursive" },
  { name: "Norican", style: "'Norican', cursive" },
  { name: "Marck Script", style: "'Marck Script', cursive" },
  { name: "Italianno", style: "'Italianno', cursive" },
  { name: "Delius", style: "'Delius', cursive" },
  { name: "Bilbo Swash Caps", style: "'Bilbo Swash Caps', cursive" },
  { name: "Arizonia", style: "'Arizonia', cursive" },
];

const Sidebar = () => {
  const dispatch = useDispatch();
  const { buttonColor, font, isOpen } = useSelector(
    (state: RootState) => state.mode
  );

  const [selectedColor, setSelectedColor] = useState(buttonColor);
  const [selectedFont, setSelectedFont] = useState(font);
  const [activeTab, setActiveTab] = useState("color");

  return (
    <div>
       
      <div
        className={`fixed top-0 right-0 h-screen w-72 bg-black text-white p-4 shadow-lg transition-transform duration-500 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
  
        <div className="flex space-x-2 mb-4">
          <button
            className={`px-4 py-1 rounded ${
              activeTab === "font" ? "bg-blue-600" : "bg-gray-700"
            }`}
            onClick={() => setActiveTab("font")}
          >
            Font
          </button>
          <button
            className={`px-4 py-1 rounded ${
              activeTab === "color" ? "bg-blue-600" : "bg-gray-700"
            }`}
            onClick={() => setActiveTab("color")}
          >
            Color
          </button>
        </div>

 
        <h2 className="text-lg font-bold">Theme Settings</h2>

 
        {activeTab === "font" && (
          <div className="mt-2 max-h-[500px] overflow-y-auto  rounded-md p-2">
            {fonts.map((font) => (
              <div
                key={font.name}
                className="p-2 cursor-pointer hover:bg-gray-700 flex justify-between"
                style={{ fontFamily: font.style }}
                onClick={() => setSelectedFont(font.style)}
              >
                {font.name}
                {selectedFont === font.style && (
                  <Check className="text-green-400" size={18} />
                )}
              </div>
            ))}
          </div>
        )}

  
        {activeTab === "color" && (
          <div className="mt-4 grid grid-cols-1 gap-2">
            {colors.map((color) => (
              <div
                key={color.name}
                className="flex items-center p-2 cursor-pointer hover:bg-gray-700 justify-between"
                onClick={() => setSelectedColor(color.hex)}
              >
                <div className="flex items-center">
                  <span
                    style={{ backgroundColor: color.hex }}
                    className="w-6 h-6 rounded-full border"
                  ></span>
                  <span className="ml-2 text-white">{color.name}</span>
                </div>
                {selectedColor === color.hex && (
                  <Check className="text-green-400" size={18} />
                )}
              </div>
            ))}
          </div>
        )}

       
        <button
          onClick={() => {
            dispatch(setButtonColor(selectedColor));
            dispatch(setIconColor(selectedColor));
            dispatch(setFont(selectedFont));
            dispatch(saveSettings());
          }}
          className="mt-6 w-full bg-blue-600 text-white py-2 rounded"
        >
          Save
        </button>
      </div>
      <button
        onClick={() => dispatch(toggleSidebar())}
        className={`fixed bottom-4 p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-transform duration-500 ease-in-out ${
          isOpen ? "right-72" : "right-4"
        }`}
        style={{ backgroundColor: buttonColor, color: "white" }}
      >
        {isOpen ? <CircleX size={32} /> : <Palette size={32} />}
      </button>
    </div>
  );
};

export default Sidebar;
