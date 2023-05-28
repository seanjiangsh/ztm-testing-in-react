import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { renderWithProviders } from "./utils/utils-for-tests";
import App from "./App";

import * as types from "./redux/types";

test("should have 'Leanne Graham' card in App", () => {
  const state: types.State = {
    request: { status: "fulfilled" },
    monsters: [{ id: 1, name: "Leanne Graham", email: "Sincere@april.biz" }],
    search: "",
  };
  const preloadedState = { root: state };
  renderWithProviders(<App />, { preloadedState });

  const cardElement = screen.getByText(/Leanne Graham/i);
  expect(cardElement).toBeInTheDocument();
});
