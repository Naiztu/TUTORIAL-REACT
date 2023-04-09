export function sum(a: number, b: number) {
  return a + b;
}

export function estaAprobado(nota: number) {
  if (nota > 100 || nota < 0) return null;
  return nota >= 70;
}

export default function ExampleV09() {
  return (
    <div>
      <h1>Example V09</h1>
    </div>
  );
}
