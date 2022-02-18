import React from "react";
import "./for_about_card.scss";

function AboutCard({ img, name, job, networks }) {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className={"team-card"}>
        <div className="team-member-image">
          <img width={150} height={150} src={`${img}`} alt={name} />
        </div>
        <h3 className="team-member-name">{name}</h3>
        <p className="team-member-position">{job}</p>
        <ul className="social-networks">
          {networks.map((net, index) => (
            <li key={index} className={"social-item"}>
              <a
                href={net.link}
                target="_blank"
                rel="noopener noreferrer"
                title={net.title}
                className={"social-link"}
              >
                {net.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AboutCard;
