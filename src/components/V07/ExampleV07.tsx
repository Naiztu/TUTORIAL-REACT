import { useState } from "react";
import ExmapleImage from "./ExampleImage";

export default function ExampleV07() {
  const [showImage, setShowImage] = useState<boolean>(true);

  return (
    <div className="flex flex-col items-center justify-center bg-gray-500 w-full min-h-screen">
      <div className="font-bold  text-6xl mb-5">UseEffect</div>
      <div>{showImage && <ExmapleImage />}</div>
      <button
        className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded text-xl mt-5"
        onClick={() => setShowImage(!showImage)}
      >
        Cambiar boolean
      </button>
    </div>
  );
}
