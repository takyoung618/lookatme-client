import { atom, selector } from "recoil";
import { getAccessToken } from "../libraries/getAccessToken";
import { recoilPersist } from "recoil-persist";

export const isEditState = atom({
  key: "isEditState",
  default: false,
});

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const userInfoState = atom({
  key: "userInfoState",
  default: {
    email: "",
    name: "",
  },
});

export const isLoadedState = atom({
  key: "isLoadedState",
  default: false,
});

export const restoreAccessTokenLoadable = selector({
  key: "restoreAccessTokenLoadable",
  get: async () => {
    const newAccessToken = await getAccessToken();
    return newAccessToken;
  },
});

export const logInStatusState = atom({
  key: "logInStatusState",
  default: false,
});

export const profileEditState = atom({
  key: "profileEditState",
  default: false,
});

export const pwdEditState = atom({
  key: "pwdEditState",
  default: false,
});

export const isExpertCommentEditState = atom({
  key: "isExpertCommentEditState",
  default: false,
});

export const isUserCommentEditState = atom({
  key: "isUserCommentEditState",
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

const { persistAtom } = recoilPersist();

export const TicketState = atom({
  key: "TicketState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
