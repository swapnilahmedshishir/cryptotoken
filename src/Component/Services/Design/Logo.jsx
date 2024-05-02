import HeroText from "../../UniversalComponent/HeroText/HeroText";
import ServicesComponent from "../../UniversalComponent/ServiceUniCom/ServicesComponent";

const Logo = () => {
  return (
    <>
      <div className="univarsal_div">
        <div className="container">
          <HeroText
            heroText={{
              text1: "Services/",
              text2: "Design",
              description:
                "Your One-Stop Digital Shop.  We offer a complete suite of services including Management, Marketing, Development, Design, Listing, and customizable Packages to  empower your business for success in the digital age.",
            }}
          />

          <ServicesComponent
            services={{
              img: "Tojo images-22.png",
              title: "Logo Design",
              text: "Transform your brand identity with TOJO Global's expert logo design services. Craft memorable logos that set your business apart and resonate with your audience.",
            }}
          />

          {/* blog text &#39; */}
          <div className="services_text">
            <p>
              Logo design is the process of creating a unique visual symbol that
              represents a business or brand. It serves as a visual identifier
              that helps customers recognize and remember the brand. A
              well-designed logo communicates the company&#39;s values,
              personality, and mission, fostering trust and brand loyalty among
              customers. It plays a crucial role in brand recognition and
              differentiation in a crowded marketplace, helping businesses stand
              out and leave a memorable impression. Ultimately, a professionally
              designed logo contributes to building a strong brand identity,
              which is essential for business growth and success.
            </p>
            <p>
              At TOJO Global, we specialize in designing unique and impactful
              logos that represent your brand identity. Here&#39;s why you
              should choose us:
            </p>
            <ul>
              <li>
                Customized Creativity: Our team of talented designers
                collaborates closely with you to create a logo that captures the
                essence of your business and resonates with your target
                audience.{" "}
              </li>
              <li>
                Timeless Appeal: We focus on creating logos that stand the test
                of time, ensuring longevity and relevance for your brand in the
                ever-evolving market.{" "}
              </li>
              <li>
                Versatile Solutions: Whether you&#39;re a small startup or a
                large corporation, we offer logo design services tailored to
                your specific needs and preferences.{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Logo;
