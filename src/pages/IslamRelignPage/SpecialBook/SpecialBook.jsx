import React from "react";

import bookImage from "../../../Images/IslamPage/book.jpg";

import s from "./specialBook.module.css";

const SpecialBook = function () {
  return (
    <>
      <div className={s.specialBook}>
        <h1 className={s.title}>SPECIAL BOOK</h1>
        <div className={"container" + " " + s.big}>
          <div className={s.left}>
            <img src={bookImage} alt="special-boook" className={s.book} />
          </div>
          <div className={s.right}>
            <h4 className={s.text2}>Book Name Goes Here</h4>
            <p className={"text" + " " + s.text1}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
              doloremque commodi nostrum! Tempora, illo. Deleniti vero delectus
              facilis, assumenda optio earum facere voluptatibus sint minus
              debitis veritatis ipsum soluta deserunt perferendis voluptas
              inventore tempora suscipit eos laudantium esse ratione, fuga aut
              animi eligendi. Quaerat, ipsum. Quidem odit exercitationemi
              dolorum quas soluta quod, eveniet tempore odio nihil quos?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialBook;
