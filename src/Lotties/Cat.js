import React from "react";
import Lottie from "react-lottie";
import CatLottie from "./connection.json";
function Cat(props) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: CatLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div
      className="d-flex align-items-center flex-column"
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <Lottie
        options={defaultOptions}
        isClickToPauseDisabled={true}
        width={"35%"}
        height={"auto"}
      />
      <h3
        style={{
          fontFamily: "Open-Sans,sans-serif",
          fontSize: "1.5rem",
          color: "#67748E",
          textAlign: "center",
        }}
      >{`Please check your internet connection`}</h3>
    </div>
  );
}

export default Cat;
