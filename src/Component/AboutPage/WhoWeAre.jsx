import { useEffect } from "react";

const WhoWeAre = () => {
    useEffect(() => {
        const container = document.querySelector(".Who-We-Are-section-image");
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
                  Who We Are section 
=========================================================================== */}
      <div className="about_div Who-We-Are-section-image">
        <div className="container">
          <div className="row about_row_style">
            <div className="col-sm-12 col-md-6 about_col_image_style col_image_style ">
              <img
                src="Images/banner/Tojo-images-01.png"
                alt="banner_img4.png"
                className=""
              />
            </div>

            <div className="col-sm-12 col-md-6 about_col_text_style col_text_style">
              <div className="Who_We_Are_text_div">
              <div className="Who_We_Are_border_style"></div> <span>WHO WE ARE</span>
              </div>

              <h2 className="Who_We_Are_text_heading">
              Innovative Solutions for Business Growth
              </h2>
              
              <p>
              Tojo Global is a successful company that specialises in custom services and is exceptionally skilled at marketing, management, design, and development. We help businesses grow by coming up with new ideas, being experts in our field, and always trying to be the best. We focus on cryptocurrency, blockchain, fintech, startups, small businesses, B2B, and much more. Welcome to a journey that will change you, where your goals will become our mission.

              </p>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default WhoWeAre
