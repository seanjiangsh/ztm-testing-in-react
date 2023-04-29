import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import App from "./App";

test("renders 'Monsters Rolodex' in App", () => {
  render(<App />);
  const linkElement = screen.getByText(/Monsters Rolodex/i);
  expect(linkElement).toBeInTheDocument();
});
