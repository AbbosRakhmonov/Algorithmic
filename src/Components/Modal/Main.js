import React, { useState } from "react";
import { Modal, ModalHeader } from "reactstrap";
import { useNavigate, Route, Routes, Navigate } from "react-router-dom";
import All from "./ModalMenus/All";
import Edit from "./ModalMenus/EditProfile/edit";
import { IoClose } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import Networks from "./ModalMenus/Networks/networks";
import "./style.scss";
import Secondary from "./Secondary";
import { countries } from "./MComponents/Inputs/Countries";
import * as Yup from "yup";

function Main() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [regions, setRegions] = useState([]);
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const borderedHeader = !!pathname.split("/")[5];
  const mainPath = pathname.split("/").slice(0, 4).join("/");
  const chooseCountry = (e) => {
    setCountry(e.target.value);
    setRegion("");
    const regions = countries.filter(
      (c) => c.countryShortCode === e.target.value
    );
    setRegions(regions[0].regions);
  };
  const chooseRegion = (e) => {
    setRegion(e.target.value);
  };
  const closeModal = () => {
    navigate(mainPath);
  };
  const toggle = () => {
    navigate(-1);
  };
  const onPasswordSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      console.log(values);
      setSubmitting(false);
    }, 400);
  };
  const passwordSchema = Yup.object().shape({
    currentPassword: Yup.string().required("Current password is required"),
    newPassword: Yup.string()
      .matches(
        /(?=.*[a-z]).{6,}$/,
        "Password must contain at least one lowercase letter and be at least 6 characters long"
      )
      .required("New password is required"),
    confirmPassword: Yup.string()
      .required("Confirm password is required")
      .oneOf(
        [Yup.ref("newPassword")],
        "Confirm password must match new password"
      ),
  });
  const onLocationSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      console.log(values);
      setSubmitting(false);
    }, 400);
  };
  const locationSchema = Yup.object().shape({
    region: Yup.string().required("Region is required"),
    address: Yup.string().required("Address is required"),
    country: Yup.string().required("Country is required"),
  });

  const routes = [
    {
      path: "/security",
      title: "Edit your password",
      initialValues: {
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      },
      onSubmit: onPasswordSubmit,
      validate: passwordSchema,
      form: [
        {
          type: "text",
          name: "currentPassword",
          label: "Current Password",
          placeholder: "Enter your current password",
        },
        {
          type: "text",
          name: "newPassword",
          label: "New Password",
          placeholder: "Enter your new password",
        },
        {
          type: "text",
          name: "confirmPassword",
          label: "Confirm Password",
          placeholder: "Confirm your new password",
        },
      ],
    },
    {
      path: "/location",
      title: "Edit your location",
      initialValues: {
        country: country,
        region: region,
        address: "",
      },
      onSubmit: onLocationSubmit,
      validate: locationSchema,
      form: [
        {
          type: "select",
          name: "country",
          label: "Country",
          options: countries,
          defaultValue: "Select your country",
          onChange: chooseCountry,
          fields: ["countryName", "countryShortCode"],
        },
        {
          type: "select",
          name: "region",
          label: "Region",
          options: regions,
          defaultValue: "Select your region",
          onChange: chooseRegion,
          fields: ["name", "shortCode"],
        },
        {
          type: "text",
          name: "address",
          label: "Address",
          placeholder: "Enter your address",
        },
      ],
    },
  ];
  return (
    <>
      <Modal
        isOpen={true}
        toggle={closeModal}
        className={"s-modal overflow-hidden"}
      >
        <ModalHeader
          className={`s-modal-header ${
            borderedHeader && "s-modal-header-bordered"
          }`}
          close={
            <button className="close-btn btn" onClick={closeModal}>
              <IoClose />
            </button>
          }
        >
          {borderedHeader && (
            <button className={"btn back-btn"} onClick={toggle}>
              <IoArrowBack />
            </button>
          )}
          <span>Settings</span>
        </ModalHeader>
        <Routes>
          <Route exact path={"/"} element={<All />} />
          <Route exact path={"/profile/*"} element={<Edit />} />
          <Route exact path={"/networks/*"} element={<Networks />} />
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact
              element={
                <Secondary
                  title={route.title}
                  form={route.form}
                  initialValues={route.initialValues}
                  onSubmit={route.onSubmit}
                  validate={route.validate}
                />
              }
            />
          ))}
          <Route path={"*"} element={<Navigate to={"/404"} />} />
        </Routes>
      </Modal>
    </>
  );
}

export default Main;
