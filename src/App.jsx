import { useState } from "react";
import "./App.css";
import { VerticalBar } from "./Componentes/VerticalBar/VerticalBar";
import { LoadPage } from "./Componentes/LoadPage/LoadPage";


function App() {
  const [page, setPage] = useState("Inicio");

  return (
    <section className="h-screen w-full flex">
      <VerticalBar setPage={setPage} />
      <LoadPage page={page} />
    </section>
  );
}

export default App;
