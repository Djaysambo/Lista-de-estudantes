import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/home";
import { Contacts } from "./pages/contacts";
import { Users } from "./pages/users";
import { UserDatails } from "./pages/user-details";
import { ErrorPage } from "./pages/error-page";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/users/:username",
    element: <UserDatails />,
  },
]);
