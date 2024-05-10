// import { Container, Navbar } from "react-bootstrap";
// import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import Typed from "typed.js";
import { useEffect, useState} from "react";

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
 

  
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
    
    var element = document.getElementById("responsive-navbar-nav");
    element.classList.remove("show");
  };
  
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
          <Navbar.Collapse id="responsive-navbar-nav" >
           <div className={clicked ? 'hide' : ''}>
           <Nav>
              <NavLink to="/home" className='nav_text' onClick={handleClick} >
                Home
              </NavLink>
              <NavLink to="/about-us" className="nav_text" onClick={handleClick}>
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
                                  className="dropdown-item"  onClick={handleClick}
                                >
                                  Community Management
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/services/mangement/social-media-management"
                                  className="dropdown-item"  onClick={handleClick}
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
                                  className="dropdown-item"  onClick={handleClick}
                                >
                                  SEO Marketing
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/services/marketing/content-marketing"
                                  className="dropdown-item"  onClick={handleClick}
                                >
                                  Content Marketing
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/services/marketing/influencer-marketing"
                                  className="dropdown-item"  onClick={handleClick}
                                >
                                  Influencer Marketing
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/services/marketing/social-media-marketing"
                                  className="dropdown-item"  onClick={handleClick}
                                >
                                  Social Media Marketing
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/services/marketing/campaign-marketing"
                                  className="dropdown-item"  onClick={handleClick}
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
                                  className="dropdown-item"  onClick={handleClick}
                                >
                                  Crypto Token Development
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/services/development/website-development"
                                  className="dropdown-item"  onClick={handleClick}
                                >
                                  Website Development
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/services/development/app-development"
                                  className="dropdown-item"  onClick={handleClick}
                                >
                                  App Development
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/services/development/white-paper-development"
                                  className="dropdown-item"  onClick={handleClick}
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
                                  className="dropdown-item"  onClick={handleClick}
                                >
                                  Logo Design
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/services/design/stationery-design"
                                  className="dropdown-item"  onClick={handleClick}
                                >
                                  Stationery Design
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/services/design/social-media-design"
                                  className="dropdown-item"  onClick={handleClick}
                                >
                                  Social Media Design
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/services/design/e-commerce-photo-editing"
                                  className="dropdown-item"  onClick={handleClick}
                                >
                                  Ecommerce Photo Editing
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/services/design/white-paper-design"
                                  className="dropdown-item"  onClick={handleClick}
                                >
                                  White Paper Design
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/services/design/web-design"
                                  className="dropdown-item"  onClick={handleClick}
                                >
                                  Web design
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/services/design/ui-ux-design"
                                  className="dropdown-item"  onClick={handleClick}
                                >
                                  UI/UX design
                                </NavLink>
                              </li>
                            </ul>
                          </div>
                        </li>

                        <li>
                          <NavLink to="/services/listing" className="dropdown-item"  onClick={handleClick}>
                            Listing
                          </NavLink>
                        </li>

                        <li>
                          <NavLink to="/services/package" className="dropdown-item"  onClick={handleClick}>
                            Package
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </nav>

              {/* submenu bar services area end */}

              <NavLink to="/clients" className="nav_text" onClick={handleClick} >
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
                          <NavLink to="/about-us" className="dropdown-item"  onClick={handleClick} >
                            About
                          </NavLink>
                        </li>

                        <li>
                          <NavLink to="/team" className="dropdown-item"  onClick={handleClick}>
                            Team
                          </NavLink>
                        </li>

                        <li>
                          <NavLink to="/career" className="dropdown-item"  onClick={handleClick}>
                            Careers
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/contact" className="dropdown-item"  onClick={handleClick}>
                            Contact
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </nav>

              {/* submenu bar Company area end */}

              <NavLink to="/blog" className="nav_text" onClick={handleClick}>
                Blog
              </NavLink>

              {/* <NavLink to="/contact" onClick={handleClick}></NavLink> */}
            </Nav>
            </div>
            <div>
              <NavLink to="/contact" onClick={handleClick}>
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