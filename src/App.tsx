import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"
import { BrowserRouter } from "react-router-dom"
import Router from "./Routes"
import { CartContextProvider } from "./Contexts/CartContext"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
     <GlobalStyle />
     <BrowserRouter>
      <CartContextProvider>
        <Router />
      </CartContextProvider>
     </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
