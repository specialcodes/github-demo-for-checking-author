import React ,{Component} from "react";
import {NavLink} from "react-router-dom";
import "./Footer.scss";

class Footer extends Component{
    render(){
        return (
            <div>
                    <div className="footer">
                        <div className="footer_u">
                            <div className="footer_u__logo">
                                <div className="footer_u__logo__div">
                                    <img src="media/logos/logo-iw.png" className="footer_u__logo_svg" alt="IWSC-SRM" />
                                </div>
                                <div className="footer_u__logo_span">Inception Wave Student Chapter SRM</div>
                            </div>
                        </div>
                        <div className="footer_l">
                            <div className="footer_l__links">
                                <div className="footer_l__hr_container">
                                    <div className="footer_l__hr">
                                        <div className="footer_l__hr_text_1"><hr color="#29abe2" /></div>
                                        <h2 >Links</h2>
                                        <div className="footer_l__hr_text_1"><hr color="#29abe2" /></div>
                                        <br /><br /><br />
                                    </div>
                                </div>
                                <div className="footer_l__links_content">
                                    <NavLink className="footer_l__links_cn" exact to="/">
                                        Home
                                    </NavLink>
                                </div>
                                <div className="footer_l__links_content">
                                    <a className="footer_l__links_cn" target="_blank" rel="noreferrer" href="https://inceptionwave.in/home">
                                        IW Official Site
                                    </a>
                                </div>
                                <div className="footer_l__links_content">
                                    <NavLink className="footer_l__links_cn" exact to="/events">
                                        Events
                                    </NavLink>
                                </div>
                                <div className="footer_l__links_content">
                                    <NavLink className="footer_l__links_cn" exact to="/team">
                                        Team
                                    </NavLink>
                                </div>
                                <div className="footer_l__links_content">
                                    <NavLink className="footer_l__links_cn" exact to="/faqs">
                                        FAQs
                                    </NavLink>
                                </div>
                            </div>
                            <div className="footer_l__contact">
                                <div>
                                    <div className="footer_l__hr">
                                        <div className="footer_l__hr_text_1"><hr color="#29abe2" /></div>
                                        <h2>Contact</h2>
                                        <div className="footer_l__hr_text_1"><hr color="#29abe2" /></div>
                                        <br /><br /><br />
                                    </div>
                                </div>
                                <div className="footer_l__contact_content">
                                    <a target="_blank" rel="noreferrer" href="mailto:iwscsrm@gmail.com" className="footer_l__contact_cn"><b>Email</b>: iwscsrm@gmail.com</a>
                                </div>
                                <div className="footer_l__contact_content">
                                    <a target="_blank" rel="noreferrer" href="https://goo.gl/maps/WFEtisM2Cd918eU76" className="footer_l__contact_cn"><b>Address</b>: SRM Institute of Science&Technology,<div className="footer_l__contact_gmap">Near Potheri Railway Station,Kattankulathur-603203</div></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <span>Made with 🍵❤</span>
                        <span>Developed by IWSC SRM <img src="logos.png" alt="IWSC-SRM" /></span>
                    </div>
            </div>    
        )
    }
}

export default Footer;