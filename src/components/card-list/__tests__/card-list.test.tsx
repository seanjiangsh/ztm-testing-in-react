import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { renderWithProviders } from "../../../utils/utils-for-tests";
import CardList from "../card-list.component";

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

describe("CardList tests", () => {
  test("should have 5 cards in App", () => {
    const preloadedState = { root: mockState };
    renderWithProviders(<CardList />, { preloadedState });

    const cards = screen.queryAllByTestId("card-component");
    expect(cards).toHaveLength(5);
  });

  test("should have 'Clementine Bauch' card in App", () => {
    const preloadedState = { root: mockState };
    renderWithProviders(<CardList />, { preloadedState });

    const cardElement = screen.getByText(/Clementine Bauch/i);
    expect(cardElement).toBeInTheDocument();
  });
});
