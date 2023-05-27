import { useEffect, ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "./redux/root-hook";

import { selectState, requestMonster, rootActions } from "./redux/reducers";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

const { setSearch } = rootActions;

const App = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector(selectState);
  const { request, monsters, search } = state;
  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLocaleLowerCase().includes(search)
  );

  useEffect(() => {
    if (request.status !== "pending") return;
    const url = "https://jsonplaceholder.typicode.com/users";
    dispatch(requestMonster(url));
  }, [dispatch, request.status]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    dispatch(setSearch(searchFieldString));
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>

      <SearchBox
        className="monsters-search-box"
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
