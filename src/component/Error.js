import React from "react";

const Error = () => {
  return (
    <div className="rounded-lg grow bg-yellow-200 grid place-items-center">
      <h1 className="mt-6 text-xl font-semibold text-red-700 text-center">
        Invalid JSON Format
      </h1>
    </div>
  );
};

export default Error;
