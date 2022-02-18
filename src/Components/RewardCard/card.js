import React from "react";
import Rate from "rc-rate";
import { IoStar } from "react-icons/io5";
import "rc-rate/assets/index.css";
import "./for_card.scss";
import { Link } from "react-router-dom";
import GoldMedal from "../../icons/goldMedal.svg";
import SilverMedal from "../../icons/silverMedal.svg";
import BronzeMedal from "../../icons/bronzeMedal.svg";

function Card({ user, dataAosDelay }) {
  const { id, name, image, status, rate, stars } = user;
  return (
    <Link to={`/dashboard/leaderboard/user${id}`}>
      <div
        className={"reward-card"}
        data-aos="fade-left"
        data-aos-delay={dataAosDelay || 0}
      >
        <div className="user-image">
          <img src={image} alt={name} />
        </div>
        <div className="user-info">
          <h5 className={"user-name"}>{name}</h5>
          <p className={"user-status"}>{status}</p>
          <Rate
            className={"rate-stars"}
            defaultValue={stars}
            disabled={true}
            character={[<IoStar key={id} className={"star-icon"} />]}
          />
        </div>
        <span className={"medal"}>
          {stars > 4 ? (
            <img src={GoldMedal} width={36} height={36} alt="Gold" />
          ) : stars > 2 ? (
            <img src={SilverMedal} width={36} height={36} alt="Silver" />
          ) : (
            <img src={BronzeMedal} width={36} height={36} alt="Bronze" />
          )}
        </span>
        <span className="user-rate">{rate}</span>
      </div>
    </Link>
  );
}

export default Card;
