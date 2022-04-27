import React from "react";
import {
  IoHome,
  IoCodeSlash,
  IoTrophy,
  IoPeople,
  IoSend,
  IoInformationCircle,
  IoChatbubbleEllipses,
  IoChatbubbles,
  IoSchool,
  IoCodeWorking,
  IoPerson,
  IoLibrary,
} from "react-icons/io5";

const Links = [
  {
    id: 1,
    title: "Dashboard",
    childTitles: ["news"],
    path: "/dashboard",
    icon: <IoHome />,
  },
  {
    id: 2,
    title: "Problems",
    childTitles: ["p"],
    path: "/dashboard/problems",
    icon: <IoCodeSlash />,
  },
  {
    id: 3,
    title: "Contests",
    childTitles: [],
    path: "/dashboard/contests",
    icon: <IoTrophy />,
  },
  {
    id: 4,
    title: "Lider Board",
    childTitles: [],
    path: "/dashboard/leaderboard",
    icon: <IoPeople />,
  },
  {
    id: 5,
    title: "Education",
    childTitles: [],
    path: "/dashboard/education",
    icon: <IoSchool />,
  },
  // {
  //   id: 6,
  //   title: "CCP",
  //   childTitles: [],
  //   path: "/dashboard/ccp",
  //   icon: <IoSend />,
  // },
  {
    id: 7,
    title: "Attempts",
    childTitles: [],
    path: "/dashboard/attempts",
    icon: <IoSend />,
  },
  {
    id: 8,
    title: "Usage",
    childTitles: [],
    path: "/dashboard/usage",
    icon: <IoInformationCircle />,
  },
  {
    id: 9,
    title: "About Us",
    childTitles: [],
    path: "/dashboard/about",
    icon: <IoCodeWorking />,
  },
];
export const ProblemNav = [
  {
    id: 1,
    title: "Problem",
    childTitles: [""],
    path: "",
    icon: <IoChatbubbleEllipses />,
  },
  {
    id: 2,
    title: "Submissions",
    childTitles: ["s"],
    path: "s",
    icon: <IoSend />,
  },
  {
    id: 3,
    title: "Discussion",
    childTitles: ["d"],
    path: "d",
    icon: <IoChatbubbles />,
  },
];
export const profileLinks = [
  {
    id: 1,
    title: "Overview",
    childTitles: [""],
    path: "",
    icon: <IoPerson />,
  },
  {
    id: 2,
    title: "Submissions",
    childTitles: [],
    path: "submissions",
    icon: <IoSend />,
  },
  {
    id: 3,
    title: "Problems Solved",
    childTitles: [],
    path: "problems",
    icon: <IoLibrary />,
  },
];

export default Links;
