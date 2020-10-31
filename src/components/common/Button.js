import React from "react";

const BtnNormal = ({ name, type, size, onClick, block }) => {
  return (
    <button
      className={`btn btn-${type} btn-${size} waves-effect waves-light ${
        block ? "btn-block" : ""
      }`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

const BtnSpinner = ({ type, size, block }) => {
  return (
    <button
      className={`btn btn-${type} btn-${size} ${block ? "btn-block" : ""}`}
    > <i className="fa fa-spinner fa-spin"></i></button>
  );
};

export { BtnNormal, BtnSpinner };
