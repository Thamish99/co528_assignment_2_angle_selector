import React, { useState } from 'react';
import './App.css'; // Ensure this imports your CSS file containing the .App-header class


const AngleSelector = () => {
  const [angle, setAngle] = useState(0);

  const handleTextChange = (e) => {
    let value = parseInt(e.target.value, 10);
    if (isNaN(value)) value = 0;
    if(value<0) value = value*(-1);
    else value = Math.max(0, Math.min(360, value));
    setAngle(value);
  };

  const handleSliderChange = (e) => {
    let value = parseInt(e.target.value, 10);
    if (value < 0) value = value * -1;
    setAngle(value);
  };

  const handleRadioChange = (e) => {
    setAngle(parseInt(e.target.value, 10));
  };

  const commonAngles = [0, 45, 60, 90, 180];

  return (
    <div style={{ padding: '20px' , }}  className="App-header">
      <h2>Angle Selector</h2>
      
      {/* First Row: Text Input and Slider */}
      <div style={{ padding: '10px', backgroundColor: '#f0f0f0', marginBottom: '20px' }}>
        <input
          type="number"
          value={angle}
          onChange={handleTextChange}
          style={{ marginRight: '10px' }}
        />
        <input
          type="range"
          min="-360"
          max="360"
          value={angle}
          onChange={handleSliderChange}
          style={{ width: '600px', verticalAlign: 'middle' }}
        />
      </div>

      {/* Second Row: Radio Buttons */}
      <div style={{ padding: '10px', backgroundColor: '#e0e0e0', color: 'black'}}>
        {commonAngles.map((commonAngle) => (
          <label key={commonAngle} style={{ marginRight: '10px' }}>
            <input
              type="radio"
              value={commonAngle}
              checked={angle === commonAngle}
              onChange={handleRadioChange}
            />
            {commonAngle}°
          </label>
        ))}
      </div>
    </div>
  );
};

export default AngleSelector;
