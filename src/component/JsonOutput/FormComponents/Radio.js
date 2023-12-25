import React, { useEffect, useState } from "react";
import { getLabel } from "../../../utils/index";

const Radio = ({ val, parentLabel, reRender }) => {
  const [radioValue, setRadioValue] = useState(val?.validate?.defaultValue);

  useEffect(() => {
    reRender();
  }, [radioValue]);

  return (
    <div className="">
      <div className="grid grid-cols-2 gap-4 mt-2">
        {val?.validate?.options?.map((option, index) => {
          return (
            <div
              className={`justify-self-center p-2 rounded-lg border cursor-pointer w-full flex ${
                radioValue === option?.value
                  ? "border-blue-600 shadow border bg-blue-100"
                  : "border-gray-200 bg-blue-50"
              }  `}
              onClick={() => {
                if (val?.validate?.immutable) return;
                setRadioValue(option.value);
                reRender();
              }}
            >
              <label htmlFor={""} className="w-full cursor-pointer grow">
                {option.label}
              </label>
              <input
                type="radio"
                value={option?.value}
                name={getLabel(parentLabel, val?.jsonKey)}
                checked={radioValue === option?.value ? "checked" : ""}
                onChange={(e) => {
                  setRadioValue(e.target.value);
                }}
                required={val?.validate?.required}
                disabled={val?.validate?.immutable}
                style={{ display: "none" }} // Add this line to hide the radio button
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Radio;
