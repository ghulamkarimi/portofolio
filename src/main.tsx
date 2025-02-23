import { RouterProvider } from "react-router";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./feature/store/index.ts";
import "./index.css";
 
import router from './components/router/index';

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
     <RouterProvider router={router} />
  </Provider>
);
