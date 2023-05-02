import { HeaderButton, HeaderButtonContainer, HeaderContainer } from "./styles"
import Logo from "../../assets/Logo.svg"
import { MapPin, ShoppingCart } from "phosphor-react"

function Header() {
  return(
    <HeaderContainer>
      <div>
        <img src={Logo} />
        
        <HeaderButtonContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill"/>
            Recife, Pe
          </HeaderButton>
          <HeaderButton variant="yellow"><ShoppingCart size={20} weight="fill" />
          </HeaderButton>
        </HeaderButtonContainer>
      </div>
    </HeaderContainer>
  )
}

export default Header