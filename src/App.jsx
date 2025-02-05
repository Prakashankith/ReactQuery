import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import MainLayout from "./Components/Layout/Mainlayout";
import FetchOld from "./Pages/FetchOld";
import Home from "./Pages/Home";
import Fetchrq from "./Pages/FetchRq";
import "./App.css";
import FetchIndv from "./Components/UI/FetchIndv";

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
      {
        path: "/rq/:id",
        element: <FetchIndv />,
      },
    ],
  },
]);
function App() {
  const queryclient = new QueryClient();
  return (
    <QueryClientProvider client={queryclient}>
      <RouterProvider router={router}></RouterProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
