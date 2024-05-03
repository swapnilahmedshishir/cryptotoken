import HeroText from "../../UniversalComponent/HeroText/HeroText";
import ServicesComponent from "../../UniversalComponent/ServiceUniCom/ServicesComponent";

const Stationery = () => {
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
              img: "Tojo images-16.png",
              title1: "Stationery",
              title2: "Design",
              text: "Elevate your brand's professionalism and consistency with custom stationery designs by TOJO Global. Leave a lasting impression on clients and customers while reinforcing your brand identity.",
            }}
          />

          {/* blog text &#39; */}
          <div className="services_text">
            <p>
              Stationery design involves creating branded materials such as
              business cards, letterheads, envelopes, and other printed items
              that represent a company&#39;s identity. These designs help
              establish a professional and cohesive brand image across all
              communication channels. By conveying professionalism and
              consistency, stationary design enhances brand recognition and
              credibility, leaving a lasting impression on clients and
              customers. This consistency helps build trust and loyalty,
              ultimately contributing to business growth by reinforcing the
              brand&#39;s identity and values.
            </p>
            <p>
              At TOJO Global, we specialize in creating professional and
              eye-catching stationery designs that leave a lasting impression.
              Here&#39;s why you should choose us:
            </p>
            <ul>
              <li>
                Tailored Brand Representation: Our expert designers work closely
                with you to develop stationery designs that align with your
                brand identity and messaging, ensuring consistency across all
                communications.{" "}
              </li>
              <li>
                Attention to Detail: From business cards to letterheads, we pay
                meticulous attention to every element of your stationery design,
                ensuring quality and professionalism in every piece.{" "}
              </li>
              <li>
                Versatile Solutions: Whether you&#39;re a startup or an
                established business, we offer flexible stationery design
                services to suit your unique needs and preferences.{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stationery;
