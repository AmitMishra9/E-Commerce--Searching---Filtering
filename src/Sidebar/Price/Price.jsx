import React from "react";
import "./Price.css"
import Inputs from "../../Components/Inputs";
function Price({handleRadioChange}) {
  return (
    <div className="mll">
      <h2 className="sidebar-title  Price-title">Price</h2>


      <label className="sidebar-label-container"> 
      <input onChange={handleRadioChange} type="radio" value="" name="test2" />
      <span className="checkMark"></span>All
      </label>

      <Inputs handleRadioChange={handleRadioChange}
      value={50}
      title="$0-50"
      name="test2"
      />

      <Inputs handleRadioChange={handleRadioChange}
      value={100}
      title="$50-100"
      name="test2"
      />

      <Inputs handleRadioChange={handleRadioChange}
      value={100}
      title="$100-150"
      name="test2"
      />

      <Inputs handleRadioChange={handleRadioChange}
      value={200}
      title="Over $150"
      name="test2"/>     
    </div>
  );
}

export default Price;
