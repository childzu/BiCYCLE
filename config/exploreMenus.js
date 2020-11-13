import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faMapMarkerAlt,
  faUser,
  faShoppingCart
} from "@fortawesome/free-solid-svg-icons";

const exploreMenus = [
  {
    label: "Search",
    path: "/explore/search",
    icon: <FontAwesomeIcon icon={faCompass} />
  },
  {
    label: "Near Me",
    path: "/explore/findnearme",
    icon: <FontAwesomeIcon icon={faMapMarkerAlt} />
  },
  {
    label: "My Bycicle",
    path: "/explore/mybicycle",
    icon: <FontAwesomeIcon icon={faShoppingCart} />
  }
];

export default exploreMenus;