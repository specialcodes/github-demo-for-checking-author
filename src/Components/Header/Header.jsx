import React,{Component} from "react";
import {NavLink} from "react-router-dom";
import Navbar from "./BurgerMenu/Navbar.jsx";
import "font-awesome/css/font-awesome.min.css";
import "./Header.scss";

class Header extends Component{
    render(){
        return(
                <div>
                    <nav className="navbar">
                        <Navbar />
                        <img className="navbar__logo" alt="" src="media/logos/logo-iw.png" />
                        <ul className="navbar__links">
                            <NavLink className="navbar__links__li" exact to="/">
                                <li>HOME</li>
                            </NavLink>
                            <NavLink className="navbar__links__li" exact to="/events">
                                <li>EVENTS</li>
                            </NavLink>
                            <NavLink className="navbar__links__li" exact to="/team">
                                <li>TEAM</li>
                            </NavLink>
                            <NavLink className="navbar__links__li" exact to="/faqs">
                                <li>FAQs</li>
                            </NavLink>
                        </ul>
                    </nav>
                </div>
        )
    }
}
export default Header;