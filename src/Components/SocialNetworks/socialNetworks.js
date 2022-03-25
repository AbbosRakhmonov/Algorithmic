import React from "react";
import "./for_social_networks.scss";

function SocialNetworks({ networks }) {
  return (
    <ul className="social-networks">
      {networks.map((net, index) => (
        <li key={index} className={"social-item"}>
          <a
            href={net.link}
            target="_blank"
            rel="noopener noreferrer"
            title={net.title}
            className={"social-link btn"}
          >
            {net.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialNetworks;
