// components/Header.js
import Link from "next/link";

import "./NavBar.scss";

const NavBar = props => (
  <div className="NavBar">
    <Link href="/explore/search">Search</Link>
  </div>
);

export default NavBar;
