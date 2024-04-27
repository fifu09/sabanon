import { InicioPage } from "./InicioPage";
import { VideosPages } from "./VideosPage";

export const LoadPage = (props) => {

  const loader = () => {
    switch (props.page) {
        case "Inicio":
            return <InicioPage />
        case "Videos":
            return <VideosPages />
    }
  };
  return (
    <section className="w-full overflow-auto">
      {loader()}
    </section>
  );
};
