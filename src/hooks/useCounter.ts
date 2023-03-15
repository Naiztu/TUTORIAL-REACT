import { useState } from "react";

export interface ICounter {
  counter?: number;
  increment?: VoidFunction;
  decrement?: VoidFunction;
}

interface ICounterProps {
  initialCounter?: number;
  step?: number;
}

const useCounter: Function = ({
  initialCounter = 0,
  step = 1,
}: ICounterProps): ICounter => {
  const [counter, setCounter] = useState<number>(initialCounter);

  const increment = () => {
    setCounter((prevCounter) => prevCounter + step);
  };

  const decrement = () => {
    setCounter((prevCounter) => prevCounter - step);
  };

  return { counter, increment, decrement };
};

export default useCounter;
