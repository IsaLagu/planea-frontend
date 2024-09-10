import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import { SignUp } from "./pages/signUp/SignUp";
import { LogIn } from "./pages/logIn/LogIn";
import { CreateEvent } from "./pages/events/CreateEvent";
import { Home } from "./pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/login", element: <LogIn /> },
      { path: "/events/create", element: <CreateEvent /> },
    ],
  },
]);
