import { RegularText } from "../Typograph";
import { InputStyleContainer, InputWrapper } from "./styles"
import { InputHTMLAttributes, forwardRef } from "react"

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className,...props }, ref) => {
    return(
      <InputWrapper className={className}>
        <InputStyleContainer {...props} ref={ref} /> 
        {error && <RegularText size="s">{error}</RegularText>}
      </InputWrapper>
    )
  }
)

export default Input