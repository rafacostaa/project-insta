import React from "react";
import "./CountDown.css";
import { useCountDown } from "../../service/useCountDown";

const CountDown = ({ data }) => {
  const remainingTime = useCountDown(data);
  return (
    <>
      <span className="container-card-title">tempo restante</span>
      <span className="container-card-subtitle color-subtitle">
        {remainingTime}
      </span>
    </>
  );
};

export default CountDown;
