import React from "react";
import { Link, useParams } from "react-router-dom";
import consolesData from "../data/consoles.json";
import "../styles/ConsolePage.css";
import "../styles/company.css";

function ConsolePage() {
  const { genId, consoleId } = useParams();
  const generation = consolesData[genId];
  const consoleInfo = generation
    ? generation.consoles.find((c) => c.id === consoleId)
    : null;

  if (!consoleInfo) {
    return <h2>Console não encontrado</h2>;
  }

  return (
    <div className="consolePage">
      <div className={`console-container ${consoleInfo.company}`}>
        <h2>{consoleInfo.name}</h2>
        <img src={`${consoleInfo.image}`} alt={consoleInfo.name} className="console-image" />
        <br></br>
        <br></br>
        <p><strong>Descrição:</strong> {consoleInfo.description}</p>
        <p><strong>Data de Lançamento:</strong> {consoleInfo.releaseDate}</p>
        <p><strong>Fabricante:</strong> {consoleInfo.company}</p>
        
        <Link to={`/gen/${genId}`} className="back-button">Voltar para {generation.name}</Link>
        <Link to="/" className="back-button">Voltar para Home</Link>
      </div>
    </div>
  );
}

export default ConsolePage;
