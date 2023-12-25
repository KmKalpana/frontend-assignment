import React from "react";
import { getLabel } from "../../../utils/index";
import RequiredStar from "./RequiredStar";
import FormFieldDescription from "./FormFieldDescription";

const Switch = ({ val, parentLabel }) => {
  const isDescriptionValid = () => {
    return val?.description?.trim() !== "";
  };
  return (
    <div className="flex gap-2 items-center">
      <input
        type="checkbox"
        name={getLabel(parentLabel, val?.jsonKey)}
        className="w-4 h-4 cursor-pointer text-black"
      />
      <label htmlFor="" className="text-lg">
        {val?.label} <RequiredStar val={val} />
        {isDescriptionValid() ? (
          <FormFieldDescription description={val?.description} />
        ) : (
          ""
        )}
      </label>
    </div>
  );
};

export default Switch;
