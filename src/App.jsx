import { useState } from "react";
import "./App.css";
import { VerticalBar } from "./Componentes/VerticalBar/VerticalBar";
import { LoadPage } from "./Componentes/LoadPage/LoadPage";

const Pages = {
  VIDEOS: "Videos",
};

function App() {
  const [page, setPage] = useState(Pages.VIDEOS);

  return (
    <section className="h-screen w-full flex">
      <VerticalBar setPage={setPage} />
      <LoadPage page={page} />
    </section>
  );
}

export default App;
