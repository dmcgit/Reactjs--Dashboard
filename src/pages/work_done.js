import React from "react";
import "./App.css";
import carfix from "./SunrisePeekTeaEstate.jpg";
// import axios from "axios";

import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
import { setTextRange } from "typescript";

function App() {
  const [number, setNumber] = React.useState(null);
  const [message, setTextRange] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  //  number = document.forms["myForm"]["input"].value;
 
    if (number == "") {
      alert("This field must be filled out");
      
    }
     
 
  return (
    <div
      className="App"
      style={{
        backgroundImage: `linear-gradient(0deg,rgba(20,100,20,0.5), rgba(9, 93, 225, 0.5)),url(${carfix})`
      }}
    >
    <div className="wrapper">
    
      <h1 className="title"><b>DAILY CROP YIELD</b></h1>

      
<form name="myForm" onsubmit="App()" method="post">
      
      <div className="field">
        <label className="label"></label>
        <div className="field">
          <div className="control">
            <input
              name="text1"
              className="input"
              type="text"
              onChange={event => setTextRange(event.target.value)}
              placeholder="Labourer ID" required/>
          </div>
        </div>
      </div>

      <div className="field">
        <label className="label"></label>
        <div className="field">
          <div className="control">
            <input
              name="text2"
              className="input"
              type="text"
              onChange={event => setTextRange(event.target.value)}
              placeholder="Work Assignmt" required/>
          </div>
        </div>
      </div>

      <div className="field">
        <label className="label" ></label>
        <div className="field">
          <div className="control">
            <input
              name="text3"
              className="input"
              type="number"
              onChange={event => setNumber(event.target.value)}
              placeholder="Amount (kg)"/>
          </div>
        </div>
      </div>

      <input type="submit" onClick
        disabled={loading || !message.trim() || !number}
        className={`${loading && "is-loading"} is-warning button`} value="Go"/>
        
      
      </form>
      <p id="demo"></p>
      </div>
    </div>
    
  );
}

export default App;
