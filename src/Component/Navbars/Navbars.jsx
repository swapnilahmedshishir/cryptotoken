import { Container, Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

function NavbarNav() {
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
            <Nav className="">
              <NavLink to="/home" className="nav_text">
                Home
              </NavLink>
              <NavLink to="/our-team" className="nav_text">
                About Us
              </NavLink>

              {/* demo  */}

<nav className="menu_bar nav_text">
  <ul>
    <li className="menu_item">
      <span className="services">
        Services <IoIosArrowDown />
      </span>
      <div className="dropdown_menu">
        <ul className="submenu">
          <li>
            <span className="services">
              Package <IoIosArrowForward className="fas" />
            </span>
            <div className="dropdown_menu_1">
              <ul>
                {Array.from({ length: 5 }, (_, index) => (
                  <li key={index}>
                    <NavLink to="/our-team" className="dropdown-item">
                      PackagePackagePackagePackagePackagePackage
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          <li>
            <span className="services">
            Management <IoIosArrowForward className="fas" />
            </span>
            <div className="dropdown_menu_1">
              <ul>
                {Array.from({ length: 5 }, (_, index) => (
                  <li key={index}>
                    <NavLink to="/our-team" className="dropdown-item">
                    ManagementManagementManagementManagementManagement
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li>
            <NavLink to="/management" className="dropdown-item">
              Management
            </NavLink>
          </li>
          <li>
            <NavLink to="/marketing" className="dropdown-item">
              Marketing
            </NavLink>
          </li>
          <li>
            <NavLink to="/development" className="dropdown-item">
              Development
            </NavLink>
          </li>
          <li>
            <NavLink to="/design" className="dropdown-item">
              Design
            </NavLink>
          </li>
          <li>
            <NavLink to="/listing" className="dropdown-item">
              Listing
            </NavLink>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</nav>

              

              <NavLink to="/gallery" className="nav_text">
                Clients
              </NavLink>
              <NavLink to="/blog" className="nav_text">
                Company
              </NavLink>
              <NavLink to="/contact" className="nav_text">
                Blog
              </NavLink>

              <NavLink to="/contact"></NavLink>
            </Nav>
            <div>
              <button type="button" className="contactBtn">
                Contact Us
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarNav;
