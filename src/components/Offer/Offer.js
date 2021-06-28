import React from "react";
import "./Offer.css";

const Offer = ({ data }) => {
  const lastItem = data[data?.length - 1];

  return (
    <>
      <span className="container-card-title">última oferta</span>
      <span className="container-card-subtitle color-time">
        R$ {lastItem ? lastItem.amount : 0}
      </span>
    </>
  );
};

export default Offer;
