import reducers, { initialState, requestMonster, actions } from "../reducers";
import * as types from "../types";

describe("Reducer Tests", () => {
  test("should return the initial state", () => {
    expect(reducers(undefined, { type: undefined })).toEqual(initialState);
  });
  test("should set the search text", () => {
    const expectedState: types.State = {
      ...initialState,
      search: "test search",
    };
    const setSearch = actions.setSearch("test search");
    expect(reducers(initialState, setSearch)).toEqual(expectedState);
  });
});
