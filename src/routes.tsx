import { useRoutes } from "react-router-dom";
import { Presentation } from "./pages/Presentation";
import { ReactPage } from "./pages/ReactPage";
import { AboutPage } from "./pages/AboutPage";
import { ReactTutorials } from "./pages/ReactPage/subPage/ReactTutorial";
import { NotFoundPage } from "./pages/NotFoundPage";

export const AppRoutes = () => {
  const routes = [
    { path: "/", element: <Presentation /> },
    {
      path: "react",
      element: <ReactPage />,
      children: [
        { path: "", element: <ReactTutorials /> },
        { path: "subpath", element: <AboutPage /> },
      ],
    },
    {
        path: "about", element: <AboutPage/>
    },
    { path: "*", element: <NotFoundPage /> },

    // Add more routes here
  ];

  const element = useRoutes(routes);
  return element;
};
