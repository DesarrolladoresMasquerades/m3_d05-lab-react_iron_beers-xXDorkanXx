import { NavLink } from "react-router-dom";

export default function Header(){
    return(
        <NavLink to="/">
            <header className="header">
                <img src="/assets/house-128.png" alt="home-logo"/>
            </header>
        </NavLink>
    )
}