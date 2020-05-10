import React from "react";

const Box = ({ value, onClick }) => {
  const style = value ? `boxes ${value}` : `boxes`;

  return (
    <button className={style} onClick={onClick}>
      {value}
    </button>
  );
};

export default Box;