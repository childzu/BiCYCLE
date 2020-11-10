import "./DropdownMenu.scss";
import React, { useRef } from "react";
import { useDetectOutsideClick } from "./useDetectOutsideClick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function DropdownMenu() {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClick = () => setIsActive(!isActive);
  
    return (
        <div className="menu-dropdown-container">
            {/* <button onClick={onClick} className="menu-trigger">
                <span>User</span>
                <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg" alt="User avatar"/>
            </button> */}
            <div onClick={onClick}  className="NavButton">
                <div className="Icon"><FontAwesomeIcon icon={faUser} /></div>
                <span className="Label">Account</span>
            </div>
            <nav ref={dropdownRef} className={`menu ${isActive ? "active" : "inactive"}`}>
                <ul>
                    <li>
                        <Link href="/setting">
                            <a>Stetting</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/profile">
                            <a>Profile</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/logout">
                            <a>Logout</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
  }