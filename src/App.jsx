import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarNav from "./Component/Navbars/Navbars";
import HomePage from "./Component/HomePage/HomePage";
import Erro from "./Component/ErroPage/Erro";
import AboutPage from "./Component/AboutPage/AboutPage";
import Clients from "./Component/ClientsPages/Clients";
import Footer from "./Component/Footer/Footer";
import TeamPage from "./Component/TeamMangementPage/TeamPage";
import CareerPage from "./Component/CareerPage/CareerPage";
import ContactUS from "./Component/ContactUsPage/ContactUS";
import BlogPage from "./Component/BlogPage/BlogPage";

const App = () => {
  return (
    <Router>
      <NavbarNav />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/contact" element={<ContactUS />} />
        <Route path="/blog" element={<BlogPage />} />

        <Route path="*" element={<Erro />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
