import React from "react";
import s from "./president.module.css";
import image from "../../../Images/president/president.jpg";
import Title from "../../../components/Title/Title";

const President = () => {
  return (
    <div className="container">
      <div className={s.content}>
        <div className={s.image}>
          <img src={image} alt="Presdident rasmi" />
        </div>
        <div>
          <Title title={"O'zbekistonda dinga doir qonunlar"} />
          <p className="text">
            Mazkur Nizom O‘zbekiston Respublikasi Vazirlar Mahkamasining
            2018-yil 31-maydagi 409-son “O‘zbekiston Respublikasida diniy
            tashkilotlarni davlat ro‘yxatidan o‘tkazish, qayta ro‘yxatdan
            o‘tkazish va tugatish tartibi to‘g‘risidagi nizomni tasdiqlash
            haqida”gi qaroriga muvofiq O‘zbekiston Respublikasida diniy
            tashkilotlarni davlat ro‘yxatidan o‘tkazish uchun rozilik berish
            tartibini belgilaydi .qayta ro‘yxatdan o‘tkazish va tugatish tartibi
            to‘g‘risidagi nizomni tasdiqlash haqida”gi qaroriga muvofiq
            O‘zbekiston Respublikasida diniy tashkilotlarni davlat ro‘yxatidan
            o‘tkazish uchun rozilik berish tartibini belgilaydi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default President;
