import React from "react";
import "./VideoComponent.css";
import Youtube from "react-youtube";

const VideoYT = () => (
  <div className="video-responsive">
    {/* <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/watch?v=BahIeLOGwt0`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    /> */}
    <Youtube videoId="PE9O0Fpy7ds" />
  </div>
);

export default VideoYT;
