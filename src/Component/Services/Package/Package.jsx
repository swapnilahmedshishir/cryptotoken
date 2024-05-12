import { Link } from "react-router-dom";
import HeroText from "../../UniversalComponent/HeroText/HeroText";

const Package = () => {
  return (
    <>
      <div className="univarsal_div">
        <div className="container">
          <HeroText
            heroText={{
              text1: "Services/",
              text2: "Package",
              description:
                "We understand all size fits doesn’t work. Check out our full range of service deals that are made to fit your needs. From us, you can get cheap deals for marketing, management, design, development, and listing. Our expert solutions are made to help cryptocurrency, blockchain, fintech, startups, small businesses, and B2B projects grow and succeed. They can help your business reach its full potential.",
            }}
          />

          {/* package plan Management */}
          <div>
            <HeroText
              heroText={{
                text1: "",
                text2: "Management",
                description: "",
              }}
            />
            <div className="row justify-content-md-center">
              <div className="col-sm-12 col-md-6 package_col_style">
                <div className="package_col_div_style">
                  <div className="package_col_text_style ManagementPackage_col_text_style">
                    <p className="plan_text_div plan_text_div3">
                      Telegram + Discord
                    </p>
                    <h2 className="section_hour">24/7</h2>
                    <p className="section_txt"> Management</p>
                    <div className="management_section_border"></div>
                    <p className="management_section_service">
                      Telegram and Discordr
                    </p>
                    <div className="ManagementPackage_text_div_style">
                      <ul className="">
                        <li>Group Management</li>
                        <li>Update Posting</li>
                        <li>Content Creation</li>
                        <li>Graphics Making</li>
                        <li>24/7 Nonstop Manage Community</li>
                      </ul>
                    </div>
                    <div className="section_btn">
                      <Link
                        to=""
                        className="btn fill-btn_gradient fill-btn_gradient-pink"
                      >
                        <span>Choose Plan</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 package_col_style">
                <div className="package_col_div_style">
                  <div className="package_col_text_style ManagementPackage_col_text_style">
                    <p className="plan_text_div plan_text_div2">
                      Social Media Management
                    </p>
                    <h2 className="section_hour">24/7</h2>
                    <p className="section_txt"> Social Media Management</p>
                    <div className="management_section_border"></div>
                    <p className="management_section_service">
                      Facebook, Instagram, TikTok, Twitter, Telegram
                    </p>
                    <div className="ManagementPackage_text_div_style">
                      <ul className="">
                        <li>Create Post</li>
                        <li>Create Content</li>
                        <li>Create Graphics</li>
                        <li>24/7 Nonstop Manage Community</li>
                      </ul>
                    </div>
                    <div className="section_btn">
                      <Link
                        to=""
                        className="btn fill-btn_gradient fill-btn_gradient-pink"
                      >
                        <span>Choose Plan</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* package plan Marketing */}
          <div>
            <HeroText
              heroText={{
                text1: "",
                text2: "Marketing",
                description: "",
              }}
            />
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-4 package_col_style">
                <div className="package_col_div_style">
                  <div className="package_col_text_style">
                    <p className="plan_text_div">STARTER PLAN</p>
                    <h2 className="section_hour">40 Hours</h2>
                    <p className="section_txt">1-2 regular task</p>
                    <div className="section_border"></div>
                    <p className="section_price">
                      <span>$3200</span>
                      <span>/Month</span>
                    </p>
                    <p className="section_usd">$80 per hour</p>
                    <div className="section_btn">
                      <Link
                        to=""
                        className="btn fill-btn_gradient fill-btn_gradient-pink"
                      >
                        <span>Choose Plan</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4 package_col_style">
                <div className="package_col_div_style">
                  <div className="package_col_text_style">
                    <p className="plan_text_div plan_text_div2">FORCE PLAN</p>
                    <h2 className="section_hour">160 Hours</h2>
                    <p className="section_txt">Full Marketing Department</p>
                    <div className="section_border"></div>
                    <p className="section_price section_price2">
                      <span>$9600</span>
                      <span>/Month</span>
                    </p>
                    <p className="section_usd">$60 per hour</p>
                    <div className="section_btn section_btn2">
                      <Link
                        to=""
                        className="btn fill-btn_gradient fill-btn_gradient-pink"
                      >
                        <span>Choose Plan</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4 package_col_style">
                <div className="package_col_div_style">
                  <div className="package_col_text_style">
                    <p className="plan_text_div plan_text_div3">BOOST PLAN</p>
                    <h2 className="section_hour">80 Hours</h2>
                    <p className="section_txt">3-4 regular task</p>
                    <div className="section_border"></div>
                    <p className="section_price">
                      <span>$5600</span>
                      <span>/Month</span>
                    </p>
                    <p className="section_usd">$70 per hour</p>
                    <div className="section_btn">
                      <Link
                        to=""
                        className="btn fill-btn_gradient fill-btn_gradient-pink"
                      >
                        <span>Choose Plan</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Package;
