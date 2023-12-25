import React from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dialog } from "@mui/material";

const FormSubmit = ({ open, setOpen, formSubmitedData }) => {
  const closeModal = () => {
    setOpen(false);
  };
  return (
    <Dialog open={open}>
      <div className="w-[32rem] p-4 py-6 overflow-hidden">
        <div className="flex justify-end">
          <FontAwesomeIcon
            icon={faTimes}
            className="cursor-pointer"
            onClick={closeModal}
          />
        </div>
        <code className="w-full whitespace-normal break-words">
          {JSON.stringify(formSubmitedData)}
        </code>
      </div>
    </Dialog>
  );
};

export default FormSubmit;
