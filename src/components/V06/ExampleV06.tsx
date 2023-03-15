import { useState } from "react";
import useCounter, { ICounter } from "../../hooks/useCounter";

export default function ExampleV06() {
  const { counter, increment, decrement }: ICounter = useCounter({ step: 2 });

  const counter2: ICounter = useCounter({ initialCounter: 10 });

  return (
    <div className="flex flex-col items-center justify-center bg-gray-500 w-full min-h-screen">
      <div className="font-bold  text-9xl">{counter}</div>
      <div className="mt-5">
        <button
          onClick={increment}
          className="bg-gray-900 text-white text-xl px-4 py-1 rounded-xl font-bold mx-4"
        >
          +
        </button>
        <button
          onClick={decrement}
          className="bg-gray-900 text-white text-xl px-4 py-1 rounded-xl font-bold mx-4"
        >
          -
        </button>
      </div>
      <div className="font-bold  text-9xl">{counter2.counter}</div>
      <div className="mt-5">
        <button
          onClick={counter2.increment}
          className="bg-gray-900 text-white text-xl px-4 py-1 rounded-xl font-bold mx-4"
        >
          +
        </button>
        <button
          onClick={counter2.decrement}
          className="bg-gray-900 text-white text-xl px-4 py-1 rounded-xl font-bold mx-4"
        >
          -
        </button>
      </div>
    </div>
  );
}
