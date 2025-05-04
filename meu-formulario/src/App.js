import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pagina1 from "./components/Pergunta1";
import Pagina2 from "./components/Pergunta2";
import Resumo from "./components/Resumo";

function App() {
  const [respostas, setRespostas] = useState({ nome: "", idade: "" });

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pagina1 setRespostas={setRespostas} respostas={respostas} />} />
          <Route path="/pagina2" element={<Pagina2 setRespostas={setRespostas} respostas={respostas} />} />
          <Route path="/resumo" element={<Resumo respostas={respostas} />} />
        </Routes>
      </BrowserRouter>
  );

}

export default App;