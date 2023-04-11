import { useState } from "react";

export default function ExampleV10() {
    const [color, setColor] = useState("red")

    const handleClick = () => {
        setColor("blue")
    }

  return (
    <div>
      <h1>Example V10</h1>
      <article title="articulo 1" className={` bg-[${color}]`}>
        <h2>Article</h2>
        <p>Article content</p>
      </article>
        <button onClick={handleClick}>Cambiar color</button>
      <article>
        <h2>Article</h2>
        <p>Article content</p>
      </article>
    </div>
  );
}
