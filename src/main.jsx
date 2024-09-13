import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import dayjs from "dayjs";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./router";
import { UserProvider } from "./context/UserContext";
import "dayjs/locale/es";

dayjs.locale("es");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
