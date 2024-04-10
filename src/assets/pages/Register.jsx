import React from "react";
import { Link } from "react-router-dom";
// import "./App.css";
function Register() {
  return (
    <div>
      <div className="signup_parent">
        <h2
          style={{
            paddingLeft: "22px",
            paddingTop: "16px",
            textAlign: "center",
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize:"30px"
          }}
        >
          Register Page
        </h2>
        <form>
          <label> Full Name </label> <br />
          <input type="text" placeholder=" Enter Your Name" />
          <br />
       
          <label>Phone  </label> <br />
          <input type="number" placeholder=" +252 61- .." />
          <br />
          
          <label>Location  </label> <br />
          <input type="text" placeholder=" Location..." />
          <br />
     
          <label>Phone  </label> <br />
          <input type="email" placeholder=" Email....." />
          <br />
    
          <label>Password  </label> <br />
          <input type="password" placeholder=" *******" />
          <br />
          <br />
       
          <button className="btn1" style={{ width: "90%", padding: "12px" }}>
            Register
          </button>
          <br />
         
          <p className="register">
            If You Already have Account <a href="# "> <Link to="/login">Login Here.</Link> </a>{" "}
          </p>
          {/* <button
            className="btns"
            style={{
              width: "95%",
              padding: "12px",
              backgroundColor: "rgb(27, 54, 86)",
            }}
          >
            Register
          </button> */}
        </form>
      </div>
    </div>
  );
}

export default Register;
