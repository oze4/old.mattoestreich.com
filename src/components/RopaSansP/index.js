import React from "react";

import "./index.css";

const RopaSansP = ({ children, className = undefined, ...rest }) => {
  let _classes = "ropa-sans";
  if (className !== undefined) {
    _classes = `${_classes} ${className}`;
  }

  return <p className={_classes} {...rest}>{children}</p>;
};

export default RopaSansP;
