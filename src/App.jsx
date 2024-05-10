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
import CommunityManagement from "./Component/Services/Mangement/CommunityManagement";
import SocailMediaManagement from "./Component/Services/Mangement/SocailMediaManagement";
import Content from "./Component/Services/Marketing/Content";
import Influencer from "./Component/Services/Marketing/Influencer";
import SocialMedia from "./Component/Services/Marketing/SocialMedia";
import Campaign from "./Component/Services/Marketing/Campaign";
import CryptoToken from "./Component/Services/Development/CryptoToken";
import Website from "./Component/Services/Development/Website";
import AppDev from "./Component/Services/Development/AppDev";
import WhitePaper from "./Component/Services/Development/WhitePaper";
import Logo from "./Component/Services/Design/Logo";
import Stationery from "./Component/Services/Design/Stationery";
import SocialMediaDesign from "./Component/Services/Design/SocialMediaDesign";
import EcommercePhotoEditing from "./Component/Services/Design/EcommercePhotoEditing";
import WhitePaperDesign from "./Component/Services/Design/WhitePaperDesign";
import WebDesign from "./Component/Services/Design/WebDesign";
import UxUi from "./Component/Services/Design/Uxui";
import SeoMarketing from "./Component/Services/Marketing/SEO";
import Package from "./Component/Services/Package/Package";
import Listing from "./Component/Services/Listing/Listing";
import Artical from "./Component/BlogPage/Artical/Artical";

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
        <Route path="/:title" element={<Artical />} />
        {/* sevices Route */}
        <Route
          path="/services/mangement/community-management"
          element={<CommunityManagement />}
        />
        <Route
          path="/services/mangement/social-media-management"
          element={<SocailMediaManagement />}
        />
        <Route path="/services/marketing/seo-marketing" element={<SeoMarketing />} />
        <Route
          path="/services/marketing/content-marketing"
          element={<Content />}
        />
        <Route
          path="/services/marketing/influencer-marketing"
          element={<Influencer />}
        />
        <Route
          path="/services/marketing/social-media-marketing"
          element={<SocialMedia />}
        />
        <Route
          path="/services/marketing/campaign-marketing"
          element={<Campaign />}
        />
        <Route
          path="/services/development/crypto-token-development"
          element={<CryptoToken />}
        />
        <Route
          path="/services/development/website-development"
          element={<Website />}
        />
        <Route
          path="/services/development/app-development"
          element={<AppDev />}
        />
        <Route
          path="/services/development/white-paper-development"
          element={<WhitePaper />}
        />
        <Route path="/services/design/logo-design" element={<Logo />} />
        <Route
          path="/services/design/stationery-design"
          element={<Stationery />}
        />
        <Route
          path="/services/design/social-media-design"
          element={<SocialMediaDesign />}
        />
        <Route
          path="/services/design/e-commerce-photo-editing"
          element={<EcommercePhotoEditing />}
        />
        <Route
          path="/services/design/white-paper-design"
          element={<WhitePaperDesign />}
        />
        <Route path="/services/design/web-design" element={<WebDesign />} />
        <Route path="/services/design/ui-ux-design" element={<UxUi />} />
        <Route path="/services/package" element={<Package />} />
        <Route path="/services/listing" element={<Listing />} />

        <Route path="*" element={<Erro />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
