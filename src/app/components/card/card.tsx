import Image from "next/image";

interface ProductCard {
  id: number;
  title: string;
  price: number;
  rating: number;
  thumbnail: string;
}

export default function ProductCard({
  id,
  title,
  price,
  rating,
  thumbnail,
}: ProductCard) {
  return (
    <div className="w-1/5 mx-2 my-6">
      <div>
        <Image src={thumbnail} alt="product image" width={342} height={417} />
      </div>
      <div>{title}</div>
      <div>${price}</div>
      <div>Rating: {rating}</div>
    </div>
  );
}
