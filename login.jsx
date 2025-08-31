import React from "react";
import "./login.css";

function App() {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-left">
          <h1>Login</h1>
          <p>Get access to your Orders, Wishlist and Recommendations</p>
        </div>
        <div className="login-right">
          <input type="text" placeholder="Enter Email/Mobile number" />
          <input type="password" placeholder="Enter Password" />
          <p className="terms">
            By continuing, you agree to Flipkart's <span>Terms of Use</span> and{" "}
            <span>Privacy Policy</span>.
          </p>
          <button className="login-btn">Login</button>
          <p className="signup-text">
            New to Flipkart? <span>Create an account</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;