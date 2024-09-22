// src/QRCode.js
import React from "react";
import QRCode from "react-qr-code";
import { useState } from "react";
import './styles.css';

export default function QRCodePage() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerateQrCode() {
    setQrCode(input);
    setInput('')
  }
  return (
    <div className="qr-container">
      <h1>QR CODE GENERATOR</h1>
      <div className="qr-input-container">
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          value={input}
          placeholder="Enter your value here"
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerateQrCode}
        >
          Generate
        </button>
      </div>
      <div className="qr-code-result">
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
      </div>
    </div>
  );
}
