import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';

const QRCodeGenerator = () => {
  const [inputText, setInputText] = useState('');
  const [generatedQR, setGeneratedQR] = useState('https://example.com'); // URL par défaut

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleGenerateClick = () => {
    setGeneratedQR(inputText);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Qr Code Generator</h1>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter text to generate QR code"
        style={{ padding: '10px', width: '250px' }}
      />
      <button
        onClick={handleGenerateClick}
        disabled={!inputText}
        style={{ marginLeft: '10px', padding: '10px 20px' }}
      >
        Generate
      </button>
      <div style={{ marginTop: '20px' }}>
        {generatedQR ? (
          <QRCodeSVG value={generatedQR} />
        ) : (
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?data=https://example.com&size=200x200"
            alt="Default QR Code"
            style={{ width: '200px', height: '200px' }}
          />
        )}
      </div>
    </div>
  );
};

export default QRCodeGenerator;
