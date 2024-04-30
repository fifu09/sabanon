import { useState } from "react";
import { SelectCustomed } from "../SelectCustomed";
import { CustomImage } from "../CustomImage";

export const MemesPage = () => {
  const [nameFiltered, setNameFiltered] = useState("Todos");
    const imagesList = [        
        <CustomImage src="/Memes/fifu/fifu_lee_dz.jpg" />,
        <CustomImage src="/Memes/fifu/fifu_yunes_copa_dz.jpg" />,
        <CustomImage src="/Memes/fifu/fifu_cangrejo_bug.jpg" />,
        <CustomImage src="/Memes/fifu/fifu_clon_barsa.jpg" />,
        <CustomImage src="/Memes/fifu/fifu_repartidor_jungla.png" />,
        <CustomImage src="/Memes/yunes/yunes_lps_derrota.png" />,
        <CustomImage src="/Memes/yunes/yunes_lord_yasuo.png" />]
  return (
    <section className="px-10 py-5 flex flex-col gap-5 relative">
      <div className="w-full h-20">
        <SelectCustomed state={nameFiltered} setState={setNameFiltered} />
      </div>
      <div className="grid grid-cols-4 gap-10">
        {
        imagesList.filter(img=>nameFiltered === "Todos" || img.props.src.includes(nameFiltered))
            .map(img=>{
                return <li key={img.props.src}>{img}</li>
        })}

      </div>
      
    </section>
  );
};
