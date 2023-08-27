import React, { useState } from 'react';
import './FormComponent.css';

const FormComponent = ({ onSave }) => {
  const [plateNumber, setPlateNumber] = useState('');
  const [deviceName, setDeviceName] = useState('');

  const handleSave = () => {
    const newData = { plateNumber, deviceName };
    onSave(newData); // Call the onSave prop with the new data
  };

  return (
    <div className="form-container">
      <h3 className="form-title">Save Vehicle Details</h3>
      <form className="form-fields" onSubmit={handleSave}>
        <input
          className="form-field"
          type="text"
          placeholder="Plate Number"
          value={plateNumber}
          onChange={(e) => setPlateNumber(e.target.value)}
        />
        <input
          className="form-field"
          type="text"
          placeholder="Device Name"
          value={deviceName}
          onChange={(e) => setDeviceName(e.target.value)}
        />
        <button className="form-button" type="submit">Save</button>
      </form>
    </div>
  );
};

export default React.memo(FormComponent);
