import { IntroContainer, IntroContent, IntroTitle } from "./styles"
import  IntroImg  from "../../../assets/IntoImg.png"

function Intro() {
  return(
    <IntroContainer>
      <IntroContent className="container">
        <div>
          <section>
            <IntroTitle size="xl">
              Encontre o café perfeito para qualquer hora do dia
            </IntroTitle>
          </section>
        </div>

        <img src={IntroImg} />
      </IntroContent>
    </IntroContainer>
  )
}

export default Intro