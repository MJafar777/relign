import React from "react";
import backImage1 from "../../Images/IslamPage/bg-vector-1.png";
import backImage2 from "../../Images/IslamPage/bg-vector-2-1.png";
import s from "./backImage.module.css";
const BackImage = () => {
  return (
    <>
      <div className={s.backImage1}>
        <img src={backImage1} alt="right" />
      </div>
      <div className={s.backImage2}>
        <img src={backImage2} alt="left" />
      </div>
    </>
  );
};

export default BackImage;
