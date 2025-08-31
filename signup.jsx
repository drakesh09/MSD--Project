import React from "react";
import "./sign.css";

function App() {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-left">
          <h1>Looks like you're new here!</h1>
          <p>Sign up with your mobile number to get started</p>
        </div>
        <div className="login-right">
          <input type="text" placeholder="Enter Mobile number" />
          <input type="text" placeholder="Enter Email (optional)" />
          <input type="password" placeholder="Enter Password" />
          <p className="terms">
            By continuing, you agree to Flipkart's <span>Terms of Use</span> and{" "}
            <span>Privacy Policy</span>.
          </p>
          <button className="login-btn">Continue</button>
          <p className="signup-text">
            Existing User? <span>Log in</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;