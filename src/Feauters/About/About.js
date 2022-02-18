import React, { lazy } from "react";
import "./for_about.scss";
import { FaInstagram, FaFacebook, FaGithub, FaTelegram } from "react-icons/fa";

import Abbos from "../../icons/Team/Abbos.png";
import Sardor from "../../icons/Team/Sardor.png";
import Abdulaziz from "../../icons/Team/Abdulaziz.png";
import Tolib from "../../icons/Team/Tolib.png";
import Ozodxon from "../../icons/Team/Ozodxon.png";
import Diyor from "../../icons/Team/Diyor.png";

const AboutCard = lazy(() => import("../../Components/AboutCard/About_Card"));

function About(props) {
  const Authors = [
    {
      id: 1,
      name: "Sardor Salimov",
      job: "Project Manager",
      img: Sardor,
      networks: [
        {
          id: 1,
          name: "Telegram",
          link: "https://t.me/abbos_rakhmonov",
          icon: <FaTelegram />,
        },
        {
          id: 2,
          name: "Facebook",
          link: "https://www.facebook.com/abbos.rakhmonov",
          icon: <FaFacebook />,
        },
        {
          id: 3,
          name: "Instagram",
          link: "https://www.instagram.com/abbos_rakhmonov/",
          icon: <FaInstagram />,
        },
        {
          id: 4,
          name: "Github",
          link: "github.com/abbos-rakhmonov",
          icon: <FaGithub />,
        },
      ],
    },
    {
      id: 2,
      name: "Abbos Rakhmonov",
      job: "Frontend Developer",
      img: Abbos,
      networks: [
        {
          id: 1,
          name: "Telegram",
          link: "https://t.me/abbos_rakhmonov",
          icon: <FaTelegram />,
        },
        {
          id: 2,
          name: "Facebook",
          link: "https://www.facebook.com/abbos.rakhmonov",
          icon: <FaFacebook />,
        },
        {
          id: 3,
          name: "Instagram",
          link: "https://www.instagram.com/abbos_rakhmonov/",
          icon: <FaInstagram />,
        },
        {
          id: 4,
          name: "Github",
          link: "github.com/abbos-rakhmonov",
          icon: <FaGithub />,
        },
      ],
    },
    {
      id: 3,
      name: "Abdulaziz Abdukhalilzoda",
      job: "Backend Developer",
      img: Abdulaziz,
      networks: [
        {
          id: 1,
          name: "Telegram",
          link: "https://t.me/abdulaziz_abdukhalilzoda",
          icon: <FaTelegram />,
        },
        {
          id: 2,
          name: "Facebook",
          link: "https://www.facebook.com/abdulaziz.abdukhalilzoda",
          icon: <FaFacebook />,
        },
        {
          id: 3,
          name: "Instagram",
          link: "https://www.instagram.com/abdulaziz_abdukhalilzoda/",
          icon: <FaInstagram />,
        },
        {
          id: 4,
          name: "Github",
          link: "https://www.instagram.com/abdulaziz_abdukhalilzoda/",
          icon: <FaGithub />,
        },
      ],
    },
  ];
  const Team = [
    {
      id: 1,
      name: "Tolibjon Nurullayevich",
      job: "Video Maker",
      img: Tolib,
      networks: [
        {
          id: 1,
          name: "Telegram",
          link: "https://t.me/abbos_rakhmonov",
          icon: <FaTelegram />,
        },
        {
          id: 2,
          name: "Facebook",
          link: "https://www.facebook.com/abbos.rakhmonov",
          icon: <FaFacebook />,
        },
        {
          id: 3,
          name: "Instagram",
          link: "https://www.instagram.com/abbos_rakhmonov/",
          icon: <FaInstagram />,
        },
        {
          id: 4,
          name: "Github",
          link: "github.com/abbos-rakhmonov",
          icon: <FaGithub />,
        },
      ],
    },
    {
      id: 2,
      name: "Ozodxon Rabbanaqulov",
      job: "Frontend Developer",
      img: Ozodxon,
      networks: [
        {
          id: 1,
          name: "Telegram",
          link: "https://t.me/abbos_rakhmonov",
          icon: <FaTelegram />,
        },
        {
          id: 2,
          name: "Facebook",
          link: "https://www.facebook.com/abbos.rakhmonov",
          icon: <FaFacebook />,
        },
        {
          id: 3,
          name: "Instagram",
          link: "https://www.instagram.com/abbos_rakhmonov/",
          icon: <FaInstagram />,
        },
        {
          id: 4,
          name: "Github",
          link: "github.com/abbos-rakhmonov",
          icon: <FaGithub />,
        },
      ],
    },
    {
      id: 3,
      name: "Diyor Nasriddinov",
      job: "Mobile Developer",
      img: Diyor,
      networks: [
        {
          id: 1,
          name: "Telegram",
          link: "https://t.me/abbos_rakhmonov",
          icon: <FaTelegram />,
        },
        {
          id: 2,
          name: "Facebook",
          link: "https://www.facebook.com/abbos.rakhmonov",
          icon: <FaFacebook />,
        },
        {
          id: 3,
          name: "Instagram",
          link: "https://www.instagram.com/abbos_rakhmonov/",
          icon: <FaInstagram />,
        },
        {
          id: 4,
          name: "Github",
          link: "github.com/abbos-rakhmonov",
          icon: <FaGithub />,
        },
      ],
    },
  ];
  return (
    <section id={"about"} className={"h-100"}>
      <h1 className={"about-title"}>Creators</h1>
      <div className="row flex-wrap card-container">
        {Authors.map((item) => (
          <AboutCard
            key={item.id}
            img={item.img}
            job={item.job}
            name={item.name}
            networks={item.networks}
          />
        ))}
      </div>
      <h1 className={"about-title"}>Especially Thanks</h1>
      <div className="row flex-wrap card-container">
        {Team.map((item) => (
          <AboutCard
            key={item.id}
            img={item.img}
            job={item.job}
            name={item.name}
            networks={item.networks}
          />
        ))}
      </div>
    </section>
  );
}

export default About;
