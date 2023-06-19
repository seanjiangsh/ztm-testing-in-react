import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

import { RootState } from "./root-store";

import * as types from "./types";

const initState: types.State = {
  request: { status: "pending" },
  monsters: [],
  search: "",
};
const initialState = structuredClone(initState);

const setMonsters = (
  state: types.State,
  action: PayloadAction<types.Monster[]>
) => {
  state.monsters = action.payload;
};
const setSearch = (state: types.State, action: PayloadAction<string>) => {
  state.search = action.payload;
};
const requestMonster = createAsyncThunk<Array<types.Monster>, string>(
  "root/request",
  async (url: string, { getState }) => {
    const response = await fetch(url);
    if (!response.ok) throw new Error("request monster data failed");
    return await response.json();
  }
);
const extraReducers = (builder: ActionReducerMapBuilder<types.State>) => {
  builder
    .addCase(requestMonster.pending, (state) => {
      state.request.status = "pending";
    })
    .addCase(requestMonster.rejected, (state) => {
      state.request.status = "rejected";
    })
    .addCase(requestMonster.fulfilled, (state, action) => {
      state.request.status = "fulfilled";
      state.monsters = action.payload;
    });
};

const reducers = { setMonsters, setSearch };

const slice = createSlice({
  name: "root",
  initialState,
  reducers,
  extraReducers,
});

export const selectState = (state: RootState) => state.root;
export { initialState, requestMonster };
export const { actions } = slice;
export default slice.reducer;
