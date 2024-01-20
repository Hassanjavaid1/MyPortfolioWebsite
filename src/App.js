import ScrollToTop from "react-scroll-to-top";
import "./App.css";
import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./Loader";
import Navbar from "./Components/Navbar";
const Home = React.lazy(() => import("./Components/Home"));
const About = React.lazy(() => import("./Components/About"));
const Portfolio = React.lazy(() => import("./Components/Portfolio"));
const Contact = React.lazy(() => import("./Components/Contact"));
const Footer = React.lazy(() => import("./Components/Footer"));
function App() {
  return (
    <>
      <BrowserRouter basename="/MyPortfolioWebsite">
        <Navbar />
        <Suspense fallback={<Loader />}>
          <div>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="About" element={<About />} />
              <Route exact path="/Portfolio" element={<Portfolio />} />
              <Route exact path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <ScrollToTop smooth />
          <Footer />
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
