import "./NavBar.scss";
import NavButton from "./NavButton";
import Link from 'next/link';

const NavBar = props => (
    <div className="NavBarTop">
        <Link href="/">
            <div className="Logo">{props.appTitle}</div>
        </Link>
        
        <div className="NavBar">
            {props.navButtons.map(button => (
            <NavButton
                key={button.path}
                path={button.path}
                label={button.label}
                icon={button.icon}
            />
            ))}
        </div>
    </div>
);

export default NavBar;