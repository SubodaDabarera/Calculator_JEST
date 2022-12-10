import {
  cleanup,
  render,
  screen,
  queryByAttribute,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

const getById = queryByAttribute.bind(null, "id");

beforeEach(() => {
  render(<App />);
});

afterEach(() => {
  cleanup();
});

// checkin whether buttons are available or not
it("All buttons should be available", () => {
  expect(screen.getByRole("button", { name: "+" })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "-" })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "/" })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "*" })).toBeInTheDocument();
});

// checking the input fields
it("All number inputs", () => {
  expect(screen.getByTestId("valOneInput")).toBeInTheDocument();
  expect(screen.getByTestId("valTwoInput")).toBeInTheDocument();
});
