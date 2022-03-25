import React, { useState } from "react";
import "./for_private_profile.scss";
import { IoAnalytics, IoLocationOutline, IoPeople } from "react-icons/io5";
import SocialNetworks from "../SocialNetworks/socialNetworks";
function PrivateProfile({ id }) {
  const [imageSrc, setImageSrc] = useState("");
  const [user, setUser] = useState([]);
  // const mengakerak = [
  //   {
  //     id: 1,
  //     problem: "Mengakerak",
  //     status: "accepted",
  //     runtime: "1 MS",
  //     memory: "1 MB",
  //     language: ["C++", "Java", "Python"],
  //     date: "2020-05-05",
  //   },
  // ];
  // const mengakerak = [
  //   {
  //     id: 1,
  //     problem: "Mengakerak",
  //     status: "accepted",
  //     runtime: "1 MS",
  //     memory: "1 MB",
  //     language: "Java",
  //     date: "2020-05-05",
  //   },
  // ];
  // const mengakerak = {
  //   id: "1",
  //   fullName: "Mengakerak",
  //   userName: "mengakerak",
  //   location: "Uzbekistan, Samarkand",
  //   socialNet: [
  //     {
  //       name: "Facebook",
  //       link: "https://www.facebook.com/mengakerak",
  //     },
  //     {
  //       name: "Instagram",
  //       link: "https://www.instagram.com/mengakerak",
  //     },
  //     {
  //       name: "Telegram",
  //       link: "https://www.twitter.com/mengakerak",
  //     },
  //     {
  //       name: "Github",
  //       link: "https://www.linkedin.com/in/mengakerak",
  //     },
  //   ],
  //   place: "7777",
  //   rating: "7777",
  //   statistics: {
  //     total: {
  //       all: "7777",
  //       solved: "7777",
  //       percent: 25,
  //     },
  //     easy: {
  //       all: "7777",
  //       solved: "7777",
  //       percent: 25,
  //     },
  //     medium: {
  //       all: "7777",
  //       solved: "7777",
  //       percent: 25,
  //     },
  //     hard: {
  //       all: "7777",
  //       solved: "7777",
  //       percent: 25,
  //     },
  //   },
  //   problems: {
  //     solved: [123, 456, 789],
  //     unsolved: [123, 456, 789],
  //   },
  //   activeSeans: [
  //     { date: "2022/01/11", count: 10 },
  //     { date: "2022/01/12", count: 2 },
  //   ],
  // };
  return (
    <div className={"private-profile-container"}>
      {/*<div className="user-image">*/}
      {/*  {img ? (*/}
      {/*    <img src={img} alt={`${given_name}`} />*/}
      {/*  ) : (*/}
      {/*    <div className="spinner-border text-default" role="status">*/}
      {/*      <span className="visually-hidden">Loading...</span>*/}
      {/*    </div>*/}
      {/*  )}*/}
      {/*</div>*/}
      {/*<h2 className={"user-fullName"}>{given_name}</h2>*/}
      {/*<p className={"user-username"}>{unique_name}</p>*/}
      {/*/!*<SocialNetworks networks={networks} />*!/*/}
      {/*<div className="location d-flex align-items-center justify-content-center">*/}
      {/*  <span className="location-icon d-flex align-items-center justify-content-center">*/}
      {/*    <IoLocationOutline />*/}
      {/*  </span>*/}
      {/*  <span className="location-text">Uzbekistan, Samarkand</span>*/}
      {/*</div>*/}
      {/*<div className={"rating-container"}>*/}
      {/*  <div className="row">*/}
      {/*    <div className="col-md-12">*/}
      {/*      <div className="d-flex align-items-center justify-content-between">*/}
      {/*        <div className="d-flex flex-row align-items-center me-2">*/}
      {/*          <span className="rate-icon">*/}
      {/*            <IoPeople />*/}
      {/*          </span>*/}
      {/*          <p className={"rating"}>*/}
      {/*            Place : <span className={"rating-number"}>7777</span>*/}
      {/*          </p>*/}
      {/*        </div>*/}

      {/*        <div className="d-flex flex-row align-items-center">*/}
      {/*          <span className="rate-icon">*/}
      {/*            <IoAnalytics />*/}
      {/*          </span>*/}
      {/*          <p className={"rating"}>*/}
      {/*            Rating : <span className={"rating-number"}>7777</span>*/}
      {/*          </p>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
}

export default PrivateProfile;
