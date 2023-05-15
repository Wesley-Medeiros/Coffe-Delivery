import { InputStyleContainer } from "./styles"
import { InputHTMLAttributes } from "react"

type InputProps = InputHTMLAttributes<HTMLInputElement>

function Input({ ...props }: InputProps) {
  return(
    <InputStyleContainer {...props} />
  )
}

export default Input