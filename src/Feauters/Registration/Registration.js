import React, { useEffect, useState } from "react";
import {
  IoMailOutline,
  IoPersonOutline,
  IoAt,
  IoLockClosedOutline,
  IoEyeOffOutline,
  IoEyeOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";
import AuthPage from "../../Components/Authorization/AuthPage";
import leftCircle from "../../icons/leftLoginCircle.svg";
import rightCircle from "../../icons/rightLoginCircle.svg";
import "./for_reg.scss";
import { useDispatch, useSelector } from "react-redux";
import { addNewUser } from "../Login/loginSlice";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Registration() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, isLoggedIn } = useSelector((state) => state.login);
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [focusFullName, setFocusFullName] = useState(false);
  const [focusUsername, setFocusUsername] = useState(false);
  const [focusEmail, setFocusEmail] = useState(false);
  const [focusPassword, setFocusPassword] = useState(false);
  const [focusPasswordAgain, setFocusPasswordAgain] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [fullNameDirty, setFullNameDirty] = useState(false);
  const [usernameDirty, setUsernameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [passwordAgainDirty, setPasswordAgainDirty] = useState(false);

  /* For Full Name */
  const handleFullName = (e) => {
    const regularExpressionForFullName1 = /^[a-zA-Z\s]*$/;
    const regularExpressionForFullName2 =
      /^[a-zA-Z]([-']?[a-zA-Z]+)*( [a-zA-Z]([-']?[a-zA-Z]+)*)+$/;
    let str = e.target.value;
    setFullName(str);
    if (
      !regularExpressionForFullName1.test(str) ||
      !regularExpressionForFullName2.test(str)
    ) {
      setFullNameDirty(true);
    } else {
      setFullNameDirty(false);
    }
  };
  const handleFocusFullName = () => {
    setFocusFullName(true);
  };
  const handleBlurFullName = () => {
    setFocusFullName(false);
  };

  /* For Username */
  const handleUsername = (e) => {
    const regularExpressionForLogin =
      /^(?=.{4,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9_]+(?<![_.])$/;
    let str = e.target.value;
    setUsername(str);
    if (!regularExpressionForLogin.test(str)) {
      setUsernameDirty(true);
    } else {
      setUsernameDirty(false);
    }
  };
  const handleFocusUsername = () => {
    setFocusUsername(true);
  };
  const handleBlurUsername = () => {
    setFocusUsername(false);
  };

  /* For Email */
  const handleEmail = (e) => {
    const regularExpressionForEmail =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    let str = e.target.value;
    setEmail(str);
    if (!regularExpressionForEmail.test(str)) {
      setEmailDirty(true);
    } else {
      setEmailDirty(false);
    }
  };
  const handleFocusEmail = () => {
    setFocusEmail(true);
  };
  const handleBlurEmail = () => {
    setFocusEmail(false);
  };

  /* For Password */
  const handlePassword = (e) => {
    const regularExpressionForPassword = /(?=.*[a-z]).{6,}$/;
    let str = e.target.value;
    setPassword(str);
    if (!regularExpressionForPassword.test(str)) {
      setPasswordDirty(true);
    } else {
      setPasswordDirty(false);
    }
  };
  const handleFocusPassword = () => {
    setFocusPassword(true);
  };
  const handleBlurPassword = () => {
    setFocusPassword(false);
  };
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  /* For Password Again */
  const handlePasswordAgain = (e) => {
    let str = e.target.value;
    setPasswordAgain(str);
    if (password !== str) {
      setPasswordAgainDirty(true);
    } else {
      setPasswordAgainDirty(false);
    }
  };
  const handleFocusPasswordAgain = () => {
    setFocusPasswordAgain(true);
  };
  const handleBlurPasswordAgain = () => {
    setFocusPasswordAgain(false);
  };

  /* For Submit */
  const handleSubmit = (e) => {
    e.preventDefault();
    const regEmpty = /^\s*$/;
    if (regEmpty.test(fullName)) {
      setFullNameDirty(true);
    }
    if (regEmpty.test(username)) {
      setUsernameDirty(true);
    }
    if (regEmpty.test(email)) {
      setEmailDirty(true);
    }
    if (regEmpty.test(password)) {
      setPasswordDirty(true);
    }
    if (regEmpty.test(passwordAgain) || password !== passwordAgain) {
      setPasswordAgainDirty(true);
    }
    if (
      !fullNameDirty &&
      !usernameDirty &&
      !emailDirty &&
      !passwordDirty &&
      !passwordAgainDirty &&
      fullName &&
      username &&
      email &&
      password &&
      passwordAgain
    ) {
      const newUser = {
        fullName: fullName
          .split(" ")
          .map((word) => word[0].toUpperCase() + word.substring(1))
          .join(" "),
        userName: username,
        email: email,
        passwordHash: password,
      };
      dispatch(addNewUser(newUser));
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard");
    }
  }, [isLoggedIn]);
  const pageTransition = {
    inital: {
      opacity: 0,
      x: -100,
    },
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: 100,
    },
  };
  return (
    <motion.div
      initial={"inital"}
      animate={"in"}
      exit={"out"}
      transition={{ duration: 0.5, ease: "anticipate", type: "tween" }}
      variants={pageTransition}
      className="container"
    >
      <div className="row h-100 align-items-center justify-content-center">
        <div className="col-12 authPage">
          <img src={leftCircle} alt="leftCircle" className="leftCircle" />
          <img src={rightCircle} alt="rightCircle" className="rightCircle" />
          <div className="row m-0 auth-box">
            <AuthPage />
            <div className="col-lg-5 rightAuth">
              <h5 className="auth-title">Algorithmic.uz</h5>
              <div className="reg-box">
                <form id="login-form" className="form">
                  {error && <div className={`alert alert-danger`}>{error}</div>}
                  <div className="position-relative">
                    <div
                      className={`input-group ${
                        focusFullName ? "active-input " : ""
                      }${fullNameDirty ? "fullNameDirty" : ""}`}
                    >
                      <span className="input-group-text border-0 bg-transparent">
                        <IoPersonOutline />
                      </span>
                      <input
                        type="text"
                        className="form-control login-input"
                        placeholder="Full name"
                        onChange={handleFullName}
                        onFocus={handleFocusFullName}
                        onBlur={handleBlurFullName}
                        value={fullName}
                        title="Your full name"
                        required
                      />
                    </div>
                    <div className="validate-text">
                      {fullNameDirty ? "Full name is invalid" : ""}
                    </div>
                  </div>
                  <div className="position-relative">
                    <div
                      className={`input-group ${
                        focusUsername ? "active-input " : ""
                      }${usernameDirty ? "usernameDirty" : ""}`}
                    >
                      <span className="input-group-text border-0 bg-transparent">
                        <IoAt />
                      </span>
                      <input
                        type="text"
                        className="form-control login-input"
                        placeholder="Username"
                        onChange={handleUsername}
                        onFocus={handleFocusUsername}
                        onBlur={handleBlurUsername}
                        value={username}
                        title="Your username"
                        required
                      />
                    </div>

                    <div className="validate-text">
                      {usernameDirty
                        ? "Username must be at least 4 characters"
                        : ""}
                    </div>
                  </div>
                  <div className="position-relative">
                    <div
                      className={`input-group ${
                        focusEmail ? "active-input " : ""
                      }${emailDirty ? "emailDirty" : ""}`}
                    >
                      <span className="input-group-text border-0 bg-transparent">
                        <IoMailOutline />
                      </span>
                      <input
                        type="email"
                        className="form-control login-input email"
                        placeholder="Email"
                        onChange={handleEmail}
                        onFocus={handleFocusEmail}
                        onBlur={handleBlurEmail}
                        value={email}
                        title="Email"
                        required
                      />
                    </div>
                    <div className="validate-text">
                      {emailDirty ? "Email is invalid" : ""}
                    </div>
                  </div>
                  <div className="position-relative">
                    <div
                      className={`input-group ${
                        focusPassword ? "active-input " : ""
                      }${passwordDirty ? "passwordDirty" : ""}`}
                    >
                      <span className="input-group-text border-0 bg-transparent">
                        <IoLockClosedOutline />
                      </span>
                      <input
                        type={`${showPassword ? "text" : "password"}`}
                        className="form-control login-input password"
                        placeholder="Password"
                        onChange={handlePassword}
                        onFocus={handleFocusPassword}
                        onBlur={handleBlurPassword}
                        value={password}
                        autoComplete={"password"}
                        title="Password"
                        required
                      />
                      <button
                        type="button"
                        className="show-hide-btn"
                        title={`${showPassword ? "Hide" : "Show"} Password`}
                        onClick={handleShowPassword}
                      >
                        {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
                      </button>
                    </div>
                    <div className="validate-text">
                      {passwordDirty
                        ? "Password must be at least 6 characters"
                        : ""}
                    </div>
                  </div>
                  <div className="position-relative">
                    <div
                      className={`input-group ${
                        focusPasswordAgain ? "active-input " : ""
                      }${passwordAgainDirty ? "passwordAgainDirty" : ""}`}
                    >
                      <span className="input-group-text border-0 bg-transparent">
                        <IoLockClosedOutline />
                      </span>
                      <input
                        type={`${showPassword ? "text" : "password"}`}
                        className="form-control login-input password"
                        placeholder="Password again"
                        onChange={handlePasswordAgain}
                        onFocus={handleFocusPasswordAgain}
                        onBlur={handleBlurPasswordAgain}
                        value={passwordAgain}
                        autoComplete={"password"}
                        title="Password again"
                        required
                      />
                    </div>
                    <div className="validate-text">
                      {passwordAgainDirty ? "Password again is invalid" : ""}
                    </div>
                  </div>
                  <button
                    form="login-form"
                    type="submit"
                    className="button signIn-btn"
                    onClick={handleSubmit}
                  >
                    Sign Up
                  </button>
                </form>
                <div className="d-flex align-items-center justify-content-center">
                  <span className="simple-style">Have already account?</span>
                </div>
                <div className="d-flex justify-content-center mt-3 mb-2">
                  <Link className="forgotLink" to="/signin">
                    Sign In
                  </Link>
                </div>
                <div className="d-flex justify-content-center mb-4">
                  <Link className="forgotLink" to="/">
                    Go back to home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
