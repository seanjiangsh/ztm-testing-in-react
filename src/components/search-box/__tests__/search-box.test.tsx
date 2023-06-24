import { screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { renderWithProviders } from "../../../utils/utils-for-tests";
import SearchBox from "../search-box.component";

import * as types from "../../../redux/types";

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

describe("SearchBox tests", () => {
  test("should change search state by texts in SearchBox", () => {
    const preloadedState = { root: mockState };
    const { store } = renderWithProviders(<SearchBox />, { preloadedState });
    const searchId = "monsters-search-box-input";
    const searchInput: HTMLInputElement = screen.getByTestId(searchId);
    fireEvent.change(searchInput, { target: { value: "le" } });
    const state = store.getState();
    expect(searchInput.value).toBe("le");
    expect(state.root.search).toBe("le");
  });
});
