import { Home, ShoppingCart } from "@mui/icons-material";
import { Link } from "@mui/material";
import { usePathname } from "next/navigation";
import useCartStore from "../store/cartStore";
import { useEffect, useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const cartItems = useCartStore((state) => state.cartItems);
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }
  

  return (
    <nav className="bg-black p-4 flex flex-row justify-between text-white">
      <p className="text-white font-mono text-xl">Shopping Cart</p>
      <Link
        className="hover:cursor-pointer mr-10 flex flexrow gap-4"
        href={pathname == "/" ? "/Cart" : "/"}
      >
        {pathname == "/" ? (
          <>
            <p className="text-white">{cartItems.length}</p>
            <ShoppingCart
              sx={{ color: "#fff" }}
              fontSize="medium"
              className=""
              color="inherit"
            />
          </>
        ) : (
          <Home
            sx={{ color: "#fff" }}
            fontSize="medium"
            className=""
            color="inherit"
          />
        )}
      </Link>
    </nav>
  );
};

export default Navbar;
