import React from "react";
import Diagramm from "../../components/Diagramm/Diagramm";
import Religion from "../../components/Religion/Religion";
import Slider from "../../components/Slider/Slider";
import Budizm from "./Budizm/Budizm";
import Christianity from "./Christianity/Christianity";
import s from "./homePage.module.css";
import Modda from "./Modda/Modda";
import President from "./President/President";

import Statistics from "./Statistics/Statistics";

const HomePage = () => {
  return (
    <div className={s.home}>
      <Slider />
      <div className="container">
        <Statistics />
      </div>
      <Religion />
      <President />
      <Modda />
      <Christianity />
      <Budizm />
    </div>
  );
};

export default HomePage;
