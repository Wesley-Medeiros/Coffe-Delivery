import { QuantityInputContainer } from "./styles"

function QuantityInput() {
  return(
    <QuantityInputContainer>
      <input type="number" readOnly value={1} />
    </QuantityInputContainer>
  )
}

export default QuantityInput