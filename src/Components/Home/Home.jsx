import React,{Component} from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

class Home extends Component{
    render(){
        return (
                <div className="home">
                    <Header />        
                    <Footer />
                </div>
        )
    }
} 
export default Home;