import Intro from "../components/Intro"
import OurCoffees from "../components/OurCoffees"
import { HomeContainer } from "./styles"

function Home() {
  return(
    <HomeContainer>
      <Intro />
      <OurCoffees />
    </HomeContainer>
  )
}

export default Home