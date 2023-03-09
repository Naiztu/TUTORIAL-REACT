import { useState } from "react";
import ListNotes from "./ListNotes";
import { notesState } from "../../atoms/notes";
import { useSetRecoilState, useRecoilState } from "recoil";

export default function StateRecoil() {
  const [inputNote, setInputNote] = useState<string>("");

  //   const [notes, setNotes] = useRecoilState(notesState);

  const setNotes = useSetRecoilState(notesState);

  const handleClick = (): void => {
    setNotes((prev) => [...prev, inputNote]);
    console.log(inputNote);
    setInputNote("");
  };
  
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <div className="mb-5 absolute top-0 mt-10">
        <h1 className="font-bold text-5xl uppercase ">El estado con Recoil</h1>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className=" flex item-center space-x-3">
          <label className="text-3xl font-semibold" htmlFor="">
            Nueva nota:
          </label>
          <input
            type="text"
            className="px-4 border-2 py-2 border-blue-200 rounded-xl"
            value={inputNote}
            onChange={(e) => {
              setInputNote(e.target.value);
            }}
          />
        </div>
        <button
          onClick={handleClick}
          className="my-10 bg-blue-400 px-4 py-1  rounded-2xl font-bold"
        >
          Agregar nota
        </button>
        <ListNotes />
      </div>
    </div>
  );
}
