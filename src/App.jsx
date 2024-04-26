import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarNav from "./Component/Navbars/Navbars";
import HomePage from "./Component/HomePage/HomePage";
import Erro from "./Component/ErroPage/Erro";

const App = () => {
  return (
    <Router>
      <NavbarNav />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />

        <Route path="*" element={<Erro />} />
      </Routes>
    </Router>
  );
};

export default App;
