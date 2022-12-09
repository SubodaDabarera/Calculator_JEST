import { render, screen, cleanup } from "@testing-library/react";
import Calculations, {
  addFunc,
  devFunc,
  mulFunc,
  subFunc,
} from "../Calculations";

afterEach(() => {
  cleanup();
});

test("calculation testing", () => {
  const sampleData = {
    valOne: 20,
    valTwo: 10,
    clickedButton: "add1",
    isClicked: false,
  };
  render(
    <Calculations
      valOne={sampleData.valOne}
      valTwo={sampleData.valTwo}
      clickedButton={sampleData.clickedButton}
      isClicked={sampleData.isClicked}
    />
  );
  const calculationElement = screen.getByTestId("calc-1");
  expect(calculationElement).toBeInTheDocument();
  expect(calculationElement).toHaveTextContent("Total");
});

const valOne = 10;
const valTwo = 12;

// check the additions thourght the function
test("add two numbers", () => {
  expect(addFunc(valOne, valTwo)).toBe(22.0);
});
// check the substraction thourght the function
test("substract two numbers", () => {
  expect(subFunc(valOne, valTwo)).toBe(-2);
});
// check the devition thourght the function
test("devide two numbers", () => {
  expect(devFunc(valOne, valTwo)).toBe(0.83);
});
// check the multiplication thourght the function
test("multiply two numbers", () => {
  expect(mulFunc(valOne, valTwo)).toBe(120);
});
