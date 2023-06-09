import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";

function useCart() {
  const context = useContext(CartContext)
  return context;
}

export default useCart