import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "./redux/root-hook";
import { selectState, requestMonster } from "./redux/reducers";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

const App = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector(selectState);
  const { request } = state;

  useEffect(() => {
    if (request.status !== "pending") return;
    const url = "https://jsonplaceholder.typicode.com/users";
    dispatch(requestMonster(url));
  }, [dispatch, request.status]);

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox />
      <CardList />
    </div>
  );
};

export default App;
