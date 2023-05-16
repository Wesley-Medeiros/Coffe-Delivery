import { TitleText } from "../../../../components/Typograph"
import { DetailsContainer, SelectedCoffeesContainer } from "./styles"

function SelectedCoffees() {
  return(
    <SelectedCoffeesContainer>
      <TitleText size="xs" color="subtitle">
        Cafés selecionados
      </TitleText>

      <DetailsContainer>
        <p>Itens</p>
      </DetailsContainer>
    </SelectedCoffeesContainer>
  )
}

export default SelectedCoffees