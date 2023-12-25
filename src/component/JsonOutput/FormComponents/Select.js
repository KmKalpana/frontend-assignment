import React from "react";
import FormFieldDescription from "./FormFieldDescription";
import { getLabel } from "../../../utils/index";
import RequiredStar from "./RequiredStar";

const Select = ({ val, parentLabel }) => {
  const isDescriptionValid = () => {
    return val?.description?.trim() !== "";
  };
  return (
    <div className="grid gap-4 grid-cols-2 items-center">
      <label htmlFor={val?.jsonKey} className="flex gap-2 items-center">
        {val?.label}
        <RequiredStar val={val} />
        {isDescriptionValid() ? (
          <FormFieldDescription description={val?.description} />
        ) : (
          ""
        )}
      </label>
      <select
        className="border outline-none p-2 px-4 bg-blue-50 rounded-md"
        placeholder={val?.placeholder}
        name={getLabel(parentLabel, val?.jsonKey)}
        disabled={val?.validate?.immutable}
        defaultValue={val?.validate?.defaultValue}
        required={val?.validate?.required}
      >
        {val?.validate?.options?.map((option) => {
          return <option value={option.value}>{option.label}</option>;
        })}
      </select>
    </div>
  );
};

export default Select;
