type CounterStore = {
  count: number;
  increase: (interval?: number) => void;
  decrease: (interval?: number) => void;
  setCount: (count: number) => void;
};

export default CounterStore;
