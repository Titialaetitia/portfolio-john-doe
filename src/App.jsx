import { Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/home";
import Services from "./pages/services";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import MentionsLegales from "./pages/mentionslegales";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentionslegales" element={<MentionsLegales />} />
      </Route>
    </Routes>
  );
}

export default App;