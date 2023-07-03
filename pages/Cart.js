import { Link } from "@mui/material";
import CartProduct from "../components/CartProduct";
import useCartStore from "../store/cartStore";
import { useEffect, useState } from "react";

const Cart = () => {
  const cartItems = useCartStore((state) => state.cartItems);
  const [totalCost, setTotalCost] = useState(0);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
    const findTotal = () => {
      let cost = 0;
      cartItems.forEach((item) => {
        cost = cost + item.price;
      });
      setTotalCost(cost);
    };
    findTotal();
  }, [cartItems]);
  if (!hydrated) {
    return null;
  }

  return (
    <div className="flex flex-col gap-4 m-10  h-screen">
      <div className="flex  flex-row h-3/4 ">
        <div className="flex-1 w-1/2 sm:px-6">
          <div className="flex items-start justify-between">
            <h2
              className="text-lg font-medium text-gray-900"
              id="slide-over-title"
            >
              Shopping cart
            </h2>
          </div>

          <div className="overflow-auto h-3/4 divide-y divide-gray-300 ">
            {cartItems.map((cartItem) => {
              return <CartProduct data={cartItem} key={cartItem.title} />;
            })}
            {cartItems.length == 0 ? <p className="mt-12">Empty Cart !!</p> : <></>}
          </div>
          
        </div>

        <div className="w-1/2  sm:px-6">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>$ {totalCost}</p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">
            Shipping and taxes calculated at checkout.
          </p>
          <div className="mt-6">
            <a
              href="#"
              className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              Checkout
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-center text-sm text-gray-500">
          <Link
            href="/"
            type="button"
            className="font-medium text-indigo-600 hover:text-indigo-500 decoration-transparent"
          >
            Continue Shopping
            <span aria-hidden="true"> &rarr;</span>
          </Link>
      </div>
    </div>
  );
};

export default Cart;
