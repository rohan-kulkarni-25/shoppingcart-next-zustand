import useCartStore from "../store/cartStore";
import useProductStore from "../store/store";
import ProductCard from "./ProductCard";

const ProductsList = () => {
  const products = useProductStore((state) => state.products);
  const cart = useCartStore((state) => state.cartItems);
  console.log(cart);
  return (
    <div className="flex flex-row flex-wrap gap-2 justify-evenly">
      {products.map((product) => {
        return <ProductCard key={product.title} data={product} />;
      })}
    </div>
  );
};

export default ProductsList;
