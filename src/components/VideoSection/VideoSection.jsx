import React from "react";

import s from "./videoSection.module.css";

import video from "../../Videos/islam.mp4";

const VideoSection = () => {
  return (
    <>
      <div className={s.bigTitle}>
        <h2 className={s.title}>
          <span> DISCOVER</span>
          <span> ISLAMIC</span>
          <span> BELIEFS</span>
        </h2>
        <h2 className={s.title}>
          <span className={s.span1}> WITH</span>
          <span className={s.span1}> US</span>
          <span className={s.span1}> HERE</span>
        </h2>
      </div>
      <video autoPlay loop muted className={s.video}>
        <source src={video} type="video/mp4" />
      </video>
    </>
  );
};

export default VideoSection;
