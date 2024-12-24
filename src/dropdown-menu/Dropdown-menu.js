import React, { useState } from "react";

function DropDownMenu({ characterList }) {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
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
            {option}
          </option>
        ))}
      </select>

      {selectedValue && <p>Selected value: {selectedValue}</p>}
    </div>
  );
}

export default DropDownMenu;
