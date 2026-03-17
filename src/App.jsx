import { Routes, Route, Link } from "react-router-dom";
import Pocetna from "./Pocetna";
import Projekt from "./Projekt";
import OMeni from "./OMeni";
import Kontakt from "./Kontakt";
import "./App.css";
function App() {
  return (
    <div>
      <nav>
        <Link to="/">Pocetna</Link>
        <Link to="/projekti">Projekt</Link>
        <Link to="/omeni">O meni</Link>
        <Link to="/kontakt">Kontakt</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Pocetna />} />
        <Route path="/projekti" element={<Projekt />} />
        <Route path="/omeni" element={<OMeni />} />
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>
    </div>
  );
}

export default App;
