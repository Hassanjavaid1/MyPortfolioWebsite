import ScrollToTop from "react-scroll-to-top";
import "./App.css";
import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./Loader";
const Contact = React.lazy(() => import("./Components/Contact"));
const Footer = React.lazy(() => import("./Components/Footer"));
const Home = React.lazy(() => import("./Components/Home"));
const Navbar = React.lazy(() => import("./Components/Navbar"));
const Portfolio = React.lazy(() => import("./Components/Portfolio"));
const About = React.lazy(() => import("./Components/About"));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <BrowserRouter basename="/MyPortfolioWebsite">
          <Navbar />
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
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
