import { atom } from "recoil";

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const logInStatusState = atom({
  key: "logInStatus",
  default: false,
});

export const TodayState = atom({
  key: "TodayState",
  default: false,
});

export const PointState = atom({
  key: "PointState",
  default: false,
});

export const isEditState = atom({
  key: "isEditState",
  default: false,
});
