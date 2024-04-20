import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarNav from "./Component/Navbars/Navbars"


const App = () => {
  return (
    <Router>
    <NavbarNav/>
    <Routes>
        {/* <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } /> */}
      </Routes>
    </Router>
  )
}

export default App
