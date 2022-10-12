import React from "react";
import BackImage from "../../../components/BackImage/BackImage";
import image1 from "../../../Images/IslamPage/img1.png";
import s from "./aboutIslam.module.css";

const AboutIslam = function () {
  return (
    <div className={s.background}>
      <div className={"container" + " " + s.mainPart}>
        <div className={s.imageSide}>
          <img src={image1} alt="first-image" className={s.img1} />
        </div>
        <div className={s.rightSide}>
          <h3 className={"text" + " " + s.subTitle}>Our History</h3>
          <h6 className={s.mainTitle}>About Islamic</h6>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            quisquam corporis hic dicta quae nostrum iure, dolorem sunt ut autem
            dolore veniam mollitia quas harum modi voluptatibus aspernatur rem
            esse.
          </p>
        </div>
      </div>
      <BackImage />
    </div>
  );
};

export default AboutIslam;
