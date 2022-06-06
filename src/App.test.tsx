/*
Samuel PLANCHON William BERNHARD
SPDX-License-Identifier: Apache-2.0
*/
import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("Checks text (amazon test)", () => {
  render(<App />);
  const linkElement = screen.getAllByText(/Amazon/i);
  expect(linkElement.length).toBeGreaterThan(0);
});
