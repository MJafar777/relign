import React from "react";

import s from "./pillarsOfIslam.module.css";

import image1 from "../../../Images/IslamPage/ehson.png";
import image2 from "../../../Images/IslamPage/roza.png";
import image3 from "../../../Images/IslamPage/hajj.png";
import image4 from "../../../Images/IslamPage/namoz.png";
import image5 from "../../../Images/IslamPage/shahodat.png";

const PillarsOfIslam = function () {
  return (
    <>
      <div className={"container" + " " + s.pillars}>
        <h1 className={s.title}>Pillars Of Islam</h1>
        <div className={"container" + " " + s.icons}>
          <div className={s.icon}>
            <img src={image1} alt="" />
            <p className={s.text}>ZAKAT</p>
          </div>
          <div className={s.icon}>
            <img src={image2} alt="" />
            <p className={s.text}>SAWM</p>
          </div>
          <div className={s.icon}>
            <img src={image3} alt="" />
            <p className={s.text}>HAJJ</p>
          </div>
          <div className={s.icon}>
            <img src={image4} alt="" />
            <p className={s.text}>SALAH</p>
          </div>
          <div className={s.icon}>
            <img src={image5} alt="" />
            <p className={s.text}>SHAHADAH</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PillarsOfIslam;
