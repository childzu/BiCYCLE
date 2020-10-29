// components/Header.js
import Link from "next/link";

import "./NavBar.scss";

const NavBar = props => (
  <Link href="/">
    <div className="Header"></div>
  </Link>
);

export default NavBar;
