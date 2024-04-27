import { ButtonNav } from "./ButtonNav";

export const VerticalBar = (props) => {
  const handleCaseClick = (page) => {
    props.setPage(page);
  };
    return (
      <section className="w-full h-full max-w-72 border-r border-white p-4 gap-6 flex flex-col">
        <ButtonNav text="Videos" onClick={handleCaseClick} />
        <ButtonNav text="Fotos" onClick={handleCaseClick} />
        <ButtonNav text="Memes" onClick={handleCaseClick} />
        <ButtonNav text="Canciones" onClick={handleCaseClick} />
      </section>
    );
  };