import { produce } from "immer";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import SettingStore from "./types";

const store = (set: any) => ({
  activeBar: "",
  setActiveBar: (val: string) =>
    set(
      produce((state: SettingStore) => {
        state.activeBar = val;
      })
    ),

  isOpen: true, // TODO: localstorage 연동해서 할 필요가 있음
  setIsOpen: (isOpen: boolean) =>
    set(
      produce((state: SettingStore) => {
        state.isOpen = isOpen;
      })
    ),
});

const useSettingStore = create(
  process.env.NODE_ENV !== "production" ? devtools<SettingStore>(store) : store
);

export default useSettingStore;
