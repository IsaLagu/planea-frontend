import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import { SignUp } from "./pages/SignUp";
import { LogIn } from "./pages/LogIn";
import { CreateEvent } from "./pages/CreateEvent";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <div>Hola</div> },
      { path: "/signup", element: <SignUp /> },
      { path: "/login", element: <LogIn /> },
      { path: "/events/create", element: <CreateEvent /> },
    ],
  },
]);
