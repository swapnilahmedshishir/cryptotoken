import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    const container = document.querySelector(".animation-image");
    const image = container.querySelector("img");
    //   mousemove event handler
    const handleMouseMove = (e) => {
      const x = (e.clientX - container.offsetLeft) / container.offsetWidth;
      const y = (e.clientY - container.offsetTop) / container.offsetHeight;

      const moveX = (x - 0.5) * 30; // Adjust the multiplier for desired movement range
      const moveY = (y - 0.5) * 30; // Adjust the multiplier for desired movement range

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
      {/* ================================================================================
                  about section 
=========================================================================== */}
      <div className="about_div animation-image">
        <div className="container">
          <div className="row about_row_style">
            <div className="col-sm-12 col-md-6 about_col_image_style col_image_style ">
              <img
                src="Images/banner/Hero-01.png"
                alt="banner_img4.png"
                className=""
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
    </>
  );
};

export default About;
