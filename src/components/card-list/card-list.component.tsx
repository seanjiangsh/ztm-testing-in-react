import { useAppSelector } from "../../redux/root-hook";
import { selectState } from "../../redux/reducers";

import Card from "../card/card.component";
import "./card-list.styles.css";

const CardList = () => {
  const state = useAppSelector(selectState);
  const { monsters, search } = state;
  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLocaleLowerCase().includes(search)
  );

  return (
    <div className="card-list">
      {filteredMonsters.map((monster) => {
        return <Card key={monster.id} monster={monster} />;
      })}
    </div>
  );
};

export default CardList;
