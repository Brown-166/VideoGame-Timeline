import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import GenerationPage from "./pages/GenerationPage";
import ConsolePage from "./pages/ConsolePage";

function App() {
  return (
    <Router basename="/videogame-timeline/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gen/:genId" element={<GenerationPage />} />
        <Route path="/gen/:genId/:consoleId" element={<ConsolePage />} />
      </Routes>
    </Router>
  );
}

export default App;