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
import "./for_login.scss";
import { motion } from "framer-motion";
import { getToken } from "./loginSlice";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, isLoggedIn, loading } = useSelector((state) => state.login);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [focusEmail, setFocusEmail] = useState(false);
  const [focusPassword, setFocusPassword] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleEmail = (e) => {
    let str = e.target.value;
    setEmail(str);
    const regexForEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regexForUsername = /^(?=.{2})[a-z][a-z\d]*_?[a-z\d]+$/i;
    if (!regexForEmail.test(str) && !regexForUsername.test(str)) {
      setEmailDirty(true);
    } else {
      setEmailDirty(false);
    }
  };
  const handlePassword = (e) => {
    let str = e.target.value;
    setPassword(str);
    if (/^(?=.*\s)/.test(str) || str.length < 6) {
      setPasswordDirty(true);
    } else {
      setPasswordDirty(false);
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
    if (!password && !email && !emailDirty && !passwordDirty) {
      setPasswordDirty(true);
      setEmailDirty(true);
    } else if (!email || emailDirty) {
      setEmailDirty(true);
    } else if (!password || passwordDirty) {
      setPasswordDirty(true);
    } else {
      const user = {
        user: email,
        password: password,
      };
      dispatch(getToken(user));
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard");
    }
  }, [isLoggedIn, dispatch]);
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
                    <div className="validate-text">
                      {emailDirty && (
                        <ul className={"list-group ps-2 py-2"}>
                          <li>{"* this field must not be empty"}</li>
                          <li>
                            {"* must be between 6 and 25 characters long."}
                          </li>
                        </ul>
                      )}
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
                    <div className="validate-text">
                      {passwordDirty && (
                        <ul className={"list-group ps-2 py-2"}>
                          <li>{"* this field must not be empty"}</li>
                          <li>{"* must be 6 characters"}</li>
                        </ul>
                      )}
                    </div>
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
                    className={`button btn signIn-btn ${
                      loading ? "disabled" : ""
                    }`}
                    disabled={loading}
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
