import React from "react";
import { ModalBody } from "reactstrap";
import { Route, Routes } from "react-router-dom";
import List from "../../MComponents/list/list";
import {
  IoPersonOutline,
  IoAtOutline,
  IoCallOutline,
  IoMailOutline,
} from "react-icons/io5";
import { motion } from "framer-motion";
import Secondary from "../../Secondary";
import * as Yup from "yup";

function Edit() {
  const onFullnameSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      console.log(values);
      setSubmitting(false);
    }, 400);
  };
  const fullNameSchema = Yup.object().shape({
    fullName: Yup.string()
      .matches(/^[a-zA-Z\s]*$/, "Fullname must be letters only")
      .matches(
        /^[a-zA-Z]([-']?[a-zA-Z]+)*( [a-zA-Z]([-']?[a-zA-Z]+)*)+$/,
        "Fullname must be one space between words"
      )
      .required("Fullname is required"),
  });
  const onUsernameSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      console.log(values);
      setSubmitting(false);
    }, 400);
  };
  const userNameSchema = Yup.object().shape({
    userName: Yup.string()
      .matches(
        /^(?=.{4,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9_]+(?<![_.])$/,
        "Username must be 4-20 characters long and can only contain letters, numbers, and underscores"
      )
      .required("Username is required"),
  });
  const onPhoneSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      console.log(values);
      setSubmitting(false);
    }, 400);
  };
  const phoneSchema = Yup.object().shape({
    phone: Yup.string().matches(
      /^\+(?:[0-9] ?){6,14}[0-9]$/,
      "Phone number is invalid"
    ),
  });
  const onEmailSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      console.log(values);
      setSubmitting(false);
    }, 400);
  };
  const emailSchema = Yup.object().shape({
    email: Yup.string().matches(
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
      "Email is invalid"
    ),
  });
  const routes = [
    {
      path: "fullname",
      title: "Edit your full name",
      initialValues: { fullName: "Abbos Raxmonov" },
      onSubmit: onFullnameSubmit,
      validate: fullNameSchema,
      form: [
        {
          type: "text",
          name: "fullName",
          label: "Full name",
          placeholder: "Full name",
        },
      ],
    },
    {
      path: "username",
      title: "Edit your username",
      initialValues: { userName: "roy_hall" },
      onSubmit: onUsernameSubmit,
      validate: userNameSchema,
      form: [
        {
          type: "text",
          name: "userName",
          label: "Username",
          placeholder: "Username",
        },
      ],
    },
    {
      path: "phone",
      title: "Edit your phone number",
      initialValues: { phone: "+998997536454" },
      onSubmit: onPhoneSubmit,
      validate: phoneSchema,
      form: [
        {
          type: "tel",
          name: "phone",
          label: "Phone number",
          placeholder: "Phone",
        },
      ],
    },
    {
      path: "email",
      title: "Edit your email",
      initialValues: { email: "royHall@gmail.com" },
      onSubmit: onEmailSubmit,
      validate: emailSchema,
      form: [
        {
          type: "email",
          name: "email",
          label: "Email",
          placeholder: "Enter your email",
        },
      ],
    },
  ];
  const menus = {
    sub: true,
    lists: [
      {
        title: "Roy Hall",
        placeholder: "Full name",
        icon: <IoPersonOutline />,
        link: "fullname",
      },
      {
        title: "roy_hall",
        placeholder: "Username",
        icon: <IoAtOutline />,
        link: "username",
      },
      {
        title: "+998997536454",
        placeholder: "Phone",
        icon: <IoCallOutline />,
        link: "phone",
      },
      {
        title: "royhall@gmail.com",
        placeholder: "Email",
        icon: <IoMailOutline />,
        link: "email",
      },
    ],
  };
  const pageTransition = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };
  return (
    <motion.section
      initial={"initial"}
      animate={"in"}
      exit={"out"}
      transition={{ duration: 0.4, type: "spring", ease: "backIn" }}
      variants={pageTransition}
      className={"modal-content-container"}
    >
      <ModalBody className={"s-modal-body overflow-hidden"}>
        <List menus={menus} />
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
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
        </Routes>
      </ModalBody>
    </motion.section>
  );
}

export default Edit;
