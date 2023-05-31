import useCart from "../../../Hooks/useCart";
import QuantityInput from "../../../components/QuantityInput"
import { RegularText, TitleText } from "../../../components/Typograph"
import { formatMoney } from "../../../utils/FormatMoney";
import { AddCardWrapper, CardFooterContainer, CoffeeCardContainer, Description, Name, Tags } from "./styles"
import { ShoppingCart } from "phosphor-react"
import { useState } from "react"

export interface Coffee {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
}

interface CoffeeProps {
  coffee: Coffee;
}

function CoffeeCard({ coffee }: CoffeeProps) {
  const [quantity, setQuantity] = useState(0)

  function handleIncrease() {
    setQuantity(state => state + 1)
  }

  function handleDecrease() {
    setQuantity(state => state - 1)
  }

  const { addCoffeeToCart } = useCart()

  function handleAddToCart() {
    const coffeToAdd = {
      ...coffee,
      quantity
    }
    addCoffeeToCart(coffeToAdd)
  }

  const formattedPrice = formatMoney(coffee.price)

  return(
    <CoffeeCardContainer>
      <img src={`/Coffees/${coffee.photo}`} />

      <Tags>
        {coffee.tags.map( tag => (
          <span key={`${coffee.id}${tag}`}>{tag}</span>
        ))}
      </Tags>
      <Name>{coffee.name}</Name>
      <Description>{coffee.description}</Description>
      <CardFooterContainer>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">{formattedPrice}</TitleText>
        </div>
        <AddCardWrapper>
          <QuantityInput 
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />
          <button onClick={handleAddToCart}>
            <ShoppingCart weight="fill" size={22}/>
          </button>
        </AddCardWrapper>
      </CardFooterContainer>
    </CoffeeCardContainer>
  )
}

export default CoffeeCard