import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer-div-style">
        <div className="container">
          <div className="footer_box">
            <div className="footer_row_box row align-items-center justify-content-between">
              <div className="col-12 col-md-7 col-lg-5">
                <div className="footer_box_text_div">
                  <h2 className="footer_heading">Take Good Design Today</h2>
                  <div className="footer_box_services">
                    <div className="footer_box_services_div">
                      <IoMdCheckmarkCircleOutline className="footer_box_icon" />
                      <p>web design</p>
                    </div>
                    <div className="footer_box_services_div">
                      <IoMdCheckmarkCircleOutline className="footer_box_icon" />
                      <p>ux design</p>
                    </div>
                    <div className="footer_box_services_div">
                      <IoMdCheckmarkCircleOutline className="footer_box_icon" />
                      <p>ui design</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-5 col-lg-7">
                <div className="footer_box_btn_div">
                  <Link to="/" className="footer_box_btn">
                    <button className="customFooterBoxbtn1 custombtn">
                      Request A Free Call
                    </button>
                  </Link>
                  <Link to="/" className="">
                    <button className="customFooterBoxbtn2 custombtn">
                      Get started
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="footer_menubar">
            <div className="row">
              <div className="col-12 col-md-7 col-lg-4">
                <div className="footer_menubar_col_text">
                  <img src="/Images/LOGO.png" alt="Logo" />
                  <p>
                    We&#39;re your one-stop shop for all things digital,
                    offering a complete range of services - Management,
                    Marketing, Development, Design, and Listing - to propel your
                    business forward.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-5 col-lg-8">
                <div className="row footer_menubar_row">
                  <div className="col-6 col-md-6 col-lg-4 footer_menu">
                    <div className="footer_menubar_col_text">
                      <div className="footer_menu_list">
                        <ul>
                          <li>
                            <h5>Resources</h5>
                          </li>
                          <li>
                            <Link to="">Academy</Link>
                          </li>
                          <li>
                            <Link to="">Blog</Link>
                          </li>
                          <li>
                            <Link to="">Themes</Link>
                          </li>
                          <li>
                            <Link to="">Hosting</Link>
                          </li>
                          <li>
                            <Link to="">Developers</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-6 col-lg-4 footer_menu">
                    <div className="footer_menubar_col_text">
                      <div className="footer_menu_list">
                        <ul>
                          <li>
                            <h5>Company</h5>
                          </li>
                          <li>
                            <Link to="">About Us</Link>
                          </li>
                          <li>
                            <Link to="">Services</Link>
                          </li>
                          <li>
                            <Link to="">Teams</Link>
                          </li>
                          <li>
                            <Link to="">FAQs</Link>
                          </li>
                          <li>
                            <Link to="">Contact Us</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-12 col-lg-4 footer_menu">
                    <div className="footer_menubar_col_text">
                      <div className="footer_menu_list">
                        <ul>
                          <li>
                            <h5>Follow us</h5>
                          </li>
                          <li>
                            <div className="footer_social_media">
                              <a
                                className="footer_social_media_link"
                                href="https://www.linkedin.com/in/swapnilahmedshishir/"
                                target="_blank"
                              >
                                <FaFacebookF className="bx bxl-twitter" />
                              </a>
                              <a
                                className="footer_social_media_link"
                                href="https://twitter.com/shishir_swapnil"
                                target="_blank"
                              >
                                <FaXTwitter className="bx bxl-twitter" />
                              </a>
                              <a
                                className="footer_social_media_link"
                                href="https://github.com/swapnilahmedshishir"
                                target="_blank"
                              >
                                <FaLinkedin className="bx" />
                              </a>
                            </div>
                          </li>
                          <li>
                            <h5>Call us</h5>
                          </li>
                          <li>
                            <span>+1 800 854-36-80</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_horizontal"></div>

        <div className="container">
          <div className="footer_menu_list_div">
            <div className="row justify-content-between">
              <div className="col-12 col-md-7">
                <div className="footer_menu_list_style">
                  <ul>
                    <li>
                      <Link to="">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="">Terms of Use</Link>
                    </li>
                    <li>
                      <Link to="">Sales and Refunds</Link>
                    </li>
                    <li>
                      <Link to="">Legal</Link>
                    </li>
                    <li>
                      <Link to="">Site Map</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-md-5">
                <div className="footer_menu_list_style">
                  <ul>
                    <li>
                      <span>© 2024 Tojo Global</span>
                    </li>
                    <li>
                      <span>Development by @swapnilahmedshishir</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
