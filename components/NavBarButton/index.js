import Link from "next/link";
import { withRouter } from "next/router";

import "./NavBarButton.scss";

const NavBarButton = props => (
  <Link href={props.path}>
    <div className={`NavBarButton ${props.router.pathname.includes(props.path) ? "active" : ""}`}>
        <span>{props.label}</span>
    </div>
  </Link>
);

export default withRouter(NavBarButton);