import React from "react";
import FormFieldDescription from "./FormFieldDescription";
import { getLabel } from "../../../utils/index";
import RequiredStar from "./RequiredStar";
import { isDescriptionValid } from "../../../utils/index";

const Input = ({ val, parentLabel, reRender }) => {
  
  return (
    <>
      <div className="grid grid-cols-2 gap-4 items-center border rounded-lg p-4 border-gray-200 bg-gray-50">
        <label htmlFor="" className="flex gap-2 items-center">
          {val?.label}
          <RequiredStar val={val} />
          {isDescriptionValid(val) ? (
            <FormFieldDescription description={val?.description} lable={val?.label} />
          ) : (
            ""
          )}
        </label>
        <input
          type="text"
          className="border rounded-md bg-blue-50 outline-none p-2"
          placeholder={val?.placeholder}
          name={getLabel(parentLabel, val?.jsonKey)}
          disabled={val?.validate?.immutable}
          required={val?.validate?.required}
          onChange={() => {
            reRender();
          }}
        />
      </div>
    </>
  );
};

export default Input;
