import { shallow } from "enzyme";

import CardList, { CardListProps } from "./card-list.component";

const mockMonsters: CardListProps = {
  monsters: [
    { id: 1, name: "Test Monster 1", email: "monster1@gmail.com" },
    { id: 2, name: "Test Monster 2", email: "monster2@gmail.com" },
  ],
};
test("expect to render CardList component", () => {
  const comp = shallow(<CardList {...mockMonsters} />);
  console.log(comp);
  expect.assertions(1);
  expect(comp.length).toEqual(1);
});
