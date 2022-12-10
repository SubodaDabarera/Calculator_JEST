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

const sampleData = {
  valOne: 10,
  valTwo: 12,
  clickedButton: "add",
  isClicked: false,
};

// checking the add method
it("should display totalValue as 22 bacause we adding values", () => {
  render(
    <Calculations
      valOne={sampleData.valOne}
      valTwo={sampleData.valTwo}
      clickedButton={sampleData.clickedButton}
      isClicked={sampleData.isClicked}
    />
  );

  expect(screen.getByTestId("totalValue")).toHaveTextContent("22");
});

// checking the substraction method
it("should display totalValue as -2 bacause we substracting values", () => {
  render(
    <Calculations
      valOne={sampleData.valOne}
      valTwo={sampleData.valTwo}
      clickedButton={"substraction"}
      isClicked={sampleData.isClicked}
    />
  );

  expect(screen.getByTestId("totalValue")).toHaveTextContent("-2");
});

// checking the devide method
it("should display totalValue as 0.83 bacause we devide values", () => {
  render(
    <Calculations
      valOne={sampleData.valOne}
      valTwo={sampleData.valTwo}
      clickedButton={"devide"}
      isClicked={sampleData.isClicked}
    />
  );

  expect(screen.getByTestId("totalValue")).toHaveTextContent("0.83");
});

// checking the multiplication method
it("should display totalValue as 120 bacause we multiply values", () => {
  render(
    <Calculations
      valOne={sampleData.valOne}
      valTwo={sampleData.valTwo}
      clickedButton={"multiply"}
      isClicked={sampleData.isClicked}
    />
  );

  expect(screen.getByTestId("totalValue")).toHaveTextContent("120.00");
});

test("calculation testing", () => {
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
