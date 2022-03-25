import React from "react";
import { motion } from "framer-motion";
import {
  FaTelegramPlane,
  FaInstagram,
  FaGithub,
  FaFacebook,
} from "react-icons/fa";
import List from "../../MComponents/list/list";
import { Navigate, Route, Routes } from "react-router-dom";
import Secondary from "../../Secondary";
import { ModalBody } from "reactstrap";
import * as Yup from "yup";

function Networks(props) {
  const onTelegramSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      console.log(values);
      setSubmitting(false);
    }, 400);
  };
  const telegramSchema = Yup.object().shape({
    telegram: Yup.string().matches(
      /(https?:\/\/)?(www[.])?(telegram|t)\.me\/([a-zA-Z0-9_-]*)\/?$/,
      "Invalid Telegram Link"
    ),
  });
  const onInstagramSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      console.log(values);
      setSubmitting(false);
    }, 400);
  };
  const instagramSchema = Yup.object().shape({
    instagram: Yup.string().matches(
      /(?:(?:http|https):\/\/)?(?:www.)?(?:instagram.com|instagr.am|instagr.com)\/(\w+)/gim,
      "Invalid Instagram Link"
    ),
  });
  const onGithubSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      console.log(values);
      setSubmitting(false);
    }, 400);
  };
  const githubSchema = Yup.object().shape({
    github: Yup.string().matches(
      /^(http(s?):\/\/)?(www\.)?github\.([a-z])+\/([A-Za-z0-9]{1,})+\/?$/i,
      "Invalid Github Link"
    ),
  });
  const onFacebookSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      console.log(values);
      setSubmitting(false);
    }, 400);
  };
  const facebookSchema = Yup.object().shape({
    facebook: Yup.string().matches(
      /^(http\:\/\/|https:\/\/)?(www.)?(facebook.com\/)((@)?[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF0-9A-Za-z. \-%]{1,}\/?)$/i,
      "Invalid Facebook Link"
    ),
  });

  const routes = [
    {
      path: "telegram",
      title: "Edit your telegram link",
      initialValues: {
        telegram: "",
      },
      onSubmit: onTelegramSubmit,
      validate: telegramSchema,
      form: [
        {
          name: "telegram",
          type: "text",
          placeholder: "Telegram profile link",
          label: "Example: https://telegram.me/username",
        },
      ],
    },
    {
      path: "instagram",
      title: "Edit your instagram link",
      initialValues: {
        instagram: "",
      },
      onSubmit: onInstagramSubmit,
      validate: instagramSchema,
      form: [
        {
          name: "instagram",
          type: "text",
          placeholder: "Instagram profile link",
          label: "Example: https://instagram.com/username",
        },
      ],
    },
    {
      path: "github",
      title: "Edit your github link",
      initialValues: {
        github: "",
      },
      onSubmit: onGithubSubmit,
      validate: githubSchema,
      form: [
        {
          name: "github",
          type: "text",
          placeholder: "Github profile link",
          label: "Example: https://github.com/username",
        },
      ],
    },
    {
      path: "facebook",
      title: "Edit your facebook link",
      initialValues: {
        facebook: "",
      },
      onSubmit: onFacebookSubmit,
      validate: facebookSchema,
      form: [
        {
          name: "facebook",
          type: "text",
          placeholder: "Facebook profile link",
          label: "Example: https://facebook.com/username",
        },
      ],
    },
  ];
  const menus = {
    sub: true,
    lists: [
      {
        title: "",
        placeholder: "Telegram",
        icon: <FaTelegramPlane />,
        link: "telegram",
      },
      {
        title: "",
        placeholder: "Facebook",
        icon: <FaFacebook />,
        link: "facebook",
      },
      {
        title: "",
        placeholder: "Instagram",
        icon: <FaInstagram />,
        link: "instagram",
      },
      {
        title: "",
        placeholder: "Github",
        icon: <FaGithub />,
        link: "github",
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

export default Networks;
