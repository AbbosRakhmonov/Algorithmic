import React from "react";
import cardImage from "../../icons/news-1.webp";
import { Link } from "react-router-dom";
import { IoArrowForward } from "react-icons/io5";
import "./for_card.scss";

function Card({ dataAosDelay }) {
  return (
    <li
      className={"list-group-item card-container"}
      data-aos="fade-up"
      data-aos-delay={dataAosDelay || 0}
    >
      <div className="card news-card">
        <div className="row g-0">
          <div className="col-md-6">
            <div className="card-image-container">
              <img src={cardImage} className="img-fluid" alt="image" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="news-card-body">
              <div className="card-title-container">
                <h5 className="card-title text-truncate">
                  Algorithmic.uz saytimiz ishga tushdi
                </h5>
              </div>
              <div className="card-text-container">
                <p className="card-text">
                  Algorithmic – bu O’zbekistonda CP - Competitive Programming
                  (Sport Dasturlash) ni rivojlanishiga o’z hissasini qo’shishni
                  maqasad qilib qo’ygan "Dasturchilar Klubi" tomonidan ishlab
                  chiqilgan platforma bo’lib, bunda siz doimiy tarzda qo’shib
                  boriladigan yangiliklar, bir - biridan qiziq aqliy salohiyatni
                  oshiradigan masalalar orqali o’z bilimingizni orttirishingiz
                  mumkin bo’ladi.
                </p>
              </div>
              <div className={"full-content"}>
                <Link to={"news/1"}>
                  <span className={"text-capitalize"}>Read More</span>
                  <IoArrowForward className={"arrow-icon"} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Card;
