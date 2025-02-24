import { RouterProvider } from "react-router";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./feature/store/index.ts";
import { I18nextProvider } from "react-i18next"; // Import für Mehrsprachigkeit
import i18n from "./utils/i18n"; // Dein i18n-Konfigurationsfile
import "./index.css";
import router from "./components/router/index";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <RouterProvider router={router} />
    </I18nextProvider>
  </Provider>
);
