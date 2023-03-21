import useAxios, { IuseAxiosResponse } from "../../hooks/useAxios";
import ItemImage from "./ItemImage";

export default function ExampleV08() {
  const { data, error, loading }: IuseAxiosResponse = useAxios({
    url: "https://rickandmortyapi.com/api/character",
  });

  if (loading) return <div className="grid grid-cols-3">Loading...</div>;

  if (error) return <div className="grid grid-cols-3">Error...</div>;

  return (
    <div className="grid grid-cols-3">
      {data?.results.map((item: any) => (
        <ItemImage image={item.image} name={item.name} />
      ))}
    </div>
  );
}
