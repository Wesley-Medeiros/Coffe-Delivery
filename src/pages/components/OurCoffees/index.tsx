import { coffees } from "../../../Data/Coffee"
import { TitleText } from "../../../components/Typograph"
import CoffeeCard from "../CoffeeCard"
import { CoffeeList, OurCoffeesContainer } from "./styles"

function OurCoffees() {
  return(
    <OurCoffeesContainer className="container">
      <TitleText size="l" color="subtitle">
        Nossos cafés
      </TitleText>
      <CoffeeList>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee}/> 
        ))}
      </CoffeeList>
    </OurCoffeesContainer>
  )
}

export default OurCoffees