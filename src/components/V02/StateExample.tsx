import { useState } from "react";

export default function StateExample(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);

  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <div className="mb-5 absolute top-0 mt-10">
        <h1 className="font-bold text-5xl uppercase ">El estado</h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-3xl font-semibold">
          El valor del contador es: {counter}
        </p>
        <button
          onClick={(): void => {
            setCounter((prev: number): number => prev + 1);
            console.log(counter);
          }}
          className="bg-blue-500 w-10 h-10 rounded-xl font-bold"
        >
          +
        </button>
      </div>
    </div>
  );
}
