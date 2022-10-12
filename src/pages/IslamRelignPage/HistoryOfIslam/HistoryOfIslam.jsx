import React from "react";
import s from "./history.module.css";
import image1 from "../../../Images/IslamPage/1.jpg";
import image3 from "../../../Images/IslamPage/2.jpg";
import image2 from "../../../Images/IslamPage/3.jpg";
import Title from "../../../components/Title/Title";

const HistoryOfIslam = () => {
  const container = "container" + " " + s.container;
  return (
    <div className={container}>
      <div className={s.flex}>
        <div className={s.image}>
          <img src={image1} />
        </div>
        <div>
          <Title title={"Title"} />
          <p className="text">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter consequences that are extremely painful.
          </p>
        </div>
      </div>
      <div className={s.flex}>
        <div>
          <Title title={"Title"} />
          <p className="text">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter consequences that are extremely painful.
          </p>
        </div>

        <div className={s.image}>
          <img src={image2} />
        </div>
      </div>
      <div className={s.flex}>
        <div className={s.image}>
          <img src={image3} />
        </div>
        <div>
          <Title title={"Title"} />
          <p className="text">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter consequences that are extremely painful.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HistoryOfIslam;
