import { atom } from "recoil";

export const visitedPageState = atom({
  key: "visitedPageState",
  default: "/",
});

export const indexNum = atom({
  key: "index",
  default: 0,
});
