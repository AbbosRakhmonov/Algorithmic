import React from "react";
import { ModalBody } from "reactstrap";
import Profile from "../MComponents/ProfileSettings/profile";
import List from "../MComponents/list/list";
import { motion } from "framer-motion";

import {
  IoAlertCircleOutline,
  IoLockClosedOutline,
  IoLocationOutline,
  IoGlobeOutline,
} from "react-icons/io5";

function All() {
  const menus = {
    sub: false,
    lists: [
      {
        title: "Edit Profile",
        icon: <IoAlertCircleOutline />,
        link: "profile",
      },
      {
        title: "Privacy and Security",
        icon: <IoLockClosedOutline />,
        link: "security",
      },
      {
        title: "Location",
        icon: <IoLocationOutline />,
        link: "location",
      },
      {
        title: "Social Networks",
        icon: <IoGlobeOutline />,
        link: "networks",
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
      <Profile />
      <ModalBody className={"s-modal-body"}>
        <List menus={menus} />
      </ModalBody>
    </motion.section>
  );
}

export default All;
