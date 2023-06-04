import CompleteOrderForm from "./components/CompleteOrderForm"
import SelectedCoffees from "./components/SelectedCoffees"
import { CompleteOrederContainer } from "./styles"
import * as zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, FormProvider } from "react-hook-form"

const confirmeOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, "Informe o CEP"),
  street: zod.string().min(1, "Informe sua rua"),
  number: zod.string().min(1, "Informe seu número"),
  complement: zod.string().min(1, "Informe seu complemento"),
  district: zod.string().min(1, "Informe seu bairro"),
  city: zod.string().min(1, "Informe sua cidade"),
  uf: zod.string().min(1, "Informe sua UF"),
});

export type OrderData = zod.infer<typeof confirmeOrderFormValidationSchema>

type ConfirmOrderFormData = OrderData;

function CompleteOrderPage() {
  const confirmeOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmeOrderFormValidationSchema)
  });

  const { handleSubmit } = confirmeOrderForm;

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    console.log(data)
  }

  return(
    <FormProvider {...confirmeOrderForm}>
      <CompleteOrederContainer className="container" onSubmit={handleSubmit(handleConfirmOrder)}>
        <CompleteOrderForm />
        <SelectedCoffees />
      </CompleteOrederContainer>
    </FormProvider>
  )
}

export default CompleteOrderPage