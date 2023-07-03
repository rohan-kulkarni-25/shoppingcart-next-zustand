import useCartStore from "../store/cartStore";

const CartProduct = ({ data }) => {
  const removeItem = useCartStore((state) => state.removeItem);
  return (
    <div className="ml-4 flex flex-1 flex-col p-4 bg-blue-100 m-4 rounded-xl">
      <div>
        <div className="flex justify-between text-base font-medium text-gray-900">
          <h3>
            <a href="#">{data.title}</a>
          </h3>
          <p className="ml-4">$ {data.price}</p>
        </div>
      </div>
      <div className="flex flex-1 items-end justify-between text-sm">
        <p className="text-gray-500">Qty {data.quantity}</p>

        <div className="flex">
          <button
            onClick={() => removeItem(data)}
            type="button"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
