import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import HomePage from "../../pages/HomePage";

import AboutPage from "../../pages/AboutPage";
import ContactPage from "../../pages/ContactPage";
import PortfolioPage from "../../pages/PortfolioPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    errorElement: <div>Not Found</div>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/portfolio",
        element: <PortfolioPage />,
      },
    ],
  },
]);

export default router;
