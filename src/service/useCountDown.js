import { useState, useEffect } from "react";

export const useCountDown = (number) => {
  const [counter, setCounter] = useState(number);

  useEffect(() => {
    let interval = setInterval(() => {
      setCounter((counter) => counter - 1000);
    }, 1000);
    return () => clearInterval(interval);
  }, [counter]);

  const digitalZero = (value) => (value < 10 ? "0" + value : "" + value);

  const values = {
    hours: digitalZero(
      Math.floor((counter % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    ),
    minutes: digitalZero(
      Math.floor((counter % (1000 * 60 * 60)) / (1000 * 60))
    ),
    seconds: digitalZero(Math.floor((counter % (1000 * 60)) / 1000)),
  };

  if (counter < 0) {
    return <>"00:00:00"</>;
  } else {
    return (
      <>
        {values.hours}:{values.minutes}:{values.seconds}
      </>
    );
  }
};
