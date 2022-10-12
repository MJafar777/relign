import React from "react";

import s from "./mainText.module.css";

import image1 from "../../../Images/IslamPage/mosque1.webp";
import image2 from "../../../Images/IslamPage/mosque2.jpg";
import image3 from "../../../Images/IslamPage/mosque3.jpg";

const MainText = function () {
  return (
    <>
      <div className="container">
        <h1 className="title">Pillars of Islam</h1>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          impedit autem, laboriosam inventore nobis sit nemo atque illum
          delectus debitis doloremque quo nam qui beatae earum quasi, sapiente
          quaerat temporibus saepe. Labore at tempora ea! Sed illo esse eveniet,
          sunt quod in odit, ea nostrum distinctio atque qui. Illo vitae
          distinctio minus rerum eaque consequatur, officia nostrum obcaecati,
          repellat quasi ipsa incidunt id possimus eligendi, inventore culpa
          veniam aliquid eos beatae est sit enim vel optio nihil. Maiores in quo
          minus voluptatum id exercitationem consequatur at excepturi omnis iure
          porro tenetur harum perferendis, rem quasi quibusdam laboriosam, nihil
          minima est.
        </p>
        <br />
        <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          impedit autem, laboriosam inventore nobis sit nemo atque illum
          delectus debitis doloremque quo nam qui beatae earum quasi, sapiente
          quaerat temporibus saepe. Labore at tempora ea! Sed illo esse eveniet,
          sunt quod in odit, ea nostrum distinctio atque qui. Illo vitae
          distinctio minus rerum eaque consequatur, officia nostrum obcaecati,
          repellat quasi ipsa incidunt id possimus eligendi, inventore culpa
          veniam aliquid eos beatae est sit enim vel optio nihil. Maiores in quo
          minus voluptatum id exercitationem consequatur at excepturi omnis iure
          porro tenetur harum perferendis, rem quasi quibusdam laboriosam, nihil
          minima est.
        </p>
        <div className={s.imgBox}>
          <img src={image1} alt="mosque1" />
          <img src={image2} alt="mosque2" />
          <img src={image3} alt="mosque3" />
        </div>
        <br />
        <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          impedit autem, laboriosam inventore nobis sit nemo atque illum
          delectus debitis doloremque quo nam qui beatae earum quasi, sapiente
          quaerat temporibus saepe. Labore at tempora ea! Sed illo esse eveniet,
          sunt quod in odit, ea nostrum distinctio atque qui. Illo vitae
          distinctio minus rerum eaque consequatur, officia nostrum obcaecati,
          repellat quasi ipsa incidunt id possimus eligendi, inventore culpa
          veniam aliquid eos beatae est sit enim vel optio nihil. Maiores in quo
          minus voluptatum id exercitationem consequatur at excepturi omnis iure
          porro tenetur harum perferendis, rem quasi quibusdam laboriosam, nihil
          minima est.
        </p>
      </div>
    </>
  );
};

export default MainText;
