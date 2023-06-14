import React from "react";

export default function SelectWithCheckbox({ name, isChecked }) {
  return (
    <div className="flex items-center justify-between">
      {name}

      <input
        type="checkbox"
        checked={isChecked}
        className="form-checkbox h-4 w-4 ml-40"
      />
    </div>
  );
}
