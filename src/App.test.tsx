import { screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { renderWithProviders } from "./utils/utils-for-tests";
import App from "./App";

import * as types from "./redux/types";

describe("App tests", () => {
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
  test("should filtered to 3 cards remaining in App", () => {
    const mockState: types.State = {
      request: { status: "fulfilled" },
      monsters: [
        {
          id: 1,
          name: "Leanne Graham",
          email: "Sincere@april.biz",
        },
        {
          id: 2,
          name: "Ervin Howell",
          email: "Shanna@melissa.tv",
        },
        {
          id: 3,
          name: "Clementine Bauch",
          email: "Nathan@yesenia.net",
        },
        {
          id: 4,
          name: "Patricia Lebsack",
          email: "Julianne.OConner@kory.org",
        },
        {
          id: 5,
          name: "Chelsey Dietrich",
          email: "Lucio_Hettinger@annie.ca",
        },
      ],
      search: "",
    };
    const preloadedState = { root: mockState };
    const { store } = renderWithProviders(<App />, { preloadedState });
    const searchId = "monsters-search-box-input";
    const searchInput: HTMLInputElement = screen.getByTestId(searchId);
    fireEvent.change(searchInput, { target: { value: "le" } });
    const state = store.getState();
    expect(searchInput.value).toBe("le");
    expect(state.root.search).toBe("le");
    const cards = screen.queryAllByTestId("card-component");
    expect(cards).toHaveLength(3);
  });
});
