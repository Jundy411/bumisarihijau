import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import ScrollTop from "./content/ScrollTop";
import Home from "./page/Home";
import AboutUs from "./page/AboutUs";
import Service from "./page/Service";
import PortfolioPage from "./page/PortfolioPage";
import BangunanBaru from "./sections/Service/BangunanBaru";
import Renovasi from "./sections/Service/Renovasi";
import Arsitek from "./sections/Service/Arsitek";
import Sipil from "./sections/Service/Sipil";
import Interior from "./sections/Service/Interior";
import Konsultasi from "./sections/Service/Konsultasi";
import ProjectRumah from "./sections/Portfolio/ProjectRumah";
const routeList = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        index: "/",
        element: <Home />,
      },
      {
        path: "service",
        element: <Service />,
      },
      {
        path:"/bangunan-baru",
        element:<BangunanBaru/>
      },
      {
        path:"/renovasi",
        element:<Renovasi/>
      },
      {
        path:"/arsitek",
        element:<Arsitek/>
      },
      {
        path:"/sipil",
        element:<Sipil/>
      },
      {
        path:"/interior",
        element:<Interior/>
      },
      {
        path:"/konsultasi",
        element:<Konsultasi/>
      },
      {
        path: "portfolio",
        element: <PortfolioPage />,
      },
      {
        path:"rumah",
        element:<ProjectRumah/>
      },
      {
        path: "galeri",
        element: <AboutUs />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={routeList}>
      <ScrollTop />
    </RouterProvider>
  );
}

export default App;
