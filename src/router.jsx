import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import { SignUp } from "./pages/signUp/SignUp";
import { LogIn } from "./pages/logIn/LogIn";
import { CreateEvent } from "./pages/events/CreateEvent";
import { EventCard } from "./pages/EventCard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <EventCard /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/login", element: <LogIn /> },
      { path: "/events/create", element: <CreateEvent /> },
    ],
  },
]);
