import Home from "./Pages/Home";
import "./App.css";
import ProductsPage from "./Pages/ProductsPage";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import LoginPage from "./Pages/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CommunityPage from "./Pages/CommunityPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/tech-farm" element={<Home />} />
          <Route path="/Products" element={<ProductsPage />} />
          <Route path="/Commmunity" element={<CommunityPage />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
