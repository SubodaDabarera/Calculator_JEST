import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

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
