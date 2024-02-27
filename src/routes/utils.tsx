import { FaInstagram } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";
import { IoHomeOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";

const styleFooterIcon = { width: "30px", height: "30px", color: "black" };

const styleNavbarIcon = { width: "30px", height: "30px", color: "black" };

export const ROUTES = {
  home: {
    text: "home",
    link: "/",
    icon: <IoHomeOutline style={styleNavbarIcon} />,
    description: "",
  },
  search: {
    text: "search",
    link: "/search",
    icon: <FiMapPin style={styleNavbarIcon} />,
    description: "",
  },
  settings: {
    text: "settings",
    link: "/settings",
    icon: <CiSettings style={styleNavbarIcon} />,
    description: "",
  },
  error: { text: "error", link: "*", icon: "", description: "" },
};

export const FOOTER_LINK = [
  {
    name: "youtube",
    id: 1,
    link: "https://www.youtube.com",
    icon: <CiYoutube style={styleFooterIcon} />,
  },
  {
    name: "twitter",
    id: 2,
    link: "https://www.twitter.com",
    icon: <FaXTwitter style={styleFooterIcon} />,
  },
  {
    name: "instagram",
    id: 3,
    link: "https://www.instagram.com",
    icon: <FaInstagram style={styleFooterIcon} />,
  },
];
