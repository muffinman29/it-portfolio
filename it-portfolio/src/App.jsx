import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import TicketingSystem from "./pages/TicketingSystem";
import HomeLab from "./pages/HomeLab";
import Wireshark from "./pages/Wireshark";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ticketing-system" element={<TicketingSystem />} />
        <Route path="/home-lab" element={<HomeLab />} />
        <Route path="/wireshark" element={<Wireshark />} />
      </Routes>
      <Footer />
    </Router>
  );
}
