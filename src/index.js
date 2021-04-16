import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Home from "./Components/Home/Home.jsx";
import{Switch,BrowserRouter,Route} from "react-router-dom";
import "./fonts.css";
import "./scss/_base.scss";

class App extends Component{
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    );
  }}
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

