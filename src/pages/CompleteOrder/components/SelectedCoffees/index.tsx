import useCart from "../../../../Hooks/useCart"
import { TitleText } from "../../../../components/Typograph"
import CoffeeCartCard from "../CoffeeCartCard"
import ConfirmationSection from "./ConfirmationSection"
import { DetailsContainer, SelectedCoffeesContainer } from "./styles"

function SelectedCoffees() {
  const { cartItems } = useCart();

  return(
    <SelectedCoffeesContainer>
      <TitleText size="xs" color="subtitle">
        Cafés selecionados
      </TitleText>

      <DetailsContainer>
        {cartItems.map(item => (
          <CoffeeCartCard key={item.id} coffee={item}/>
        ))}
        <ConfirmationSection />
      </DetailsContainer>
    </SelectedCoffeesContainer>
  )
}

export default SelectedCoffees