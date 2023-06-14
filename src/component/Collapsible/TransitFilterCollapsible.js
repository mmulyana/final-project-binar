import React from "react";
import withCollapsible from "./withCollapsible";
import { SelectWithCheckbox } from "../Select";

function TransitFilter() {
  return (
    <div className="">
      <SelectWithCheckbox name="Langsung" />
    </div>
  );
}

const TransitFilterCollapsible = withCollapsible(TransitFilter);
export default TransitFilterCollapsible;
