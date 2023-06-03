import { useFormContext } from "react-hook-form"
import Input from "../../../../components/Input"
import { AddresFormContainer } from "./styles"

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string;
    }
  }
}

function AddresForm() {
  const { register, formState } = useFormContext();

  const { errors } = formState as unknown as ErrorsType;

  return(
    <AddresFormContainer>
      <Input placeholder="CEP" type="number" className="cep" {...register("cep")} error={errors.cep?.message}/>
      <Input placeholder="Rua" className="street" />
      <Input placeholder="Número" type="number" />
      <Input placeholder="Complemtento" className="complement" />
      <Input placeholder="Bairro" />
      <Input placeholder="Cidade" />
      <Input placeholder="UF" />
    </AddresFormContainer>
  )
}

export default AddresForm