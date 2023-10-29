import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";

import { BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter basename="/MyPortfolioWebsite">
        <Navbar />
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/projects" element={<Projects/>}/>
            <Route exact path="/contact" element={<Contact/>}/>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;