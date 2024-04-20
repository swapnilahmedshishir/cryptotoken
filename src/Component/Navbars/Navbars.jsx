import { Container, Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavbarNav() {
  return (
   
        <div className='div_one_background'>
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
            <NavDropdown
              title="Services"
              id="collapsible-nav-dropdown"
              className="nav_text dropdown_menu_text"
            >
              <NavLink to="/our-team" className="nav_text">
              Our Team
            </NavLink>
              
            </NavDropdown>
            
            <NavLink to="/gallery" className="nav_text">
            Clients
            </NavLink>
            <NavLink to="/blog" className="nav_text">
            Company
            </NavLink>
            <NavLink to="/contact" className="nav_text">
            Blog
            </NavLink>

            <NavLink to="/contact" >
            
            </NavLink>
          </Nav>
          <div>
          <button type="button" className="contactBtn">Contact Us</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
      
    
  );
}

export default NavbarNav;
