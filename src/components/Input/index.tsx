import { RegularText } from "../Typograph";
import { InputStyleContainer, InputWrapper } from "./styles"
import { InputHTMLAttributes, forwardRef } from "react"

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error,...props }, ref) => {
    return(
      <InputWrapper className={props.className}>
        <InputStyleContainer {...props} ref={ref} /> 
        {error && <RegularText size="s">{error}</RegularText>}
      </InputWrapper>
    )
  }
)

export default Input