import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { shallow } from "enzyme";

import App from "./App";

test("renders 'Monsters Rolodex' in App", () => {
  render(<App />);
  const linkElement = screen.getByText(/Monsters Rolodex/i);
  expect(linkElement).toBeInTheDocument();
});

test("expect 'Monsters Rolodex' in App title", () => {
  expect.assertions(2);
  const app = shallow(<App />);
  const title = app.find(".app-title");
  expect(title).toHaveLength(1);
  expect(title.text()).toEqual("Monsters Rolodex");
});
