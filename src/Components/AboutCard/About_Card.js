import React from "react";
import "./for_about_card.scss";
import SocialNetworks from "../SocialNetworks/socialNetworks";

function AboutCard({ img, name, job, networks }) {
  return (
    <div className="col-12 col-md-6 col-lg-4" data-aos={"zoom-in"}>
      <div className={"team-card"}>
        <div className="team-member-image">
          <img width={150} height={150} src={`${img}`} alt={name} />
        </div>
        <h3 className="team-member-name">{name}</h3>
        <p className="team-member-position">{job}</p>
        <SocialNetworks networks={networks} />
      </div>
    </div>
  );
}

export default AboutCard;
