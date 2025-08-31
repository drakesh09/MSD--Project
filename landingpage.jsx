import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="logo">Flipkart</div>
        <input type="text" placeholder="Search for products, brands and more" className="search-bar" />
        <button className="login-btn">Login</button>
        <div className="cart">Cart</div>
      </header>

      {/* Navigation */}
      <nav className="nav-bar">
        <ul>
          <li>Electronics</li>
          <li>Fashion</li>
          <li>Home</li>
          <li>Beauty</li>
          <li>Appliances</li>
          <li>More</li>
        </ul>
      </nav>

     

      {/* Products Section */}
      <section className="products">
        <h2>Best of Electronics</h2>
        <div className="product-list">
          {Array.from({ length: 4 }).map((_, index) => (
            <div className="product-card" key={index}>
              <img src="https://5.imimg.com/data5/WT/WU/MY-13922529/hp-laptop-1000x1000.jpg" />
              <p>HP Laptop</p>
              <span>₹999</span>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Flipkart Clone. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;