import React from "react";
import PropTypes from "prop-types";

const Square = ({ onClick, value }) => {
  return (
    <button className="square" onClick={onClick} type="button">
      {value}
    </button>
  );
};

Square.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.oneOf(["X", "O"]).isRequired,
};

export default Square;
