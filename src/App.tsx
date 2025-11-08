import { useEffect, useState, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
import NavBar from "./sections/NavBar";
const JoinUsPage = lazy(() => import("./pages/JoinUsPage"));
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
                <Suspense fallback={
                  <div className="flex items-center justify-center min-h-screen">
                    <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#89E9FF] border-t-transparent" />
                  </div>
                }>
                  {route.element}
                </Suspense>
              </motion.div>
            }
          />
        ))}
      </Routes>
    </AnimatePresence>
  );
};

import AppLoader from "./components/AppLoader";
function App() {
  const [isMinDelayDone, setIsMinDelayDone] = useState(false);
  const [isDomLoaded, setIsDomLoaded] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("dark");
    const delayId = window.setTimeout(() => setIsMinDelayDone(true), 0);
    if (document.readyState === "complete") {
      setIsDomLoaded(true);
    }
    const onLoad = () => setIsDomLoaded(true);
    window.addEventListener("load", onLoad);
    // Safety: ensure we don't get stuck if 'load' never fires
    const safetyId = window.setTimeout(() => setIsDomLoaded(true), 3000);
    return () => {
      window.clearTimeout(delayId);
      window.clearTimeout(safetyId);
      window.removeEventListener("load", onLoad);
    };
  }, []);

  const isAppLoading = !(isDomLoaded && isMinDelayDone);

  return (
    <BrowserRouter>
      {isAppLoading && <AppLoader />}
      <NavBar />
      <div className="">
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
