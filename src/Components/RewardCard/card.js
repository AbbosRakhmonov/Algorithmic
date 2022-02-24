import React, { useEffect, useState } from "react";
import Axios from "axios";
import Rate from "rc-rate";
import { IoStar } from "react-icons/io5";
import "rc-rate/assets/index.css";
import "./for_card.scss";
import { Link } from "react-router-dom";
import GoldMedal from "../../icons/goldMedal.svg";
import SilverMedal from "../../icons/silverMedal.svg";
import BronzeMedal from "../../icons/bronzeMedal.svg";

function Card({ user, dataAosDelay, index }) {
  const { id, fullName, userName, rank } = user;
  const [imageSrc, setImageSrc] = useState("");
  const getImage = async () => {
    return await Axios.get(`http://algorithmic.uz/api/files/avatar/${id}`, {
      responseType: "arraybuffer",
    }).then((response) => {
      let blob = new Blob([response.data], {
        type: response.headers["content-type"],
      });
      return URL.createObjectURL(blob);
    });
  };
  useEffect(() => {
    getImage().then((res) => setImageSrc(res));
  }, []);
  return (
    <Link to={`/dashboard/leaderboard/user${id}`}>
      <div
        className={"reward-card"}
        data-aos="fade-left"
        data-aos-delay={dataAosDelay || 0}
      >
        <div className="user-image">
          {imageSrc ? (
            <img
              src={`http://algorithmic.uz/api/Files/avatar/${id}`}
              alt={fullName}
            />
          ) : (
            <div className="spinner-border text-default" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
        </div>
        <div className="user-info">
          <h5 className={"user-name"}>{fullName}</h5>
          <p className={"user-status"}>{userName}</p>
          <Rate
            className={"rate-stars"}
            defaultValue={index === 1 ? 5 : index === 2 ? 3 : 2}
            disabled={true}
            character={[<IoStar key={id} className={"star-icon"} />]}
          />
        </div>
        <span className={"medal"}>
          {index === 1 ? (
            <img src={GoldMedal} width={36} height={36} alt="Gold" />
          ) : index === 2 ? (
            <img src={SilverMedal} width={36} height={36} alt="Silver" />
          ) : (
            <img src={BronzeMedal} width={36} height={36} alt="Bronze" />
          )}
        </span>
        <span className="user-rate">{rank}</span>
      </div>
    </Link>
  );
}

export default Card;
