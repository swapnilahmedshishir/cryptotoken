import HeroText from "../../UniversalComponent/HeroText/HeroText";
import ServicesComponent from "../../UniversalComponent/ServiceUniCom/ServicesComponent";

const AppDev = () => {
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
              img: "Tojo images-13.png",
              title: "App Development",
              text: "Achieve every opportunity for growth with our creative mobile app development services. On any platform, reach and interact with audiences. ",
            }}
          />

          {/* blog text &#39; */}
          <div className="services_text">
            <p>
              App development involves creating software applications for mobile
              devices. These apps provide businesses with a direct and
              personalized way to engage customers, enhance accessibility to
              products and services, and increase brand visibility. By offering
              convenient access and engaging features, mobile apps can drive
              customer loyalty, sales, and business growth.
            </p>
            <p>
              Your business will gain from app development services that put the
              user experience first in today &#39;s mobile-first world. As an
              experienced mobile app developer business, we help our clients do
              just that by bringing the web experience to mobile devices for
              your customers. We offer:
            </p>
            <ul>
              <li>Services for Developing iPhone Applications </li>
              <li>Development Services for Android Apps </li>
              <li>Services for Developing Hybrid Apps </li>
              <li>Advancing services for Developing Web Applications </li>
              <li>Consulting Services for Mobile App Development </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppDev;
