import { useEffect } from "react";
import FaqItem from "../UniversalComponent/FaqItems/FaqItem";

const Faq = () => {
  // useEffect
  useEffect(() => {
    const container = document.querySelector(".faq_row_style");
    const image = container.querySelector("img");
    //   mousemove event handler
    const handleMouseMove = (e) => {
      const x = (e.clientX - container.offsetLeft) / container.offsetWidth;
      const y = (e.clientY - container.offsetTop) / container.offsetHeight;

      const moveX = (x - 0.3) * 7; // Adjust the multiplier for desired movement range
      const moveY = (y - 0.3) * 7;

      image.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };

    const handleMouseLeave = () => {
      image.style.transform = "none"; // Reset image position when mouse leaves the container
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup function to remove event listeners when component unmounts
    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
  return (
    <>
      {/* demo about start */}
      <div className="common-div-style faq_row_style">
        <div className="container faq_container_style">
          <div className="col_text_style header-one-style">
            <strong>
              <span>FAQ</span>
            </strong>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-6 faq_col_image_style">
              <img
                src="Images/banner/faq.png"
                alt="banner_img4.png"
                className=""
              />
            </div>

            <div className="col-sm-12 col-md-6 about_col_text_style col_text_style">
              <div className="accordion">
                {/* all faq items */}
                <FaqItem accordion={{title:"What is TOJO Global?" , content:"TOJO Global is a multifaceted business service provider, offering expert services in marketing, management, design, development, and listing for clients in blockchain, cryptocurrency, fintech, startups, small businesses, and B2B sectors.With a focus on innovation and customised solutions, we help businesses grow in today's quickly changing financial market. Our dedicated team is committed to providing excellence and driving success for our global clients."}}/>

                <FaqItem accordion={{title:"What services we provide?" , content:"TOJO Global provides a broad range of services including marketing, management, design, development, and listing services tailored for businesses in the blockchain, cryptocurrency, fintech, startup, small business,B2B etc sectors.Our professional members combine industry knowledge with new strategies to move your company forward and achieve long-term success in today's competitive market scenario."}}/>

                <FaqItem accordion={{title:"How does TOJO Global ensure your success?" , content:"TOJO Global uses industry expertise, we have an extremely talented team who offer new solutions and collaborate to create customized strategies and solutions. We pride ourselves on crafting customized strategies and solutions that not only meet but exceed client expectations, driving unparalleled success in today's dynamic business environment."}}/>

                <FaqItem accordion={{title:"What kinds of businesses does TOJO Global focus on? " , content:"TOJO Global helps companies in fields like blockchain, Cryptocurrency, fintech, startups, small businesses, B2B companies, and many more that want to grow and be successful by coming up with new ways to do things. With a commitment to staying ahead of industry trends and providing specific solutions, we help businesses prosper in a constantly changing environment."}}/>

                <FaqItem accordion={{title:"What is blockchain?" , content:"Blockchain is a digital record that keeps track of activities safely and openly across a decentralised network of computers. This lets people do business with each other directly, without the need for middlemen."}}/>

                <FaqItem accordion={{title:"What kind of  marketing services do TOJO Global provide" , content:"TOJO Global offers many different marketing services, such as strategy planning, digital marketing campaigns, content creation, branding projects, and social media management. We use data-driven insights and new strategies to improve campaign performance and get measurable results for our clients in a wide range of industries. Our goal is to get people to connect with and stay loyal to our brands."}}/>
                


              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
