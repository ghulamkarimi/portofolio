import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../../App";
import HomePage from "../../pages/HomePage";
import AboutPage from "../../pages/AboutPage";
import ContactPage from "../../pages/ContactPage";
import PortfolioPage from "../../pages/PortfolioPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/de" replace />, // Standard-Sprache auf Deutsch setzen
  },
  {
    path: "/:lang",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> }, // Startseite
      { path: "about", element: <AboutPage /> }, // Über uns
      { path: "contact", element: <ContactPage /> }, // Kontakt
      { path: "portfolio", element: <PortfolioPage /> }, // Portfolio
    ],
  },
  { path: "*", element: <div>Not Found</div> }, // Fehlerseite
]);

export default router;
