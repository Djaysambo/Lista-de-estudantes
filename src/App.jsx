import { RouterProvider } from "react-router-dom";
import { route } from "./routes";
import { Header } from "./components/header/header";


export const App = () => {
  return (
    <>
    
      <RouterProvider router={route} />
    </>
  );
};
