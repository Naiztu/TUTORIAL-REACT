interface SquarePros{
    _number?: number;
    _handleClick?: () => void;
}

export default function Square({_number, _handleClick}: SquarePros): JSX.Element {
  return (
    <div className=" bg-blue-400 w-60 aspect-square  flex items-center justify-center border-2 border-black" onClick={_handleClick}>
      <p className="text-4xl font-bold ">{_number}</p>
    </div>
  );
}
