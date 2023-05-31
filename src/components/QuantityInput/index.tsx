import { Minus, Plus } from "phosphor-react"
import { IconWrapper, QuantityInputContainer } from "./styles"

interface QuantityInputProps {
  size?: "medium" | "small",
  quantity: number,
  onIncrease: () => void,
  onDecrease: () => void,
}

function QuantityInput({ onIncrease, onDecrease, quantity, size = "medium" }: QuantityInputProps) {
  return(
    <QuantityInputContainer size={size}>
      <IconWrapper disabled={quantity <= 0} onClick={onDecrease}>
        <Minus size={14} weight="fill" />
      </IconWrapper>
      <input type="number" readOnly value={quantity} />
      <IconWrapper onClick={onIncrease}>
        <Plus size={14} weight="fill" />
      </IconWrapper>
    </QuantityInputContainer>
  )
}

export default QuantityInput