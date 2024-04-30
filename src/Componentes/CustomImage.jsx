import { useState } from "react";
import { ImCross } from "react-icons/im";

export const CustomImage = (props) => {
  const [zoomPicture, setZoomPicture] = useState(false);
  const handleCaseClick = () => {
    setZoomPicture(!zoomPicture);
  };
  return (
    <>
      {zoomPicture && (
        <div className="absolute h-full w-full bg-black inset-0 overflow-hidden z-20 animate-appear">
          <div className="w-full flex py-10 justify-end pr-10">
            <ImCross
              className="text-5xl hover:cursor-pointer hover:scale-110"
              onClick={handleCaseClick}
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={props.src}
              className="h-[700px] object-cover"
            />
          </div>
        </div>
      )}
      <img
        onClick={handleCaseClick}
        src={props.src}
        className="w-80 h-96 hover:cursor-pointer hover:scale-105 object-cover border-2 rounded-lg"
      />
    </>
  );
};
