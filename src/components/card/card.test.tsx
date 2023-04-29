import { shallow } from "enzyme";

import Card, { CardProps } from "./card.component";

const cardProps: CardProps = {
  monster: {
    id: "testMonster",
    name: "Test Monster",
    email: "whatever@gmail.com",
  },
};
test("expect to render Card component", () => {
  const comp = shallow(<Card {...cardProps} />);
  expect(comp.length).toEqual(1);
});
