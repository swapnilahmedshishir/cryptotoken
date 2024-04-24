import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      {/* ============================================================================
                  Heoro  section 
=========================================================================== */}
      <div className="hero_div">
        <div className="container">
          <div className="row hero_row_style">
            <div className="col-sm-12 col-md-6 hero_col_text_style">
              <strong>
                Empowering Industries for success with TOJO: Unlocking maximum
                potential and growth
              </strong>
              <p>
                Wellcome to TOJO Global! We specialize in providing professional
                services of marketing, management, designing,
                developments,listing and many more for startups, small
                businesses, B2B companies, cryptocurrency, blockchain,fintech
                etc. Let&#39;s work together to move your company forward.
              </p>
              <Link to="/">
                <button className="custombtn"> GET STARTED </button>
              </Link>
            </div>
            <div className="col-sm-12 col-md-6 hero_col_image_style ">
              <img
                src="Images/banner/Hero-01.png"
                alt=""
                className="animationY_style"
              />
            </div>
          </div>
          {/* ================================================================================
                  ai service section 
=========================================================================== */}

          <div className="ai_service">
            <div className="container">
              <div className="row AiService_row_image_style">
                <div className="col-6 col-md-2 AiService_col_image_style">
                  <img
                    src="Images/logos/Databricks.png"
                    alt="Databricks"
                    className="animationY_style"
                  />
                </div>
                <div className="col-6 col-md-2 AiService_col_image_style">
                  <img
                    src="Images/logos/DATAOCEAN AI.png"
                    alt="DATAOCEAN"
                    className="animationY_style"
                  />
                </div>
                <div className="col-6 col-md-2 AiService_col_image_style">
                  <img
                    src="Images/logos/Surge-AI.png"
                    alt="Surge-AI"
                    className="animationY_style"
                  />
                </div>
                <div className="col-6 col-md-2 AiService_col_image_style">
                  <img
                    src="Images/logos/Defined.ai.png"
                    alt="Defined AI"
                    className="animationY_style"
                  />
                </div>
                <div className="col-6 col-md-2 AiService_col_image_style ">
                  <img
                    src="Images/logos/Hugging-Face.png"
                    alt=""
                    className="animationY_style"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ================================================================================
                  about section 
=========================================================================== */}
      <div className="about_div">
        <div className="container">
          <div className="row about_row_style">
            <div className="col-sm-12 col-md-6 about_col_image_style col_image_style ">
              <img
                src="Images/banner/banner_img4.png"
                alt="banner_img4.png"
                className="animationX_style"
              />
            </div>

            <div className="col-sm-12 col-md-6 about_col_text_style col_text_style">
              <strong>
                <span>About</span> Tojo global
              </strong>
              <div className="border_style"></div>
              <p>
                We redefine excellence in business solution at TOJO Global. Our
                unique services in marketing, management, design, development,
                and listing enables us to support industries in the blockchain,
                fintech, cryptocurrency, small company, and B2B sectors.
                Discover success, efficiency, and innovation with TOJO
                Global—where your goals become our mission. Welcome to a new era
                of business transformation.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ================================================================================
                  Key Features section 
=========================================================================== */}
      <div className="common-div-style">
        <div className="container">
          <div className="col_text_style header-one-style">
            <strong>
              <span>Key Features</span>
            </strong>
          </div>

          <div className="row">
            <div className="col-sm-12 col-md-4 key_col_text_style">
              <div className="key_col_image_style">
                <div className="key_col_image_circle_style">
                  <img src="Images/icons/keyVector1.png" alt="keyVector1" />
                </div>
              </div>
              <strong>Blockchain expertise</strong>
              <p>
                we are always ready to provide specialized solutions for using
                the blockchain technology, including development, marketing,
                design, and management services to make deals more efficient and
                clear.
              </p>
            </div>
            <div className="col-sm-12 col-md-4 key_col_text_style">
              <div className="key_col_image_style">
                <div className="key_col_image_circle_style">
                  <img src="Images/icons/keyVector2.png" alt="keyVector1" />
                </div>
              </div>
              <strong>B2B Integration</strong>
              <p>
                We offer planned services and help to make sure that B2B
                interactions go smoothly. We use our expertise to improve
                teamwork and promote growth for both companies.
              </p>
            </div>
            <div className="col-sm-12 col-md-4 key_col_text_style">
              <div className="key_col_image_style">
                <div className="key_col_image_circle_style">
                  <img src="Images/icons/keyVector3.png" alt="keyVector1" />
                </div>
              </div>
              <strong>Crypto Solutions</strong>
              <p>
                Full range of services including development, marketing, design,
                and management as well as cryptocurrency listing that are
                specially made to help you handle the constantly changing world
                of cryptocurrency. We make sure you stay legal, safe, and
                succeed in the market.
              </p>
            </div>
            <div className="col-sm-12 col-md-4 key_col_text_style">
              <div className="key_col_image_style">
                <div className="key_col_image_circle_style">
                  <img src="Images/icons/keyVector4.png" alt="keyVector1" />
                </div>
              </div>
              <strong>Small Business Support</strong>
              <p>
                Development, marketing, design, and management solutions that
                are made to the needs of small companies. This helps them grow
                and stay strong in tough market conditions.
              </p>
            </div>
            <div className="col-sm-12 col-md-4 key_col_text_style">
              <div className="key_col_image_style">
                <div className="key_col_image_circle_style">
                  <img src="Images/icons/keyVector5.png" alt="keyVector1" />
                </div>
              </div>
              <strong>Fintech Innovation</strong>
              <p>
                Advanced fintech development, marketing, design, and management
                services are available to change your world. Just grab them and
                increase your business growth in this changing digital world.
              </p>
            </div>
            <div className="col-sm-12 col-md-4 key_col_text_style">
              <div className="key_col_image_style">
                <div className="key_col_image_circle_style">
                  <img src="Images/icons/keyVector6.png" alt="keyVector1" />
                </div>
              </div>
              <strong>Acceleration of startup business</strong>
              <p>
                This service helps startups grow quickly by giving them
                strategic advice and all-around support. We do this by providing
                development, marketing, design, and management skills to help
                them get investors and take over the market.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ================================================================================
                  Our service section 
=========================================================================== */}
      <div className="common-div-style Our_service_div ">
        <div className="container">
          <div className="col_text_style header-one-style OUR-SERVICES-TEXT">
            <strong>OUR SERVICES</strong>
          </div>

          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4 services_col_style">
              <div className="services_col_image_style">
                <div className="services_col_image_circle_style">
                  <img
                    src="Images/icons/servicesVector1.png"
                    alt="keyVector1"
                  />
                </div>
              </div>
              <div className="services_col_text_style">
                <strong>Management</strong>
                <div></div>
                <p>
                  From project management to team optimization, we handle the
                  back-end so you can focus on running your business.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 services_col_style">
              <div className="services_col_image_style">
                <div className="services_col_image_circle_style">
                  <img
                    src="Images/icons/servicesVector2.png"
                    alt="keyVector1"
                  />
                </div>
              </div>
              <div className="services_col_text_style">
                <strong>Marketing</strong>
                <div></div>
                <p>
                  We craft data-driven marketing strategies to get your brand in
                  front of the customers who matter most.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 services_col_style">
              <div className="services_col_image_style">
                <div className="services_col_image_circle_style">
                  <img
                    src="Images/icons/servicesVector3.png"
                    alt="keyVector1"
                  />
                </div>
              </div>
              <div className="services_col_text_style">
                <strong>Development</strong>
                <div></div>
                <p>
                  Build what you need. Our development team brings your ideas to
                  life with innovative and scalable solutions.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 services_col_style">
              <div className="services_col_image_style">
                <div className="services_col_image_circle_style">
                  <img
                    src="Images/icons/servicesVector2.png"
                    alt="keyVector1"
                  />
                </div>
              </div>
              <div className="services_col_text_style">
                <strong>Design</strong>
                <div></div>
                <p>
                  Make a lasting impression.We create captivating designs that
                  elevate your brand and resonate with your audience.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 services_col_style">
              <div className="services_col_image_style">
                <div className="services_col_image_circle_style">
                  <img
                    src="Images/icons/servicesVector5.png"
                    alt="keyVector1"
                  />
                </div>
              </div>
              <div className="services_col_text_style">
                <strong>Listing</strong>
                <div></div>
                <p>
                  Get found, get chosen.We handle the listing process for
                  various platforms, maximizing your visibility and customer
                  acquisition.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 services_col_style">
              <div className="services_col_image_style">
                <div className="services_col_image_circle_style">
                  <img
                    src="Images/icons/servicesVector6.png"
                    alt="keyVector1"
                  />
                </div>
              </div>
              <div className="services_col_text_style">
                <strong>Package</strong>
                <div></div>
                <p>
                  Solutions built for you.Choose from our comprehensive service
                  packages or create a custom plan that perfectly fits your
                  business goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
