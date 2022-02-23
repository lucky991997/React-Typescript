import React, { MouseEvent } from "react";

type ButtonProps = {
  handleClick: (event: MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({ handleClick }: ButtonProps) => {
  return (
    <button
      style={{ display: "block" }}
      onClick={(event) => {
        handleClick(event);
      }}
    >
      {" "}
      Click Me{" "}
    </button>
  );
};

export default Button;
