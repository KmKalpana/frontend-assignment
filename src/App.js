// @ts-nocheck
import React,{ useState } from "react";
import JsonInput from "./component/JsonSchema.js";
import OutputForm from "./component/JsonOutput/OutputForm";


function App() {
  const [jsonSchema, setJsonSchema] = useState("");
  return (
    <div className="w-screen h-screen grid grid-cols-2">
      <JsonInput jsonSchema={jsonSchema} setJsonSchema={setJsonSchema} />
      <OutputForm jsonSchema={jsonSchema} setJsonSchema={setJsonSchema} />
    </div>
  );
}

export default App;
