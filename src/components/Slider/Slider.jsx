import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import NavItem from "../../components/NavItem/NavItem";
// import IslamRelign from "../../pages/IslamRelignPage/IslamRelign";
import s from "./slider.module.css";
const Slider = () => {
  return (
    <div>
      <div className={s.sliderPage}>
        <button className={s.btn}>
          <AiOutlineLeft className={s.btnChild} />
        </button>
        <div className={s.slider}>
          <div className={s.img6}>
            <div className={s.content}>
              <h2>Lorem Ipsum</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam quia at eveniet Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Nam, rem!
              </p>
              <button className={s.btn2}>
                <NavItem item={"Read more..."} pathname={"/islam"} />
              </button>
            </div>
          </div>
        </div>
        {/* <button className={s.btn}>
          <AiOutlineRight className={s.btnChild} />
        </button> */}
      </div>
    </div>
  );
};

export default Slider;
