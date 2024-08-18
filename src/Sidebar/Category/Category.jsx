import React from "react";
import "./Category.css";
import Inputs from "../../Components/Inputs";

function Category({ handleRadioChange }) {
  return (
    <div className="category-container">
      <h3 className="sidebar-title">Category</h3>

      <div>
        <label className="sidebar-label-container">
          <input
            onChange={handleRadioChange}
            type="radio"
            value=""
            name="test"
          />
          <span className="checkMark"></span>All
        </label>

        <Inputs
          onChange={handleRadioChange}
          value="sneakers"
          title="Sneakers"
          name="test"
        />

        <Inputs
          onChange={handleRadioChange}
          value="flats"
          title="Flats"
          name="test"
        />

        <Inputs
          onChange={handleRadioChange}
          value="sandals"
          title="Sandals"
          name="test"
        />

        <Inputs
          onChange={handleRadioChange}
          value="heels"
          title="Heels"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
