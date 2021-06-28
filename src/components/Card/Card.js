import React, { Fragment } from "react";
import Button from "../Button/Button";
import CountDown from "../CountDown/CountDown";
import Offer from "../Offer/Offer";
import "./Card.css";
import { useSelector } from "react-redux";

const Card = () => {
  const result = useSelector((state) => state.reducer.data);

  return (
    <>
      {result.map(
        ({
          id,
          imageUrl,
          remainingTime,
          make,
          version,
          model,
          year,
          km,
          bids,
        }) => (
          <Fragment key={id}>
            <div className="card">
              <div className="container-img">
                <img src={imageUrl} alt={`img-${model}`} />
                <span>ver detalhes</span>
              </div>

              <div className="parent">
                <div className="div1">
                  <CountDown data={remainingTime} />
                </div>
                <div className="div2">
                  {bids ? <Offer data={bids} /> : <span>0</span>}
                </div>
                <div className="div3">
                  {`${make} 
                  ${model} 
                  ${version} 
                  ${year} `}
                </div>
                <div className="div4">{year}</div>

                <div className="div5">
                  <span>{km} Km</span>
                </div>
                <div className="div6">
                  <Button id={id} />
                </div>
              </div>
            </div>
          </Fragment>
        )
      )}
    </>
  );
};

export default Card;
