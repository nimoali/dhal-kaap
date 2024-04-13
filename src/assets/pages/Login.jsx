import React from "react";
import { Link } from "react-router-dom";


function Login() {
  return (
    <div>
      
      <div className="signup_parent  ">
        <h2
          style={{
            paddingLeft: "22px",
            paddingTop: "22px",
            textAlign: "center",
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize:"30px"
          }}
        >
          Login Page
        </h2>
        <form>
          <label>Email </label> <br />
          <input type="email" placeholder=" @yourGmail.com.." />
          <br />
          <br />
          <label>Password </label> <br />
          <input type="password" placeholder=" *******" />
          <br />
          <br />
          <button className="btn1" style={{ width: "90%", padding: "12px" }}>
            Login
          </button>
          <br />
          <br />
          <p className="register">
            If You Dont Have Account <a href="# "> <Link to="/register">Register Here.</Link></a>{" "}
          </p>

        </form>
      </div>
    </div>
  );
}

export default Login;
