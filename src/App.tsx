import { Box } from "@chakra-ui/react";
import { Header } from "./components/Header";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { Presentation } from "./pages/Presentation";
import { ReactPage } from "./pages/ReactPage";

const App = () => {
  const AppRoutes = () => {
    const routes = [
      { path: "/", element: <Presentation /> },
      { path: 'react', element: <ReactPage /> },
      // Add more routes here
    ];

    const element = useRoutes(routes);
    return element;
  };
  return (
    // <Box>
    //   <Header />
    //   <Box p={4}>
    //     <h1>Welcome to my Chakra UI app!</h1>
    //   </Box>
    // </Box>
    <>
      <Router>
        <AppRoutes />
      </Router>
    </>
  );
};

export default App;
