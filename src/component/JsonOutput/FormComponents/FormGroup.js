import React, { useState } from "react";
import FormRender from "../FormRender";
import Switch from "@mui/material/Switch";

const FormGroup = ({ val, formRef, parentLabel, reRender }) => {
  const [showAdvancedFields, setShowAdvancedFields] = useState(false);
  return (
    <div className="border rounded-lg p-4 border-gray-200 bg-gray-50">
      <h1 className="pb-3 font-bold border-b-2">{val?.label}</h1>
      <FormRender
        data={val?.subParameters}
        formRef={formRef}
        parentLabel={
          (parentLabel === "" ? "" : parentLabel + ".") + val?.jsonKey
        }
        reRender={reRender}
        showAdvancedFields={showAdvancedFields}
      />
      
      <div className="flex gap-3 items-center">
        <Switch
          value={showAdvancedFields}
          onClick={() => {
            setShowAdvancedFields(!showAdvancedFields);
          }}
        />
        {showAdvancedFields ? "Hide Advanced Fields" : "Show Advanced Fields"}
      </div>
    </div>
  );
};

export default FormGroup;
