import React,{ Component } from "react";
import { NavLink } from "react-router-dom";
import "./navbar_style.scss";
import "font-awesome/css/font-awesome.min.css";

class Navbar extends Component{
    constructor(props){
    super(props);
    this.state={
        drawerOut:false,
        open:false
    };
}
    onOpenModal = ()=>{
        this.setState({open:true});
    }
    onCloseModal=()=>{
        this.setState({open:false});
    }

    showDrawer=()=>{
        this.setState({
            drawerOut:true
        });
    }

    hideDrawer=()=>{
        this.setState({
            drawerOut:false
        });
    }

    componentDidUpdate() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  render(){
      return(
                <div id="hamburger-container">
                    <nav id="navbar-container">
                        <div id="drawer-button" className="container">
                            <img src="media/logos/menu.svg" alt="Open Menu" onClick={this.showDrawer} />
                        </div>
                        <div id="black-background" 
                        className={this.state.drawerOut?"black-background-visible":null}
                        onClick={this.hideDrawer}
                        />
                        <div id="drawer" className={this.state.drawerOut?"drawer-visible":null}>
                            <NavLink className="list_element" onClick={this.hideDrawer} exact to="/">
                                <i className="fa fa-home"></i>
                                <span className="elements">HOME</span>
                            </NavLink>
                            <NavLink className="list_element" onClick={this.hideDrawer} to="/events">
                                <i className="fa fa-calendar"></i>
                                <span className="elements">EVENTS</span>
                            </NavLink>
                            <NavLink className="list_element" onClick={this.hideDrawer} to="/team">
                                <i className="fa fa-users"></i>
                                <span className="elements">TEAM</span>
                            </NavLink>
                            <NavLink className="list_element" onClick={this.hideDrawer} to="/faqs">
                                <i className="fa fa-hourglass-half"></i>
                                <span className="elements">FAQs</span>
                            </NavLink>
                            <div className="social__links">
                                <a href="https://linkedin.com"><i className="fa fa-linkedin"></i></a>
                                <a href="https://instagram.com"><i className="fa fa-instagram"></i></a>
                                <a href="https://medium.com"><i className="fa fa-medium"></i></a>
                                
                            </div>
                            
                        </div>    
                    </nav>
                </div>
      );
  }
}


export default Navbar;