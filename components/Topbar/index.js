import "./TopBar.scss";
import NavButton from "../NavButton";
import Link from 'next/link';
import DropdownMenu from "../DropdownMenu";

const TopBar = props => (
    <div className="NavBarTop">
        <Link href="/">
            <div className="Logo">{props.appTitle}</div>
        </Link>
        
        <div className="NavBarTopMenu">
            {props.TopMenus.map(button => (
            <NavButton
                key={button.path}
                path={button.path}
                label={button.label}
                icon={button.icon}
            />
            ))}
            <div><DropdownMenu/></div>
        </div>
    </div>
);

export default TopBar;