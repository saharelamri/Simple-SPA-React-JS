import React, { Component } from "react";

class Form extends Component {
render() {
    const handleSubmit = event => {
            event.preventDefault();
            alert('You have submitted the form.')

        }
    
return (
    <div>
        <form onSubmit={handleSubmit}>
    <label for="fname">First name:</label><br></br>
    <input type="text" id="fname" name="fname"></input><br></br>
    <label for="lname">Last name:</label><br></br>
    <input type="text" id="lname" name="lname"></input><br></br>
    <input type="radio" id="male" name="gender" value="male"></input>
    <label for="male">Male</label>
    <input type="radio" id="female" name="gender" value="female"></input>
    <label for="female">Female</label><br></br>
  </form>  
  <div>
  <form>
  <div class="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Example select</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect2">Example multiple select</label>
    <select multiple class="form-control" id="exampleFormControlSelect2">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <button type="button" class="btn btn-primary">Submit</button>
</form>
  </div>
  </div>
  
);
} }

export default Form;