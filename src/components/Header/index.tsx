import { HeaderButton, HeaderButtonContainer, HeaderContainer } from "./styles"
import Logo from "../../assets/Logo.svg"
import { MapPin, ShoppingCart } from "phosphor-react"
import { NavLink } from "react-router-dom"
import useCart from "../../Hooks/useCart"

function Header() {
  const { cartQuantity } = useCart()

  return(
    <HeaderContainer>
      <div>
        <NavLink to="/">
          <img src={Logo} />
        </NavLink>
        
        <HeaderButtonContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill"/>
            Recife, Pe
          </HeaderButton>
          <NavLink to="/completeOrder">
            <HeaderButton variant="yellow">
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart size={20} weight="fill" />
            </HeaderButton>
          </NavLink>
        </HeaderButtonContainer>
      </div>
    </HeaderContainer>
  )
}

export default Header