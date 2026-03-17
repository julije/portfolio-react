import { Link } from "react-router-dom";
function Pocetna() {
  return (
    <div className="stranica">
      <h1>Julije Pernar</h1>
      <h2>Frontend Developer | Healthcare IT</h2>
      <p>
        Radiološki tehničar s vise godisnjim iskustvom u zdravstvu, trenutno u tranziciji prema
        frontend razvoju. Kombinujem medicinsko domensko znanje s React i JavaScript vještinama za
        izgradnju modernih web aplikacija.{" "}
      </p>
      <div className="gumbi">
        <Link className="gumb" to="/projekti">
          Projekti
        </Link>
        <Link className="gumb" to="/kontakt">
          Kontakt
        </Link>
      </div>
    </div>
  );
}
export default Pocetna;
