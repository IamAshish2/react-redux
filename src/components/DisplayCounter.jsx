import React from "react";
import { useSelector } from "react-redux";

const DisplayCounter = () => {
  /*
  // counter is the name of our slice
  const counterObj = useSelector((state) => state.counter);
  const counter = counterObj.counterVal;
*/
  const { counterVal } = useSelector((store) => store.counter);
  return <p className="lead mb-4">Counter current Value {counterVal}</p>;
};

export default DisplayCounter;
