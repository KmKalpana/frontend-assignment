import React from "react";

const JsonInput = ({ jsonSchema, setJsonSchema }) => {
  const handleJsonSchemaChange = (e) => {
    setJsonSchema(e.target.value);
  };

  return (
    <div className="h-screen p-4 flex flex-col gap-6 border-r-2 bg-gray-100">
      <textarea
        name=""
        className="grow border-2 border-gray-800 outline-none rounded-lg shadow p-2 custom-scrollbar resize-none bg-white"
        placeholder="Enter the JSON Schema"
        onChange={handleJsonSchemaChange}
      ></textarea>
    </div>
  );
};

export default JsonInput;
