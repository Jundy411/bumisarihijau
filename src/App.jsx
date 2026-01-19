import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import ScrollTop from "./content/ScrollTop";
import Home from "./page/Home";
<<<<<<< HEAD
// import AboutUs from "./page/AboutUs";
=======
import AboutUs from "./page/AboutUs";
>>>>>>> b671a8f757c4163f69561e8900edb3d0bb1f9d21
import Service from "./page/Service";
import PortfolioPage from "./page/PortfolioPage";
import BangunanBaru from "./sections/Service/BangunanBaru";
import Renovasi from "./sections/Service/Renovasi";
import Arsitek from "./sections/Service/Arsitek";
import Sipil from "./sections/Service/Sipil";
import Interior from "./sections/Service/Interior";
import Konsultasi from "./sections/Service/Konsultasi";
import ProjectRumah from "./sections/Portfolio/ProjectRumah";
<<<<<<< HEAD
import Gallery from "./page/Gallery";
=======
>>>>>>> b671a8f757c4163f69561e8900edb3d0bb1f9d21
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
<<<<<<< HEAD
        path:"/rumah",
=======
        path:"rumah",
>>>>>>> b671a8f757c4163f69561e8900edb3d0bb1f9d21
        element:<ProjectRumah/>
      },
      {
        path: "galeri",
<<<<<<< HEAD
        element: <Gallery />,
=======
        element: <AboutUs />,
>>>>>>> b671a8f757c4163f69561e8900edb3d0bb1f9d21
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
