import React, { useEffect, useState } from "react";
import "./for_private_profile.scss";
import { IoAnalytics, IoLocationOutline, IoPeople } from "react-icons/io5";
import SocialNetworks from "../SocialNetworks/socialNetworks";
import Skeleton from "react-loading-skeleton";
import Api from "../../Feauters/api";

function PrivateProfile({ user }) {
  const [imageSrc, setImageSrc] = useState("");
  const checkObjectKeys = (obj) => {
    return Object.keys(obj).length > 0;
  };
  const getImage = async (id) => {
    return await Api()
      .get("/files/avatar/" + id, {
        responseType: "arraybuffer",
      })
      .then((res) => {
        let blob = new Blob([res.data], {
          type: res.headers["content-type"],
        });
        return URL.createObjectURL(blob);
      });
  };
  useEffect(() => {
    if (Object.keys(user).length !== 0) {
      getImage(user.id).then((res) => {
        setImageSrc(res);
      });
    }
  }, [user]);

  return (
    <div
      className={
        "private-profile-container d-flex flex-column justify-content-between w-100"
      }
    >
      <div className="user-image">
        {imageSrc ? (
          <img src={imageSrc} alt={`${user.fullName}`} />
        ) : (
          <div className="spinner-border text-default" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
      </div>
      {checkObjectKeys(user) ? (
        <>
          <h2 className={"user-fullName"}>{user.fullName}</h2>
          <p className={"user-username"}>{user.fullName}</p>
        </>
      ) : (
        <>
          <Skeleton width={"80%"} />
          <Skeleton width={"60%"} />
        </>
      )}

      {/*<SocialNetworks networks={networks} />*/}
      <div className="location d-flex align-items-center justify-content-center">
        <span className="location-icon d-flex align-items-center justify-content-center">
          <IoLocationOutline />
        </span>
        <span className="location-text">Uzbekistan, Samarkand</span>
      </div>
      <div className={"rating-container"}>
        <div className="row">
          <div className="col-md-12">
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex flex-row align-items-center me-2">
                <span className="rate-icon">
                  <IoPeople />
                </span>
                <p className={"rating"}>
                  Place :{" "}
                  <span className={"rating-number"}>
                    {checkObjectKeys(user) ? user.rank.place : "..."}
                  </span>
                </p>
              </div>

              <div className="d-flex flex-row align-items-center">
                <span className="rate-icon">
                  <IoAnalytics />
                </span>
                <p className={"rating"}>
                  Rating :{" "}
                  <span className={"rating-number"}>
                    {" "}
                    {checkObjectKeys(user) ? user.rank.rank : "..."}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivateProfile;
