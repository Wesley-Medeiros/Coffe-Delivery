import { RegularText, TitleText } from "../../components/Typograph"
import { OrderConfirmedContainer, OrderDatailsContainer } from "./styles"
import OrderConfirmedImg from "../../assets/ConfirmedOrder.svg"
import InfoWithIcon from "../../components/InfoWithIcon"
import { MapPin, Clock, CurrencyDollar } from "phosphor-react"
import { useTheme } from "styled-components"

function OrderConfirmed() {
  const { colors } = useTheme();

  return(
    <OrderConfirmedContainer className="container">
      <div>
        <TitleText size="l">Uhu! Pedido confirmado</TitleText>
        <RegularText size="l" className="subtitle">Agora é só aguardar que logo o café chegará até você</RegularText>
      </div>

      <section>
      <OrderDatailsContainer>
        <InfoWithIcon 
          icon={<MapPin weight="fill"/>}
          iconBg={colors["brand-purple"]}
          text={
            <RegularText>
              Entrega em <strong>Avenida Ulisses Montarroyos, 5034</strong>
              <br />
              Candeias - Pernambuco, NE
            </RegularText>
          }
        />

        <InfoWithIcon 
          icon={<Clock weight="fill"/>}
          iconBg={colors["brand-yellow"]}
          text={
            <RegularText>
              Prevsão de entrega
              <br />
              <strong>20 min - 30 min</strong>
            </RegularText>
          }
        />

        <InfoWithIcon 
          icon={<CurrencyDollar weight="fill"/>}
          iconBg={colors["brand-yellow-dark"]}
          text={
            <RegularText>
              Pagamento na entegra
              <br />
              <strong>Cartão de crédito</strong>
            </RegularText>
          }
        />
      </OrderDatailsContainer>

        <img src={OrderConfirmedImg} />
      </section>
        
    </OrderConfirmedContainer>
  )
}

export default OrderConfirmed