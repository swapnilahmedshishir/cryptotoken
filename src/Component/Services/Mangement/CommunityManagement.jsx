import HeroText from "../../UniversalComponent/HeroText/HeroText";
import ServicesComponent from "../../UniversalComponent/ServiceUniCom/ServicesComponent";

const CommunityManagement = () => {
  return (
    <>
      <div className="univarsal_div">
        <div className="container">
          <HeroText
            heroText={{
              text1: "Services/",
              text2: "Management",
              description:
                "Your One-Stop Digital Shop.  We offer a complete suite of services including Management, Marketing, Development, Design, Listing, and customizable Packages to  empower your business for success in the digital age.",
            }}
          />

          <ServicesComponent
            services={{
              img: "Tojo images-04.png",
              title1: "Community",
              title2: "Management ",
              text: "Empower Your Community with TOJO Global's Expert Management. We are your Trusted Partner for Comprehensive Community Management Solutions.",
            }}
          />

          {/* blog text*/}
          <div className="services_text">
            <p>
              TOJO Global&#39;s 24/7 community management skills can help you
              improve your online profile. Our wide range of skills includes
              marketing, management, design, development, crypto, blockchain,
              B2B, small business, startup, and fintech. You can trust us to
              reflect your brand well and answer all of your questions quickly
              and professionally. Working with us means giving the management of
              your community to a dedicated team that is available 24 hours a
              day, seven days a week. What makes us different:
            </p>
            <ul>
              <li>
                Expertise in Many Areas: Our team is skilled in many areas,
                including marketing, management, design, development, crypto,
                blockchain, B2B, small business, startup, and fintech. We
                provide well-informed and effective solutions.
              </li>
              <li>
                Quick Support: Our experts are always ready to answer questions
                quickly, making sure that your group gets help right away.
              </li>
              <li>
                Seamless Representation: Let us speak for your business and make
                sure you get consistent, professional answers.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommunityManagement;
