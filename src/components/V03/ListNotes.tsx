import { notesState } from "../../atoms/notes";
import { useRecoilValue } from "recoil";

export default function ListNotes() {
  const notes = useRecoilValue(notesState);
  return (
    <div>
      <h2 className="text-blue-900 font-bold text-xl mb-2"> --- Notas ---</h2>
      {notes.map((item: string, index: number) => (
        <ul key={index} className="">
          {item}
        </ul>
      ))}
    </div>
  );
}
