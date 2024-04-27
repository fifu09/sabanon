import { VideosPages } from "./VideosPage";

export const LoadPage = (props) => {

  const loader = () => {
    switch (props.page) {
      case "Videos":
        return (
          <VideosPages />
        );
    }
  };
  return (
    <section className="w-full mt-20 overflow-auto">
      {loader()}
    </section>
  );
};
