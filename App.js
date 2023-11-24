import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import Nav from "./Nav"

let App = () => {
  return (
    <BrowserRouter basename="/">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App