import React from "react";
import { Link, useParams } from "react-router-dom";
import consolesData from "../data/consoles.json";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/GenerationPage.css";
import "../styles/company.css";

function GenerationPage() {
  const { genId } = useParams();
  const generation = consolesData[genId];

  if (!generation) {
    return <div className="error-message">Geração não encontrada.</div>;
  }

  return (
    <div className={`genPage ${generation ? "gen"+genId : ""}`}>
      <div className="generation-container">
        <h2>{generation.name}</h2>
        <div className="generation-consoles">
          {generation.consoles.map((console) => (
            <Link to={`/gen/${genId}/${console.id}`} key={console.id} className={`console-card-Gen 
              ${console.company}`}>
              <div className="console-info">
                <h6>{console.name}</h6>
                <p>{console.year}</p>
                <p>{console.company}</p>
              </div>
              <div className="console-image-Gen">
                <img src={`/videogame-timeline/${console.image}`} alt={console.name} />
              </div>
            </Link>
          ))}
        </div>
        <Link to="/" className="back-button">Voltar para Home</Link>
      </div>
    </div>
  );
}

export default GenerationPage;
