import { Rating } from "@mui/material";
import Image from "next/image";
import useStore from "../store/store";
import useCartStore from "../store/cartStore";

const ProductCard = ({ data }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="flex p-4 max-w-md bg-blue-100 shadow-lg rounded-lg overflow-hidden m-4">
      <Image width={200} height={0} src={data.thumbnail} alt="" />
      <div className="p-4 flex flex-col justify-center">
        <h1 className="text-gray-900 font-bold text-2xl">{data.title}</h1>
        <p className="mt-2 text-gray-600 text-sm">{data.description}</p>
        <div className="flex item-center mt-2">
          <Rating
            name="simple-controlled"
            value={data.rating}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </div>
        <div className="flex item-center justify-between mt-3 gap-4">
          <h1 className="text-gray-700 font-bold text-xl">$ {data.price}</h1>
          <button
            className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded"
            onClick={() => addToCart(data)}
          >
            Add to Card
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
