import "./NavBar.scss";
import NavBarButton from "../NavBarButton";

const NavBar = props => (
  <div className="NavBar">
    {props.NavBarMenus.map(button => (
      <NavBarButton
          key={button.path}
          path={button.path}
          label={button.label}
      />
    ))}
  </div>
);

export default NavBar;
