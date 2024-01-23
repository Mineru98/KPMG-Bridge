"use client";
import { useCallback } from "react";
import { useCounterStore } from "@/stores";
import BaseLayout from "@/components/base";

export default function ChatPage(): JSX.Element {
  const { count, increase, decrease } = useCounterStore((state) => state);

  const increaseHandler = useCallback(() => {
    increase();
  }, [increase]);

  const decreaseHandler = useCallback(() => {
    decrease();
  }, [decrease]);

  return (
    <BaseLayout>
      <div className="flex flex-row items-center justify-center w-[256px] text-lg">
        <button
          className="bg-slate-400 w-8 rounded-md"
          type="button"
          onClick={decreaseHandler}
        >
          -
        </button>
        <div className="px-4">{count}</div>
        <button
          className="bg-slate-400 w-8 rounded-md"
          type="button"
          onClick={increaseHandler}
        >
          +
        </button>
      </div>
    </BaseLayout>
  );
}
