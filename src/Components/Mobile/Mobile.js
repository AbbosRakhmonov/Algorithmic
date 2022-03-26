import React from "react";
import "./for_mobile.scss";
import Logo from "../../icons/logo-v-1.png";

function Mobile(props) {
  return (
    <section
      className={
        "mobile-v d-flex align-items-center justify-content-center px-5"
      }
    >
      <div className={"mobile-container"}>
        <div className={"mobile-content"}>
          <div className={"mobile-content-header"}>
            <img
              src={Logo}
              alt="algorithmic logo"
              className={"w-100 d-block"}
            />
          </div>
          <div className={"mobile-content-body"}>
            <h1 className={"text-center mt-5"}>
              Mobile version production process...
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mobile;
