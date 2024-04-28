import { useEffect } from "react";

const OurValue = () => {
  useEffect(() => {
    const container = document.querySelector(".Our-Value-section-image");
    const image = container.querySelector(".bannerImage");
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
            <div className="col-sm-12 col-md-6 about_col_text_style">
              <div className="Who_We_Are_text_div">
                <div className="Who_We_Are_border_style"></div>{" "}
                <span>OUR VALUE</span>
              </div>

              <h2 className="Our_Value_text_heading">
                A melting pot for the best idea
              </h2>

              <div className="Our_Value_Services">
                <div className="Our_Value_Services_image_div">
                  <div className="Our_Value_Services_images_border"></div>
                  <div className="Our_Value_Services_image">
                    <img src="/Images/icons/Group.png" alt="Group2.png" />
                  </div>
                  <div className="Our_Value_Services_images_border"></div>
                  <div className="Our_Value_Services_image">
                    <img src="/Images/icons/Group1.png" alt="Group2.png" />
                  </div>

                  <div className="Our_Value_Services_image">
                    <img src="/Images/icons/Group2.png" alt="Group2.png" />
                  </div>
                </div>
                <div className="Our_Value_Services_text_div">
                  <div className="Our_Value_Services_text">
                    <h6>Integrity</h6>
                    <p>We hold ourself to a strong ethical and moral code</p>
                  </div>
                  <div className="Our_Value_Services_text">
                    <h6>Trust</h6>
                    <p>
                      We are dependable loyal and hard working to archive the
                      same goal.
                    </p>
                  </div>
                  <div className="Our_Value_Services_text">
                    <h6>Excellence</h6>
                    <p>
                      We consistenly strive to do high-quality work and give no
                      room for errore
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 about_col_image_style col_image_style Our_Value_image_style ">
              <img
                src="Images/banner/Tojo-images-02.png"
                alt="banner_img4.png"
                className="bannerImage"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurValue;
