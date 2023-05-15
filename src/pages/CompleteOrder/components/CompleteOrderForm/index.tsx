import { MapPinLine } from "phosphor-react"
import { TitleText } from "../../../../components/Typograph"
import SectionTitle from "../SectionTitle"
import { CompleteOrderFormContainer, FormSectionContainer } from "./styles"
import { useTheme } from "styled-components"
import AddresForm from "./AddresFrom"

function CompleteOrderForm() {
  const { colors } = useTheme()

  return(
    <CompleteOrderFormContainer>
      <TitleText size="xs" color="subtitle">
        Complete seu pedido
      </TitleText>

      <FormSectionContainer>
        <SectionTitle title="Endereço de Entrega" 
        subtitle="Informe o endereço onde deseja receber seu pedido" 
        icon={<MapPinLine color={colors["brand-yellow-dark"]} size={22} />} 
        />

        <AddresForm />
      </FormSectionContainer>
    </CompleteOrderFormContainer>
  )
}

export default CompleteOrderForm