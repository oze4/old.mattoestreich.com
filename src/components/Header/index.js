import React from "react";
import PropTypes from "prop-types";

const sizesSpan = "bg-black-90 lh-copy white pa1 tracked-tight";

Header.defaultProps = {
  size: "lg",
};

Header.propTypes = {
  label: PropTypes.string.isRequired,
  size: PropTypes.string,
};

export default function Header({ label, size }) {
  let sizes = {
    h1: "",
    span: "",
  };

  if (size === "lg") {
    sizes.h1 = "f1 f-5-m f-6-ns lh-solid mv0";
    sizes.span = sizesSpan;
  }

  if (size === "sm") {
    sizes.h1 = "f7 f1-ns lh-solid mv0";
    sizes.span = sizesSpan;
  }

  return sizes.h1 !== "" && sizes.span !== "" ? (
    <header className="ropa-sans">
      <h1 className={sizes.h1}>
        <span className={sizes.span}>{label}</span>
      </h1>
    </header>
  ) : (
    ""
  );
}
