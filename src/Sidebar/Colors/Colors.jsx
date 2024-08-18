import React from 'react';
import "./Colors.css";
import Inputs from '../../Components/Inputs';

function Colors({ handleRadioChange }) {
  return (
    <div className='ml'>
      <h3 className="sidebar-title color-title">Color</h3>
      
      <label className="sidebar-label-container">
        <input
          onChange={handleRadioChange}
          type="radio"
          value=""
          name="test1"
        />
        <span className="checkMark all"></span>All
      </label>

      <Inputs
        onChange={handleRadioChange}
        value="black"
        title="Black"
        name="test1"
        color="black"
      />

      <Inputs
        onChange={handleRadioChange}
        value="blue"
        title="Blue"
        name="test1"
        color="blue"
      />

      <Inputs
        onChange={handleRadioChange}
        value="red"
        title="Red"
        name="test1"
        color="red"
      />

      <Inputs
        onChange={handleRadioChange}
        value="white"
        title="White"
        name="test1"
        color="white"
      />

      <Inputs
        onChange={handleRadioChange}
        value="green"
        title="Green"
        name="test1"
        color="green"
      />
    </div>
  );
}

export default Colors;
