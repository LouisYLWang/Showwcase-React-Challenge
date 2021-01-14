import React from "react";

interface BtnProps {
  text: string;
  onClick: () => void;
}

export const Button: React.FC<BtnProps> = ({ text = "emptyTxt", onClick }) => {
  return (
    <button color="white" onClick={onClick}>
      {text}
    </button>
  );
};
