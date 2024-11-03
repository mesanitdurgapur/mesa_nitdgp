import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from "./components/footer";
import Team from "./pages/team";
import Home from "./pages/home";
import Event from "./pages/event";
import Gallery from "./pages/gallery";
import Contact from "./pages/contact";

function App() {
  return (
    <>
      <Router>
      
      
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<Event />} />
        <Route path="/team" element={<Team />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
