import HeroText from "../../UniversalComponent/HeroText/HeroText";
import ServicesComponent from "../../UniversalComponent/ServiceUniCom/ServicesComponent";

const Listing = () => {
  return (
    <>
      <div className="univarsal_div">
        <div className="container">
          <HeroText
            heroText={{
              text1: "Services/",
              text2: "Listing",
              description:
                "Your One-Stop Digital Shop.  We offer a complete suite of services including Management, Marketing, Development, Design, Listing, and customizable Packages to  empower your business for success in the digital age.",
            }}
          />

          <ServicesComponent
            services={{
              img: "Tojo images-25.png",
              title: "Effortless listing domination",
              text: "With TOJO Global's advanced listing of cryptocurrency approach, you can dominate the market and maximize sales by optimizing your online presence.",
            }}
          />

          {/* blog text &#39; */}
          <div className="services_text">
            <p>
            at Tojo Global, we have a dedicated team that specializes in listing services. We know that getting a project listed on big kexchanges can be hard and take a lot of time. We know how to deal with these problems and get your project listed quickly and easily because our team has done it before. We keep in close touch with exchange providers and follow their rules and requirements. We also help and guide you through the whole selling process, from getting the paperwork ready to handling the listing fee. Our help will help your project meet more people and get more trades, which can eventually lead to more adoption and success.
            </p>
            <p>
            Our mission is to give value to our clients by providing top-quality services. Advantages we offer:
            </p>
            <ul>
              <li>
              Cheapest prices for single or package listings.
              </li>
              <li>
              Fast service. Avoid the chance of delays and speed up the clearance process.
              </li>
              <li>
              Positioning in queue ahead of others.
              </li>
              <li>
              No extra charges for promotion and marketing.
              </li>
            </ul>
            <p>
            Choose TOJO Global for a seamless path to market dominance, where your listings become the cornerstone of your success.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Listing;
