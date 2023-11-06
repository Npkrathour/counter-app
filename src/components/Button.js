import React from "react";

const Button = ({ disabled,label,handleFunction,variant }) => {
  return (
    <button disabled={disabled} className={`btn ${variant} py-2 px-5 rounded fw-bold`} onClick={handleFunction}>
      {label}
    </button>
  );
};

export default Button;
