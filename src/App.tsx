import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NavBar from "./sections/NavBar";
import JoinUsPage from "./pages/JoinUsPage";
import { AnimatePresence, motion } from "framer-motion";

const routes = [
  { location: "/", element: <HomePage /> },
  { location: "/about", element: <AboutPage /> },
  { location: "/join-us", element: <JoinUsPage /> },
];

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {routes.map((route, i) => (
          <Route
            key={i}
            path={route.location}
            element={
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              >
                {route.element}
              </motion.div>
            }
          />
        ))}
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <div className="pt-16">
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
