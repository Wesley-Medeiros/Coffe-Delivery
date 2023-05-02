import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import CompleteOrderPage from "./pages/CompleteOrder"
import DefaultLayout from "./Layouts/DefaultLayout"

function Router() {
  return(
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/CompleteOrder" element={<CompleteOrderPage />} />
      </Route>
    </Routes>
  )
}

export default Router