/* eslint-disable react-hooks/exhaustive-deps */
import { RegularText, TitleText } from "../../components/Typograph"
import { OrderConfirmedContainer, OrderDatailsContainer } from "./styles"
import OrderConfirmedImg from "../../assets/ConfirmedOrder.svg"
import InfoWithIcon from "../../components/InfoWithIcon"
import { MapPin, Clock, CurrencyDollar } from "phosphor-react"
import { useTheme } from "styled-components"
import { useLocation, useNavigate } from "react-router-dom"
import { OrderData } from "../CompleteOrder"
import { paymentMethods } from "../CompleteOrder/components/CompleteOrderForm/PaymentMethodOptions"
import { useEffect } from "react"

interface LocationType {
  state: OrderData,
}

function OrderConfirmed() {
  const { colors } = useTheme();

  const { state } = useLocation() as unknown as LocationType;

  const navigate = useNavigate();
  
  useEffect(() => {
    if(!state) {
      navigate("/")
    }
  }, [])

  if(!state) return <></>

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
              Entrega em <strong>{state.street}, {state.number}</strong>
              <br />
              {state.district} - {state.city}, {state.uf}
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
              <strong>{paymentMethods[state.paymentMethod].label}</strong>
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