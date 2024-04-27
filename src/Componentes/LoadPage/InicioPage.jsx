export const InicioPage = () => {
  return (
    <section className="flex flex-col items-center p-20 h-full bg-younes bg-cover gap-20">
      <h1 className="text-5xl text-black font-bold bg-white opacity-60 rounded-2xl flex h-40 items-center justify-center px-10">Bienvenido a Sabañon</h1>
      <ul className="text-2xl text-black font-bold flex flex-col items-center justify-center w-2/3 bg-white opacity-60 rounded-2xl py-5">
        <li>FF15...</li>
        <li>¿Pero y este subnormal?...</li>
        <li>Mañana me desbanean una cuenta...</li>
        <li>Pues nada, no se quieren rendir...</li>
      </ul>
      <div className="flex h-full w-full justify-around items-center">
        <video src="/isma.mp4" className="w-[500px] animate-bounce" autoPlay={true} loop />
        <video src="/yunes_warwick.mp4" className="w-[500px]" autoPlay={true} loop muted />
      </div>
    </section>
  );
};
