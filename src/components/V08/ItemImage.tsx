export interface ItemImageProps {
  image?: string;
  name?: string;
}

export default function ItemImage({ image, name }: ItemImageProps) {
  return (
    <div className="col-span-1">
      <img src={image} alt="image" />
    </div>
  );
}
