import { ChangeEvent } from "react";

import { useAppDispatch } from "../../redux/root-hook";
import { actions } from "../../redux/reducers";

import "./search-box.styles.css";

const { setSearch } = actions;

const SearchBox = () => {
  const dispatch = useAppDispatch();

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    dispatch(setSearch(searchFieldString));
  };

  return (
    <input
      className="search-box"
      data-testid="monsters-search-box-input"
      type="search"
      placeholder="search monsters"
      onChange={onSearchChange}
    />
  );
};

export default SearchBox;
