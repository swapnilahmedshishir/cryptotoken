import {FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

const TeamMeet = () => {
  return (
    <>
    
      {/* ================================================================================
                  Meet the team section 
=========================================================================== */}
      <div className="common-div-style Our_service_div ">
        <div className="container">
          <div className="col_text_style header-one-style">
            <strong>Meet the team</strong>
          </div>

          <div className="row team_row_style">
            <div className="col-sm-12 col-md-6 col-lg-4 team_col_style">
              <div className="services_col_div_style">
                <div className="team_col_text_style">
                  <div className="team_col_image_circle_style">
                    <img
                      src="/Images/profileImage/unsplash_ILip77SbmOE.png"
                      alt="keyVector1"
                    />
                  </div>
                  <div className="team_text_style">
                    <strong>John Williams</strong>
                    <h5>CTO</h5>
                    <p>
                      Passion for Defi. Has worked @coinbase & @google as an
                      advisor
                    </p>
                  </div>
                  <div className="social_media">
                    <a
                      href="https://www.linkedin.com/in/swapnilahmedshishir/"
                      target="_blank"
                    >
                      <FaFacebookF className="bx bxl-twitter" />
                    </a>
                    <a
                      href="https://twitter.com/shishir_swapnil"
                      target="_blank"
                    >
                      <FaXTwitter className="bx bxl-twitter" />
                    </a>
                    <a
                      href="https://github.com/swapnilahmedshishir"
                      target="_blank"
                    >
                      <FaLinkedin className="bx" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 team_col_style">
              <div className="services_col_div_style">
                <div className="team_col_text_style">
                  <div className="team_col_image_circle_style">
                    <img
                      src="Images/profileImage/unsplash_IF9TK5Uy-KI.png"
                      alt="keyVector1"
                    />
                  </div>
                  <div className="team_text_style">
                    <strong>Alisha Ruckets</strong>
                    <h5>Advisor</h5>
                    <p>
                      Has excellent skills in project management. Previously
                      @binance
                    </p>
                  </div>
                  <div className="social_media">
                    <a
                      href="https://www.linkedin.com/in/swapnilahmedshishir/"
                      target="_blank"
                    >
                      <FaFacebookF className="bx bxl-twitter" />
                    </a>
                    <a
                      href="https://twitter.com/shishir_swapnil"
                      target="_blank"
                    >
                      <FaXTwitter className="bx bxl-twitter" />
                    </a>
                    <a
                      href="https://github.com/swapnilahmedshishir"
                      target="_blank"
                    >
                      <FaLinkedin className="bx" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 team_col_style">
              <div className="services_col_div_style">
                <div className="team_col_text_style">
                  <div className="team_col_image_circle_style">
                    <img
                      src="Images/profileImage/unsplash_bqe0J0b26RQ.png"
                      alt="keyVector1"
                    />
                  </div>
                  <div className="team_text_style">
                    <strong>Maria Silva</strong>
                    <h5>Full Stack Developer</h5>
                    <p>
                      Has an experience of 10+ years working in web.3.
                      Previously @crypto.com
                    </p>
                  </div>
                  <div className="social_media">
                    <a
                      href="https://www.linkedin.com/in/swapnilahmedshishir/"
                      target="_blank"
                    >
                      <FaFacebookF className="bx bxl-twitter" />
                    </a>
                    <a
                      href="https://twitter.com/shishir_swapnil"
                      target="_blank"
                    >
                      <FaXTwitter className="bx bxl-twitter" />
                    </a>
                    <a
                      href="https://github.com/swapnilahmedshishir"
                      target="_blank"
                    >
                      <FaLinkedin className="bx" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TeamMeet