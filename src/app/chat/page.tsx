"use client";
import { useCallback } from "react";
import { useCounterStore } from "@/stores";

export default function ChatPage() {
  const { count, increase, decrease } = useCounterStore((state) => state);

  const increaseHandler = useCallback(() => {
    increase();
  }, [increase]);

  const decreaseHandler = useCallback(() => {
    decrease();
  }, [decrease]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
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
    </main>
  );
}
