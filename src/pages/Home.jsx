import React from "react";
import { Link } from "react-router-dom";
import consolesData from "../data/consoles.json";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Home.css";
import "../styles/company.css";

function Home() {
  return (
    <div className="timeline-container back1">
      <h2 className="title">Linha do Tempo dos Videogames</h2>
      <div className="timeline-wrapper">
        <div className="timeline-line"></div>
        <div className="timeline">
          {Object.entries(consolesData).map(([genId, generation], index) => (
            <div key={genId} className="generation-section">
              <Link key={genId} to={`/gen/${genId}`} className="generation-label">
                {generation.name}
              </Link>
              <div className="generation-cards">
                {generation.consoles.map((console) => (
                  <Link to={`/gen/${genId}/${console.id}`} key={console.id} className={`console-card 
                  ${console.company}`}>
                    <div className="console-info">
                      <h6>{console.name}</h6>
                      <p>{console.year}</p>
                    </div>
                    <div className="console-image">
                      <img src={`/images/${console.image}`} alt={console.name} />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
