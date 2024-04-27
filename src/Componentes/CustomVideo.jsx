import { useState } from "react";

export const CustomVideo = (props) => {
    const [playerReady, setPlayerReady] = useState(false);

    const loadYouTubePlayer = () => {
      setPlayerReady(true);
    };

    return (
      <button
        className="w-[300] h-[170] max-w-[300] max-h-[170] border hover:scale-105 relative hover:cursor-pointer rounded-md overflow-hidden"
        onClick={loadYouTubePlayer}
      >
        {!playerReady && (
          <>
            <div className="absolute w-full h-full bg-black opacity-40"></div>
            <div className="absolute w-full h-20 bg-white opacity-70 bottom-0">
              <h1 className="text-black font-bold flex items-center justify-center h-full text-xl">
                {props.title}
              </h1>
            </div>
          </>
        )}
        {!playerReady && (
          <img
            width="300"
            height="170"
            src={`http://img.youtube.com/vi/${props.src}/0.jpg`}
            alt="YouTube Thumbnail"
          />
        )}
        {playerReady && (
          <iframe
            title="Tasdlasmndk"
            width="300"
            height="225"
            src={`https://www.youtube.com/embed/${props.src}`}
            allowFullScreen
            autoPlay={true}
          ></iframe>
        )}
      </button>
    );
  };