import React from "react";
import s from "./religion.module.css";
import img1 from "../../Images/Religons/1.svg";
import img2 from "../../Images/Religons/2.svg";
import img3 from "../../Images/Religons/3.svg";
import img4 from "../../Images/Religons/4.svg";
import img5 from "../../Images/Religons/5.svg";
import img6 from "../../Images/Religons/6.svg";
import img7 from "../../Images/Religons/7.svg";
import img8 from "../../Images/Religons/8.svg";
const Religion = () => {
  const grids = s.grids + " " + "container";
  return (
    <div className={s.religion}>
      <div className={grids}>
        <div>
          <img src={img1} alt="img1" />
          <p>Islam</p>
        </div>
        <div>
          <img src={img2} alt="img2" />
          <p>Xristianlik</p>
        </div>
        <div>
          <img src={img3} alt="img3" />
          <p>Hinduizm</p>
        </div>
        <div>
          <img src={img4} alt="img4" />
          <p>Buddizm</p>
        </div>
        <div>
          <img src={img5} alt="img5" />
          <p>Yahudiylik</p>
        </div>
        <div>
          <img src={img6} alt="img6" />
          <p>Nasroniylik</p>
        </div>
        <div>
          <img src={img7} alt="img7" />
          <p>Lyuteryanlar</p>
        </div>
        <div>
          <img src={img8} alt="img8" />
          <p>Buddistlar</p>
        </div>
      </div>
    </div>
  );
};

export default Religion;
