import QuantityInput from "../../../components/QuantityInput"
import { RegularText, TitleText } from "../../../components/Typograph"
import { AddCardWrapper, CardFooterContainer, CoffeeCardContainer, Description, Name, Tags } from "./styles"
import { ShoppingCart } from "phosphor-react"

function CoffeeCard() {
  return(
    <CoffeeCardContainer>
      <img src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1684713600&Signature=A-rWinlrDY3YHUFPZdnjSMiPAP0A2TC1BKGPr9gWOKFHdVYMGOctzWxbYkLNewn8lOSe~qnviAu26dLzzNQMOIHroQMFhw71h~vqCbFhkx1DyPUzlGQjgzdspufplOqKWU6qB9IJgoW5xL8yrKXAhOkKlB3RMaN9l1B79ZyeqzIVrfpqau--XzjYCQzSkIDzqsP9EFZw4g5I8MKXpQGFHcQr~Qyj4AZT1kYkraz5ztyYkqXdmzlDsGSszGmutPe7vWr9N3WVAqe6RfeAqOn3yq0HePW3Dbpj~X94eiJnt2u0WtoiV4rtTVlLfb4DenwOkB1HWWL151QYbGaP99oVIg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />

      <Tags>
        <span>Tradicional</span>
        <span>Com leite</span>
      </Tags>
      <Name>Expresso tradicional</Name>
      <Description>O tradicional café feito com água quente e grãos moídos</Description>
      <CardFooterContainer>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">9,90</TitleText>
        </div>
        <AddCardWrapper>
          <QuantityInput />
          <button>
            <ShoppingCart weight="fill" size={22}/>
          </button>
        </AddCardWrapper>
      </CardFooterContainer>
    </CoffeeCardContainer>
  )
}

export default CoffeeCard