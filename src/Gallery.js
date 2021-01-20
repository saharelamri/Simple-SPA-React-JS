import React, { Component } from "react";
import prop2 from "./prop2.PNG";
import prop3 from "./prop3.PNG";
import prop4 from "./prop4.PNG";
import prop1 from "./prop 1.PNG";


class Gallery extends Component {
render() {
    
return (
<div>
<div class="row">
  <div class="column">
    <img src={prop2} alt="Nature" ></img>
  </div>
  <div class="column">
    <img src={prop3} alt="Snow" ></img>
  </div>
  <div class="column">
    <img src={prop4} alt="Mountains" ></img>
  </div>
  <div class="column">
    <img src={prop1} alt="Lights" ></img>
  </div>
</div>


</div>


);}}
export default Gallery;