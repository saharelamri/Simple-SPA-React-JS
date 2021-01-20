import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
    } from "react-router-dom";
    import Home from "./Home";
    import Stuff from "./Stuff";
    import Contact from "./Contact";
    import Form from "./Form";
    import Gallery from "./Gallery";
    import LOGO from "./LOGO.png";


class Main extends Component {
render() {
return (
    
<HashRouter>
<div>
<img src = {LOGO} alt="logo" height="50px"></img>

<h1>Simple SPA</h1>
<ul className="header">
<li><NavLink exact to="/">Home</NavLink></li>
<li><NavLink to="/stuff">Stuff</NavLink></li>
<li><NavLink to="/contact">Contact</NavLink></li>
<li><NavLink to="/signup">Sign Up</NavLink></li>
<li><NavLink to="/Gallery">Gallery</NavLink></li>

</ul>
<div className="content">
<Route exact path="/" component={Home}/>
<Route path="/stuff" component={Stuff}/>
<Route path="/contact" component={Contact}/>
<Route path="/signup" component={Form}/>
<Route path="/Gallery" component={Gallery}/>

</div>
</div>
</HashRouter>
);
}
}
export default Main;