function Projekt() {
  const projekti = [
    { id: 1, naziv: "Quote Generator", link: " https://quote-app-julije.netlify.app" },
    { id: 2, naziv: "Medical Quiz", link: " https://medical-quiz-julije.netlify.app" },
    { id: 3, naziv: "Kalkulator", link: " https://kalkulator-julije.netlify.app" },
    { id: 4, naziv: "Todo Lista", link: " https://todo-react-julije.netlify.app" },
  ];

  return (
    <div className="stranica">
      <h1 className="projekti-naslov">Projekti</h1>
      <ul>
        {projekti.map((projekt) => (
          <li key={projekt.id}>
            <a href={projekt.link} target="_blank">
              {projekt.naziv}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Projekt;
