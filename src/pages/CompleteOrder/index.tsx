import CompleteOrderForm from "./components/CompleteOrderForm"
import { CompleteOrederContainer } from "./styles"

function CompleteOrderPage() {
  return(
    <CompleteOrederContainer className="container">
      <CompleteOrderForm />
    </CompleteOrederContainer>
  )
}

export default CompleteOrderPage