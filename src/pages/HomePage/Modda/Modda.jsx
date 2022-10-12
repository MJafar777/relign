import React from "react";
import s from "./modda.module.css";
import Title from "../../../components/Title/Title";
import BackImage from "../../../components/BackImage/BackImage";

const Modda = () => {
  const container = "container" + " " + s.content;
  return (
    <div className={s.background}>
      <BackImage />
      <div className={container}>
        <Title title={"O'zbekistondagi dinlar"} />
        <p className="text">
          O‘zbekistonda asosiy din – islom, lekin u dunyoviy davlat bo‘lib,
          turli din va konfessiya vakillari ahil-inoq yashab kelmoqda. Rasmiy
          maʼlumotlarga koʻra, bugungi kunda 2225 ta diniy tashkilot, 16 ta
          turli diniy konfessiya roʻyxatga olingan. O‘zbekistonning bu xilma-xil
          etnik qiyofasi mamlakatda din masalasiga bag‘rikenglik yuksak darajada
          ekanligini ko‘rsatadi. O‘zbekiston Konstitutsiyasi diniy erkinlikni
          himoya qiladi. Har kim biron bir dinga e'tiqod qilish yoki e'tiqod
          qilmaslik huquqiga ega. (31-modda) Sunniylik islom O'zbekistonda
          hukmron din bo'lib, mamlakat aholisining 93 foizini tashkil etadi,
          bundan mustasno, asosan Buxoro va Samarqandda istiqomat qiluvchi shia
          musulmonlarining 1 foizi bundan mustasno.
        </p>
      </div>
    </div>
  );
};

export default Modda;
