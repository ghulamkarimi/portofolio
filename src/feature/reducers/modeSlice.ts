import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../tailwind.config";
import type { Config } from "tailwindcss";


const fullConfig = resolveConfig(tailwindConfig as unknown as Config);


const customColors = Object.keys(tailwindConfig.theme?.extend?.colors || {});

const themeColors: Record<string, any> =
  typeof fullConfig.theme?.colors === "object"
    ? Object.fromEntries(
        Object.entries(fullConfig.theme.colors)
          .filter(([key]) => customColors.includes(key))
          .filter(([key]) => !["button", "icon"].includes(key)) 
      )
    : {};


const themeFonts: Record<string, any> =
  typeof fullConfig.theme?.fontFamily === "object" ? fullConfig.theme.fontFamily : {};

interface ModeState {
  mode: "desktop" | "mobile";
  buttonColor: string;
  iconColor: string;
  font: string;
  isOpen: boolean;
  availableColors: { name: string; hex: string }[];
  availableFonts: string[];
}

const initialState: ModeState = {
  mode: "desktop",
  buttonColor: themeColors.button ?? "#FF4500",
  iconColor: themeColors.icon ?? "#000000",
  font: themeFonts.FONT_VIGA?.[0] ?? "Montserrat",
  isOpen: true,
  availableColors: Object.entries(themeColors).map(([key, value]) => ({
    name: key,
    hex: typeof value === "string" ? value : "#000000",
  })),
  availableFonts: Object.keys(themeFonts),
};

const modelSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    setMode: (state, action: PayloadAction<"desktop" | "mobile">) => {
      state.mode = action.payload;
    },
    setButtonColor: (state, action: PayloadAction<string>) => {
      state.buttonColor = action.payload;
    },
    setIconColor: (state, action: PayloadAction<string>) => {
      state.iconColor = action.payload;
    },
    setFont: (state, action: PayloadAction<string>) => {
      state.font = action.payload;
    },
    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen;
    },
  
    saveSettings: (state) => {
 
      localStorage.setItem("buttonColor", state.buttonColor);
      localStorage.setItem("iconColor", state.iconColor);
      localStorage.setItem("font", state.font);
    }
  },
});

export const { setMode, setButtonColor, setIconColor, setFont, saveSettings,toggleSidebar } =
  modelSlice.actions;
export default modelSlice.reducer;
