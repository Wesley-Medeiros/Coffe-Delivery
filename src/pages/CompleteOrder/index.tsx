import CompleteOrderForm from "./components/CompleteOrderForm"
import SelectedCoffees from "./components/SelectedCoffees"
import { CompleteOrederContainer } from "./styles"

function CompleteOrderPage() {
  return(
    <CompleteOrederContainer className="container">
      <CompleteOrderForm />
      <SelectedCoffees />
    </CompleteOrederContainer>
  )
}

export default CompleteOrderPage