import { InicioPage } from "./InicioPage";
import { MemesPage } from "./MemesPage";
import { VideosPages } from "./VideosPage";

export const LoadPage = (props) => {
  const loader = () => {
    switch (props.page) {
        case "Inicio":
            return <InicioPage />
        case "Videos":
            return <VideosPages />
        case "Memes":
          return <MemesPage />
    }
  };
  return (
    <section className="w-full overflow-auto">
      {loader()}
    </section>
  );
};
