import "./App.css";
import Navbar from "./Navbar";
import React from "react";
import QRCodePage from ".//QrCodeGenerator/index";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      {/* Navbar is always shown */}
      <Navbar />

      {/* Define routes for different pages */}
      <Routes>
        {/* Main page route */}
        <Route
          path="/"
          element={
            <div
              className="App"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/bgimage.png)`,
                backgroundSize: "100%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "130vh",
                padding: "10px",
              }}
            >
              <header className="mt-48 ml-60 text-left">
                <h1
                  className="font-bold text-purple-950"
                  style={{ fontSize: "12rem" }}
                >
                  QR Code
                </h1>
                <h3
                  className="text-9xl font-bold text-purple-800"
                  style={{ marginTop: "-70px" }}
                >
                  Generator
                </h3>
                <p
                  className="text-lg text-purple-800 font-bold"
                  style={{ marginTop: "50px" }}
                >
                  Click here to generate your own QR Code
                </p>

                <Link to="/qrcode">
                  <button className="bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded">
                    Go to QR Code Page
                  </button>
                </Link>
              </header>
            </div>
          }
        />

        {/* QR Code page route */}
        <Route path="/qrcode" element={<QRCodePage />} />
        {/* About page route */}
        <Route path="/about" element={<div>About Page</div>} />

        {/* Contact page route */}
        <Route path="/contact" element={<div>Contact Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;
