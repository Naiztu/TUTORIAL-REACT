import { useState } from "react";
import Square from "../V01/Square";
import Content from "./Content";
import Layout from "./Layout";

export default function ExampleV04() {
  const [bool, setBool] = useState(true);
  return (
    <>
      <Layout title="Prueba de titulo">
        <div className="flex flex-col space-x-10 mt-10">
          <div className="w-3/4 mx-auto">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Exercitationem quas deserunt voluptatibus facilis? Omnis doloribus
            sunt saepe fugit nemo ipsam, magni ex deleniti! Tenetur, earum in
            ipsa magnam sed nostrum!
          </div>

          <div className="mt-10 flex items-center justify-center">
            <Content bool={bool} />
          </div>

          <div className="mt-10 flex items-center justify-center">
            <button
              className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
              onClick={() => setBool(!bool)}
            >
              {bool ? "Cambiar a rojo" : "Cambiar a azul"}
            </button>
          </div>
        </div>
      </Layout>
    </>
  );
}
