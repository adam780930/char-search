import React, { useState } from "react";

function DropDownMenu({ characterList, onCharacterChange }) {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    onCharacterChange(event.target.value)
    setSelectedValue(event.target.value)
  };

  return (
    <div>
      <select
        class="form-select form-select-sm"
        aria-label=".form-select-sm example"
        value={selectedValue}
        onChange={handleChange}
      >
        <option value="">Open this select menu</option>
        {characterList.map((option) => (
          <option key={option} value={option}>
            {option.charAt(0).toUpperCase() + option.substr(1)}
          </option>
        ))}
      </select>

      
    </div>
  );
}

export default DropDownMenu;
