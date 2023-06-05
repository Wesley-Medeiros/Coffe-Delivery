import CompleteOrderForm from "./components/CompleteOrderForm"
import SelectedCoffees from "./components/SelectedCoffees"
import { CompleteOrederContainer } from "./styles"
import * as zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, FormProvider } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import useCart from "../../Hooks/useCart"

enum PaymentMethods {
  credit = "credit",
  debit = "debit",
  money = "money",
}

const confirmeOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, "Informe o CEP"),
  street: zod.string().min(1, "Informe sua rua"),
  number: zod.string().min(1, "Informe seu número"),
  complement: zod.string(),
  district: zod.string().min(1, "Informe seu bairro"),
  city: zod.string().min(1, "Informe sua cidade"),
  uf: zod.string().min(1, "Informe sua UF"),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap:() => {
      return {message: "Informe o método de pagamento"}
    }
  })
});

export type OrderData = zod.infer<typeof confirmeOrderFormValidationSchema>

type ConfirmOrderFormData = OrderData;

function CompleteOrderPage() {
  const confirmeOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmeOrderFormValidationSchema)
  });

  const { handleSubmit } = confirmeOrderForm;

  const navigate = useNavigate();
  const { cleanCart } = useCart();

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    navigate("/orderConfirmed", {
      state: data,
    })
    cleanCart();
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