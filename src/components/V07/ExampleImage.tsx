import { useEffect, useState } from "react";

export default function ExmapleImage() {
  const [count, setCount] = useState<number>(0);
  const [count2, setCount2] = useState<number>(0);

  useEffect(() => {
    console.log("Se actualizo el componente dependiendo un estado");
  }, [count]);

  useEffect(() => {
    console.log("Se actualizo el componente");
  });

  useEffect(() => {
    console.log("Se montó el componente");

    return () => {
      console.log("Se desmontó el componente");
    };
  }, []);

  return (
    <div>
      <img
        className="w-96 aspect-square object-cover"
        src="https://t2.ea.ltmcdn.com/es/posts/7/4/3/como_ayudar_a_un_gatito_a_defecar_20347_orig.jpg"
        alt="Example"
        onClick={() => setCount(count + 1)}
      />
      <img
        className="w-96 aspect-square object-cover"
        src="https://images.hola.com/imagenes/mascotas/20201104178485/consejos-gatos-para-principiantes/0-884-859/gatito-m.jpg"
        alt="Example"
        onClick={() => setCount2(count2 + 1)}
      />
    </div>
  );
}
