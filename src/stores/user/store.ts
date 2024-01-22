import { produce } from "immer";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import UserStore from "./types";

const store = (set: any) => ({
  isLogin: false,
  setIsLogin: (isLogin: boolean) =>
    set(
      produce((state: UserStore) => {
        state.isLogin = isLogin;
      })
    ),

  userName: "",
  setUserName: (userName: string) =>
    set(
      produce((state: UserStore) => {
        state.userName = userName;
      })
    ),

  passWord: "",
  setPassWord: (passWord: string) =>
    set(
      produce((state: UserStore) => {
        state.passWord = passWord;
      })
    ),
});

const useUserStore = create(
  process.env.NODE_ENV !== "production" ? devtools<UserStore>(store) : store
);

export default useUserStore;
