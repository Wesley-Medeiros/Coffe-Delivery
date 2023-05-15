import PaymentMethodInput from "../PaymentMethodInput"
import { PaymentMethodOptionsContainer } from "./styles"

function PaymentMethodOptions() {
  return(
    <PaymentMethodOptionsContainer>
      <PaymentMethodInput />
      <PaymentMethodInput />
      <PaymentMethodInput />
    </PaymentMethodOptionsContainer>
  )
}

export default PaymentMethodOptions