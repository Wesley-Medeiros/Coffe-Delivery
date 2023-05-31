import { createContext, useState, ReactNode } from "react"
import { Coffee } from "../pages/components/CoffeeCard";
import { produce } from "immer"

export interface CartItem extends Coffee {
  quantity: number;
}

interface CartContentType {
  cartItems: CartItem[];
  addCoffeeToCart: (coffee: CartItem) => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContentType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function addCoffeeToCart(coffee: CartItem) {
    const coffeeAlreadyExistInCart = cartItems.findIndex(cartItem => cartItem.id === coffee.id);

    const newCart = produce(cartItems, (draft) => {
      if(coffeeAlreadyExistInCart < 0) {
        draft.push(coffee)
      } else {
        draft[coffeeAlreadyExistInCart].quantity += coffee.quantity;
      }
    })

    setCartItems(newCart)
  }

  console.log(cartItems)

  return(
    <CartContext.Provider value={{ cartItems, addCoffeeToCart }}>
      {children}
  </CartContext.Provider>
  )
}