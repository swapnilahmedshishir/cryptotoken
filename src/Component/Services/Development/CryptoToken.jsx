import HeroText from "../../UniversalComponent/HeroText/HeroText";
import ServicesComponent from "../../UniversalComponent/ServiceUniCom/ServicesComponent";

const CryptoToken = () => {
  return (
    <>
      <div className="univarsal_div">
        <div className="container">
          <HeroText
            heroText={{
              text1: "Services/",
              text2: "Development",
              description:
                "Your One-Stop Digital Shop.  We offer a complete suite of services including Management, Marketing, Development, Design, Listing, and customizable Packages to  empower your business for success in the digital age.",
            }}
          />

          <ServicesComponent
            services={{
              img: "Tojo images-11.png",
              title1: "Crypto Token",
              title2: "Development",
              text: "Build Your Future: Custom Crypto Token Solutions from TOJO Global. Embark on your journey to success with TOJO Global's specialized crypto token development services.",
            }}
          />

          {/* blog text &#39; */}
          <div className="services_text">
            <p>
              Crypto token development involves creating digital assets on
              blockchain networks. These tokens can represent various assets or
              utilities within a business ecosystem. They facilitate
              transactions, enable fundraising through token sales, and foster
              community engagement. By leveraging tokenization, businesses can
              enhance liquidity, access new sources of funding, and build
              decentralized networks, ultimately driving growth and innovation.
            </p>
            <p>This is why you should choose us:</p>
            <ul>
              <li>
                Expert handwork: Our team has a lot of experience in crypto,
                blockchain, and development, which makes us the best at what we
                do.
              </li>
              <li>
                We have finely experienced developers who build crypto tokens
                according to the client&#39; s needs to grow their business. We
                mainly build crypto tokens on ER20, BEP20, and TRC20 chains..
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CryptoToken;
