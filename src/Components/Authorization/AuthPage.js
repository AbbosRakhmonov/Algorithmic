import React from "react";
import leftLogo from "../../icons/loginImage.svg";

export default function AuthPage() {
  return (
    <div className="col-lg-7 leftAuth">
      <img src={leftLogo} alt="icon" />
      <h5 className="left-title">Welcome aboard my friend</h5>
      <p className="left-text">just a couple of clicks and we start</p>
    </div>
  );
}
