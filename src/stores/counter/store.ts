import { produce } from "immer";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import CounterStore from "./types";

const store = (set: any) => ({
  count: 0,
  increase: (interval: number = 1) =>
    set(
      produce((state: CounterStore) => {
        state.count = state.count + interval;
      })
    ),
  decrease: (interval: number = 1) =>
    set(
      produce((state: CounterStore) => {
        state.count = state.count - interval;
      })
    ),
  setCount: (count: number) => set({ count }),
});

const useCounterStore = create(
  process.env.NODE_ENV !== "production" ? devtools<CounterStore>(store) : store
);

export default useCounterStore;
