export type AsyncState = { status: "pending" | "rejected" | "fulfilled" };

export type Monster = {
  id: number;
  name: string;
  email: string;
};

export type State = {
  request: AsyncState;
  monsters: Array<Monster>;
  search: string;
};
