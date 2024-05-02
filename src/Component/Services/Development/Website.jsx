import HeroText from "../../UniversalComponent/HeroText/HeroText";
import ServicesComponent from "../../UniversalComponent/ServiceUniCom/ServicesComponent";

const Website = () => {
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
              img: "Tojo images-12.png",
              title: "Website Development",
              text: "Customized web development services that transform your needs into solutions. Give your company a user-friendly website that helps you communicate with your customers. Being a complete website development firm, we provide customized solutions that broaden your audience. ",
            }}
          />

          {/* blog text &#39; */}
          <div className="services_text">
            <p>
              In this digital world, strong digital steps are needed. With years
              of experience, we know how to come up with new website options
              that help your business reach more people. We make
              high-performing, scalable digital goods using cutting-edge
              technology and an open creative process. We are proud to offer
              well-made, safe websites that help businesses build an unbeatable
              online presence. These websites can be anything from simple
              educational ones to custom apps and e-commerce sites.
            </p>
            <p>
              Our method is easy: we make websites that work well and are easy
              for people to use, so your customers keep coming back. We offer
            </p>
            <ul>
              <li>Custom Website Development</li>
              <li>E-commerce Website Development</li>
              <li>Third-Party API Development & Integration</li>
              <li>Web App Development</li>
              <li>Mobile App Development</li>
              <li>Intranet Development</li>
              <li>HTML5 Web Development</li>
              <li>Java Web Development</li>
              <li>React.js Web Development</li>
              <li>WordPress Web Development</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Website;
