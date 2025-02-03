import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Components/Layout/Mainlayout";
import FetchOld from "./Pages/FetchOld";
import Home from "./Pages/Home";
import Fetchrq from "./Pages/FetchRq";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/trad",
        element: <FetchOld />,
      },
      {
        path: "/rq",
        element: <Fetchrq />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
