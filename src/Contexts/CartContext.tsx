import { createContext, useState, ReactNode } from "react"
import { Coffee } from "../pages/components/CoffeeCard";

export interface CartItems extends Coffee {
  quantity: number;
}

interface CartContentType {
  cartItems: CartItems[];
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContentType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItems[]>([])

  function addCoffeeToCart(coffee: CartItem) {
    const coffeeAlreadyExistInCart = cartItems.findIndex(cartItem => cartItem.id === coffee.id)
  }

  return(
    <CartContext.Provider value={{ cartItems }}>
      {children}
  </CartContext.Provider>
  )
}