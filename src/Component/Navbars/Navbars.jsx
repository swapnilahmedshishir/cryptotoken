import { Container, Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import Typed from "typed.js";
import { useEffect} from "react";

function NavbarNav() {

  
  useEffect(() => {
    // Initialize Typed.js
    const typed = new Typed(".multiple_text", {
      strings: [" Book Intro Call"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    // Cleanup function to destroy Typed.js instance when component unmounts
    return () => {
      typed.destroy();
    };
  }, []);
  


  
  
  return (
    <div className="div_one_background">
      <Navbar collapseOnSelect expand="lg" className="navbar_style">
        <Container className="navbar_container">
          <Navbar.Brand>
            <NavLink to="/home" className="">
              <img src="/Images/LOGO.png" alt="logo" />
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="" >
              <NavLink to="/home" className="nav_text" >
                Home
              </NavLink>
              <NavLink to="/about-us" className="nav_text">
                About Us
              </NavLink>

              {/* submenu bar services area start */}

              <nav className="menu_bar nav_text" >
                <ul>
                  <li className="menu_item">
                    <span className="services">
                      Services <IoIosArrowDown className="icon_bar" />
                    </span>
                    <div className="dropdown_menu">
                      <ul className="submenu">
                        <li>
                          <span className="services">
                            Management <IoIosArrowForward className="fas" />
                          </span>
                          <div className="dropdown_submenu">
                            <ul>
                              <li>
                                <NavLink
                                  to="/services/mangement/community-management"
                                  className="dropdown-item"
                                >
                                  Community Management
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/services/mangement/social-media-management"
                                  className="dropdown-item"
                                >
                                  Social media handles management
                                </NavLink>
                              </li>
                            </ul>
                          </div>
                        </li>

                        <li>
                          <span className="services">
                            Marketing <IoIosArrowForward className="fas" />
                          </span>
                          <div className="dropdown_submenu">
                            <ul>
                              <li>
                                <NavLink
                                  to="/services/marketing/seo-marketing"
                                  className="dropdown-item"
                                >
                                  SEO Marketing
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/services/marketing/content-marketing"
                                  className="dropdown-item"
                                >
                                  Content Marketing
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/services/marketing/influencer-marketing"
                                  className="dropdown-item"
                                >
                                  Influencer Marketing
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/services/marketing/social-media-marketing"
                                  className="dropdown-item"
                                >
                                  Social Media Marketing
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/services/marketing/campaign-marketing"
                                  className="dropdown-item"
                                >
                                  Campaign Marketing
                                </NavLink>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <span className="services">
                            Development <IoIosArrowForward className="fas" />
                          </span>
                          <div className="dropdown_submenu">
                            <ul>
                              <li>
                                <NavLink
                                  to="/services/development/crypto-token-development"
                                  className="dropdown-item"
                                >
                                  Crypto Token Development
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/services/development/website-development"
                                  className="dropdown-item"
                                >
                                  Website Development
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/services/development/app-development"
                                  className="dropdown-item"
                                >
                                  App Development
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/services/development/white-paper-development"
                                  className="dropdown-item"
                                >
                                  White Paper Development
                                </NavLink>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <span className="services">
                            Design <IoIosArrowForward className="fas" />
                          </span>
                          <div className="dropdown_submenu">
                            <ul>
                              <li>
                                <NavLink
                                  to="/services/design/logo-design"
                                  className="dropdown-item"
                                >
                                  Logo Design
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/services/design/stationery-design"
                                  className="dropdown-item"
                                >
                                  Stationery Design
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/services/design/social-media-design"
                                  className="dropdown-item"
                                >
                                  Social Media Design
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/services/design/e-commerce-photo-editing"
                                  className="dropdown-item"
                                >
                                  Ecommerce Photo Editing
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/services/design/white-paper-design"
                                  className="dropdown-item"
                                >
                                  White Paper Design
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/services/design/web-design"
                                  className="dropdown-item"
                                >
                                  Web design
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/services/design/ui-ux-design"
                                  className="dropdown-item"
                                >
                                  UI/UX design
                                </NavLink>
                              </li>
                            </ul>
                          </div>
                        </li>

                        <li>
                          <NavLink to="/services/listing" className="dropdown-item">
                            Listing
                          </NavLink>
                        </li>

                        <li>
                          <NavLink to="/services/package" className="dropdown-item">
                            Package
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </nav>

              {/* submenu bar services area end */}

              <NavLink to="/clients" className="nav_text" >
                Clients
              </NavLink>

              {/* submenu bar Company area start */}

              <nav className="menu_bar nav_text" >
                <ul>
                  <li className="menu_item">
                    <span className="services">
                      Company <IoIosArrowDown className="icon_bar" />
                    </span>
                    <div className="dropdown_menu comapny_dropdown_menu">
                      <ul className="submenu">
                        <li>
                          <NavLink to="/listing" className="dropdown-item">
                            About
                          </NavLink>
                        </li>

                        <li>
                          <NavLink to="/team" className="dropdown-item">
                            Team
                          </NavLink>
                        </li>

                        <li>
                          <NavLink to="/career" className="dropdown-item">
                            Careers
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/contact" className="dropdown-item">
                            Contact
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </nav>

              {/* submenu bar Company area end */}

              <NavLink to="/blog" className="nav_text">
                Blog
              </NavLink>

              <NavLink to="/contact"></NavLink>
            </Nav>
            <div>
              <NavLink to="/contact">
                <button type="button" className="contactBtn">
                  <span className="multiple_text"></span>
                </button>
              </NavLink>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarNav;
