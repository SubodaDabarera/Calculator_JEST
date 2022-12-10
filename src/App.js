import "./App.css";
import { useState } from "react";
import Calculations from "./pages/Calculations";

export const ADD_BUTTON = "add";
export const SUBSTRACTION_BUTTON = "substraction";
export const DEVIDE_BUTTON = "devide";
export const MULTIPLY_BUTTON = "multiply";

function App() {
  const [valOne, setValOne] = useState(0);
  const [valTwo, setValTwo] = useState(0);
  const [isCalculateClick, setIsCalculateClick] = useState(false);
  const [clickedButton, setClickedButton] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="App">
      <div style={{ padding: "2rem" }}>
        <div style={{ padding: "1rem" }}>
          <input
            type="number"
            onChange={(e) => setValOne(e.target.value)}
            placeholder="Input value one..."
            style={{
              padding: "0.4rem",
              borderRadius: 10,
              border: "1px solid gray",
            }}
            data-testid="valOneInput"
          />
          <br></br>
          <input
            type="number"
            onChange={(e) => setValTwo(e.target.value)}
            placeholder="Input value two..."
            style={{
              marginTop: "0.5rem",
              padding: "0.4rem",
              borderRadius: 10,
              border: "1px solid gray",
            }}
            data-testid="valTwoInput"
          />
        </div>
        <div style={{ alignItems: "center" }}>
          <div>
            <button
              name="add"
              onClick={() => {
                setIsCalculateClick(true);
                setClickedButton(ADD_BUTTON);
                setIsClicked(!isClicked);
              }}
              style={{
                padding: "10px",
                paddingLeft: "16px",
                paddingRight: "16px",
                border: "none",
                borderRadius: "4px",
                color: "#3a6ee8",
                fontSize: 20,
                marginRight: 4,
              }}
            >
              +
            </button>
            <button
              name="substraction"
              onClick={() => {
                setIsCalculateClick(true);
                setClickedButton(SUBSTRACTION_BUTTON);
                setIsClicked(!isClicked);
              }}
              style={{
                padding: "10px",
                paddingLeft: "16px",
                paddingRight: "16px",
                border: "none",
                borderRadius: "4px",
                color: "#3a6ee8",
                fontSize: 20,
                marginRight: 4,
              }}
            >
              -
            </button>
            <button
              name="devide"
              onClick={() => {
                setIsCalculateClick(true);
                setClickedButton(DEVIDE_BUTTON);
                setIsClicked(!isClicked);
              }}
              style={{
                padding: "10px",
                paddingLeft: "16px",
                paddingRight: "16px",
                border: "none",
                borderRadius: "4px",
                color: "#3a6ee8",
                fontSize: 20,
                marginRight: 4,
              }}
            >
              /
            </button>
            <button
              name="multiply"
              onClick={() => {
                setIsCalculateClick(true);
                setClickedButton(MULTIPLY_BUTTON);
                setIsClicked(!isClicked);
              }}
              style={{
                padding: "10px",
                paddingLeft: "16px",
                paddingRight: "16px",
                border: "none",
                borderRadius: "4px",
                color: "#3a6ee8",
                fontSize: 20,
              }}
            >
              *
            </button>
          </div>
        </div>
        {isCalculateClick && (
          <div style={{ marginTop: "20px" }}>
            <Calculations
              valOne={valOne}
              valTwo={valTwo}
              clickedButton={clickedButton}
              isClicked={isClicked}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
