import React, { useEffect, useState } from "react";
import {
  ADD_BUTTON,
  DEVIDE_BUTTON,
  MULTIPLY_BUTTON,
  SUBSTRACTION_BUTTON,
} from "../App";

// for just testing
export const addFunc = (valOne, valTwo) => {
  return parseFloat((valOne + valTwo).toFixed(2));
};

export const subFunc = (valOne, valTwo) => {
  return parseFloat((valOne - valTwo).toFixed(2));
};

export const devFunc = (valOne, valTwo) => {
  return parseFloat((valOne / valTwo).toFixed(2));
};

export const mulFunc = (valOne, valTwo) => {
  return parseFloat((valOne * valTwo).toFixed(2));
};
// end - for just testing

const Calculations = ({ valOne, valTwo, clickedButton, isClicked }) => {
  const [totalValue, setTotalValue] = useState(0.0);

  useEffect(() => {
    const C_valOne = parseFloat(valOne);
    const C_valTwo = parseFloat(valTwo);

    if (clickedButton == ADD_BUTTON) {
      setTotalValue((C_valOne + C_valTwo).toFixed(2));
    } else if (clickedButton == SUBSTRACTION_BUTTON) {
      setTotalValue((C_valOne - C_valTwo).toFixed(2));
    } else if (clickedButton == DEVIDE_BUTTON) {
      setTotalValue((C_valOne / C_valTwo).toFixed(2));
    } else if (clickedButton == MULTIPLY_BUTTON) {
      setTotalValue((C_valOne * C_valTwo).toFixed(2));
    }
  }, [isClicked]);

  return (
    <div>
      <div data-testid="calc-1" style={{ fontSize: 22 }}>
        <label>Total :- </label>
        <label style={{ fontWeight: "bold" }} data-testid = 'totalValue'> {totalValue}</label>
      </div>
    </div>
  );
};

export default Calculations;
