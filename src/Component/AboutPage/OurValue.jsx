import { useEffect } from "react";

const OurValue = () => {
    useEffect(() => {
        const container = document.querySelector(".Our-Value-section-image");
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
                  Our Value section 
=========================================================================== */}
      <div className="about_div Our-Value-section-image">
        <div className="container">
          <div className="row about_row_style">            

            <div className="col-sm-12 col-md-6 about_col_text_style col_text_style">
              <div className="Who_We_Are_text_div">
              <div className="Who_We_Are_border_style"></div> <span>OUR VALUE</span>
              </div>

              <h2 className="Our_Value_text_heading">
              A melting pot for the best idea  
              </h2>
              
              <p>
              Search engine optimization isn&#39;t just stuffing your content full of keywords and hopes for the best anymore. Understanding how search engines like Google and Bing work, what users are looking for, and how to write content that meets those needs is important in this complicated and always-changing area. The right SEO company can help you make it easier.

The first thing we do is take the time to learn all about your business. This includes your story, your goals, and the problems you&#39;re facing. We want to know everything about your users, though. There is a real person with wants, needs, and pain points behind every search and click. We can start making an SEO plan for your website that will get it seen by the people who will be most interested in your business&#39;s ads once we know who they are. We don&#39;t stop there, either. We also offer ongoing help and maintenance to make sure your site keeps running at its best.


              </p>
            </div>
            <div className="col-sm-12 col-md-6 about_col_image_style col_image_style Our_Value_image_style ">
              <img
                src="Images/banner/Tojo-images-02.png"
                alt="banner_img4.png"
                className=""
              />
            </div>

          </div>
        </div>
      </div>
      
    </>
  )
}

export default OurValue
