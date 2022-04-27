import React from "react";
import "./for_news.scss";
import news from "../../icons/logo-v-1.png";

function News() {
  return (
    <section className={"h-100 news-container"}>
      <div className={"news-content"}>
        <img src={news} alt="news-1" />
        <h1 className={"news-title"}>Algorithmic.uz saytimiz ishga tushdi</h1>
        <p className={"news-text"}>
          <b>Algorithmic</b> – bu O’zbekistonda CP - Competitive Programming
          (Sport Dasturlash) ni rivojlanishiga o’z hissasini qo’shishni maqasad
          qilib qo’ygan <b>"Dasturchilar Klubi"</b> tomonidan ishlab chiqilgan
          platforma bo’lib, bunda siz doimiy tarzda qo’shib boriladigan
          yangiliklar, bir - biridan qiziq aqliy salohiyatni oshiradigan
          masalalar orqali o’z bilimingizni orttirishingiz mumkin bo’ladi.
        </p>
        <hr />
        <b className={"news-text"}>Algorithmicda</b>
        <ul className={"mt-3 ms-3"}>
          <li className={"news-text"}>
            Har kun qo’shib boriluvchi yangi masalalar
          </li>
          <li className={"news-text"}>
            Do`stona raqobat uchun contestlar (musobaqalar)
          </li>
          <li className={"news-text"}>
            Dasturlashga oid eng qiziqarli va kerakli yangiliklar
          </li>
        </ul>
      </div>
    </section>
  );
}

export default News;
