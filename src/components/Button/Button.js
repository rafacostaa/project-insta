import React from "react";
import { incrementBid } from "../../store/ducks/cards/actions";
import { useDispatch } from "react-redux";

import "./Button.css";

const Button = ({ id }) => {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      className="container"
      onClick={() => dispatch(incrementBid(id))}
    >
      fazer oferta
    </button>
  );
};

export default Button;
