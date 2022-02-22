import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthPage from "../../Components/Authorization/AuthPage";
import {
  IoMailOutline,
  IoLockClosedOutline,
  IoLogoGithub,
  IoEyeOutline,
  IoEyeOffOutline,
} from "react-icons/io5";
import GoogleIcon from "../../icons/Google.svg";
import leftCircle from "../../icons/leftLoginCircle.svg";
import rightCircle from "../../icons/rightLoginCircle.svg";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "./loginSlice";
import "./for_login.scss";
import { motion } from "framer-motion";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, isLoggedIn } = useSelector((state) => state.login);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [focusEmail, setFocusEmail] = useState(false);
  const [focusPassword, setFocusPassword] = useState(false);
  const [emailValidateText, setEmailValidateText] = useState("");
  const [passwordValidateText, setPasswordValidateText] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleEmail = (e) => {
    let str = e.target.value;
    setEmail(str);
    const regEmpty = /^\s*$/;
    if (regEmpty.test(str)) {
      setEmailDirty(true);
      setEmailValidateText("* Please fill this field");
    } else {
      setEmailDirty(false);
      setEmailValidateText("");
    }
  };
  const handlePassword = (e) => {
    let str = e.target.value;
    setPassword(str);
    const regEmpty = /^\s*$/;
    if (regEmpty.test(str)) {
      setPasswordDirty(true);
      setPasswordValidateText("* Please fill this field");
    } else if (str.length < 6) {
      setPasswordDirty(true);
      setPasswordValidateText("Password must be at least 6 characters");
    } else {
      setPasswordDirty(false);
      setPasswordValidateText("");
    }
  };
  const handleFocusEmail = () => {
    setFocusEmail(true);
  };
  const handleBlurEmail = () => {
    setFocusEmail(false);
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
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password, emailDirty, passwordDirty);
    if (!emailDirty && email && !passwordDirty && password) {
      const user = {
        user: email,
        password: password,
      };
      dispatch(getToken(user));
    } else {
      setEmailDirty(true);
      setPasswordDirty(true);
      setEmailValidateText("* Please fill this field");
      setPasswordValidateText("* Please fill this field");
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard");
    }
    if (error) {
      setEmailDirty(true);
      setPasswordDirty(true);
    }
  }, [isLoggedIn, error]);
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
      transition={{ duration: 0.5, type: "tween", ease: "anticipate" }}
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
                        focusEmail ? "active-input " : ""
                      }${emailDirty ? "emailDirty" : ""}`}
                    >
                      <span className="input-group-text border-0 bg-transparent">
                        <IoMailOutline />
                      </span>
                      <input
                        type="email"
                        className="form-control login-input email"
                        placeholder="Email or username"
                        onChange={handleEmail}
                        onFocus={handleFocusEmail}
                        onBlur={handleBlurEmail}
                        autoComplete={"email"}
                        value={email}
                        title="Email"
                        required
                      />
                    </div>
                    <div className="validate-text">{emailValidateText}</div>
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
                        autoComplete={"current-password"}
                        value={password}
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
                    <div className="validate-text">{passwordValidateText}</div>
                  </div>

                  <div className="d-flex justify-content-end">
                    <Link
                      className="forgotLink btn disabled"
                      to="/"
                      disabled
                      onClick={(e) => e.preventDefault()}
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <button
                    form="login-form"
                    type="submit"
                    className="button signIn-btn"
                    onClick={handleSubmit}
                  >
                    Sign In
                  </button>
                </form>
                <div className="d-flex align-items-center justify-content-center">
                  <span className="line"></span>
                  <span className="simple-style">Or</span>
                  <span className="line"></span>
                </div>
                <div className="button-group d-flex align-items-center justify-content-between">
                  <button
                    className="button btn disabled additional-btn"
                    title="Sign in with google"
                    disabled
                  >
                    <img src={GoogleIcon} alt="google icon" />
                    <span className="btn-text">Google</span>
                  </button>
                  <button
                    className="button btn disabled additional-btn"
                    title="Sign in with github"
                    disabled
                  >
                    <span className="icon d-flex align-items-center justify-content-center">
                      <IoLogoGithub />
                    </span>
                    <span className="btn-text">Github</span>
                  </button>
                </div>
                <span className="simple-style d-block text-center m-0">
                  Have no account yet?
                </span>
                <div className="d-flex justify-content-center mt-3">
                  <Link className="forgotLink" to="/signup">
                    Sign Up
                  </Link>
                </div>
                <div className="d-flex justify-content-center mt-2 mb-4">
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
