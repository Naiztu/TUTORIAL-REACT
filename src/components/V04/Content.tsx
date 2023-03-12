import Square from "../V01/Square";
import SquareTwo from "../V01/SquareTwo";

interface ContentProps {
  bool: boolean;
}

export default function Content({ bool }: ContentProps) {
  if (bool) return <Square />;
  //   azul

  return <SquareTwo />;
  //   rojo
}
