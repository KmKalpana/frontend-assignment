import React from "react";

const RequiredStar = ({ val }) => {
  return (
    <>
      {val?.validate?.required ? (
        <span className="text-red-600 text-lg mx-2">*</span>
      ) : (
        ""
      )}
    </>
  );
};

export default RequiredStar;
