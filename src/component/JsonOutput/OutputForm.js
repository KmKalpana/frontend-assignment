/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
// @ts-nocheck
import React, { useEffect, useRef, useState } from "react";
import FormRender from "./FormRender";
import ErrorSection from "../Error.js";
import FormSubmit from "./FormSubmit";
import BlankForm from "./EmptyForm";
import { Switch } from "@mui/material";

const OutputForm = ({ jsonSchema }) => {
  const [parsedSchema, setParsedSchema] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [isError, setIsError] = useState(false);
  const [shouldOpenFormSubmitModal, setShouldOpenFormSubmitModal] =
    useState(false);
  const [formSubmitedData, setFormSubmitedData] = useState({});
  const [isJsonEmpty, setIsJsonEmpty] = useState(false);
  const [showAdvancedFields, setShowAdvancedFields] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    handleJsonSchema();
  }, [jsonSchema]);

  const reRender = () => {
    setToggle((toggle) => !toggle);
  };

  const handleJsonSchema = () => {
    if (jsonSchema !== "") {
      try {
        const parsed = JSON.parse(jsonSchema);
        if (typeof parsed === "object") setParsedSchema(parsed);
        setIsError(false);
      } catch (e) {
        setIsError(true);
      }
      setIsJsonEmpty(false);
    } else {
      setIsJsonEmpty(true);
      setIsError(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {};
    const formData = new FormData(formRef.current);
    formData.forEach((val, key) => {
      obj[key] = val;
    });
    setFormSubmitedData(obj);
    setShouldOpenFormSubmitModal(true);
  };

  const handleCancel = () => {
    
  };

  return (
    <div className="h-screen p-4 flex flex-col gap-6 overflow-hidden bg-gray-100">
      <div className="overflow-hidden grow flex flex-col">
        {isError ? (
          <ErrorSection />
        ) : (
          <>
            {isJsonEmpty ? (
              <BlankForm />
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="grid gap-4 p-3 overflow-auto h-full rounded-lg bg-white custom-scrollbar"
              >
                <FormRender
                  data={parsedSchema}
                  formRef={formRef}
                  parentLabel=""
                  reRender={reRender}
                  showAdvancedFields={showAdvancedFields}
                />
                <div className="flex justify-between items-center">
                  <div className="flex gap-3 items-center">
                    <Switch
                      value={showAdvancedFields}
                      onClick={() => {
                        setShowAdvancedFields(!showAdvancedFields);
                      }}
                      color="primary"
                      classes={{
                        root: "dark-blue-switch-root",
                        switchBase: "dark-blue-switch-base",
                        thumb: "white-thumb",
                        track: "dark-blue-track",
                      }}
                    />
                    {showAdvancedFields
                      ? "Hide Advanced Fields"
                      : "Show Advanced Fields"}
                  </div>
                  <div className="flex mt-4 space-x-2">
                    <button
                      type="button"
                      onClick={handleCancel}
                      className="rounded-lg text-gray-500 p-2 bg-white-500 border border-gray-500 shadow text-lg text-center w-32"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="rounded-lg text-white p-2 bg-gray-500 shadow text-lg text-center w-32"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            )}
          </>
        )}
      </div>
      <FormSubmit
        open={shouldOpenFormSubmitModal}
        setOpen={setShouldOpenFormSubmitModal}
        formSubmitedData={formSubmitedData}
      />
    </div>
  );
};

export default OutputForm;
