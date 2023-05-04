import { BenefitsContainer, IntroContainer, IntroContent, IntroTitle } from "./styles"
import  IntroImg  from "../../../assets/IntoImg.png"
import { RegularText } from "../Typograph"

function Intro() {
  return(
    <IntroContainer>
      <IntroContent className="container">
        <div>
          <section>
            <IntroTitle size="xl">
              Encontre o café perfeito para qualquer hora do dia
            </IntroTitle>
            <RegularText size="l" color="subtitle" as="h3">
              Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora.
            </RegularText>
          </section>
          <BenefitsContainer>
            <p>sexo</p>
            <p>sexo</p>
            <p>sexo</p>
            <p>sexo</p>
          </BenefitsContainer>
        </div>

        <img src={IntroImg} />
      </IntroContent>
    </IntroContainer>
  )
}

export default Intro