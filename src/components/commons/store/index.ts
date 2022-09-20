import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

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

const { persistAtom } = recoilPersist();

export const TicketState = atom({
  key: "TicketState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
