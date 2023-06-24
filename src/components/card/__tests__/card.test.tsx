import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Monster } from "../../../redux/types";

import Card from "../card.component";

const cardProps: Monster = {
  id: 1,
  name: "Test Monster",
  email: "whatever@gmail.com",
};

describe("card tests", () => {
  test("should have text 'Test Monster' in card component", () => {
    render(<Card monster={cardProps} />);
    const cardElement = screen.getByTestId("card-component");
    expect(cardElement).toBeInTheDocument();
    expect(cardElement).toHaveTextContent("Test Monster");
  });
});
