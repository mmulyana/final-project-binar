import React from "react";
import withCollapsible from "./withCollapsible";
import { SelectWithCheckbox } from "../Select";

function TimeFilter() {
  return (
    <div>
      <div className="mb-4">
        <p className="text-gray-500 mb-2">Berangkat</p>
        <SelectWithCheckbox name="09.00 - 12.00" />
        <div className="mt-2">
          <SelectWithCheckbox name="12.00 - 15.00" />
        </div>
      </div>

      <div>
        <p className="text-gray-500 mb-2">Tiba</p>
        <SelectWithCheckbox name="09.00 - 12.00" />
        <div className="mt-2">
          <SelectWithCheckbox name="12.00 - 15.00" />
        </div>
      </div>
    </div>
  );
}

const TimeFilterCollapsible = withCollapsible(TimeFilter);
export default TimeFilterCollapsible;
