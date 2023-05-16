import { ButtonHTMLAttributes } from "react"
import { ButtonContainer } from "./styles"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string | number, 
  
}

function Button({ text, ...props }: ButtonProps) {
  return(
    <div>
      <ButtonContainer{...props}>
        {text}
      </ButtonContainer>
    </div>
  )
}

export default Button