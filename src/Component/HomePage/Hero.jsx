import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import Typed from "typed.js";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    // Initialize Typed.js
    const typed = new Typed(".hero_multiple_text", {
      strings: [
        "startups",
        "small businesses",
        "B2B companies",
        "cryptocurrency",
        "blockchain",
        "fintech",
      ],
      typeSpeed: 90,
      backSpeed: 90,
      backDelay: 890,
      loop: true,
    });

    // Cleanup function to destroy Typed.js instance when component unmounts
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <div className="hero_div">
        <div className="container hero_row_style">
          <div className="hero_col_text_style">
            <div className="hero_text_style">
              <h1>
                Empowering Industries for success with Tojo Global : Unlocking
                maximum potential and growth
              </h1>
              <p>
                Welcome to TOJO Global We specialize in providing professional
                services of marketing, management, designing,
                developments, listing and many more for{" "}
                <span className="hero_multiple_text"></span>
                <br />
                Let&#39;s work together to move your company forward.
              </p>
            </div>

            <div className="hero_btn_style">
              <Link to="/" className="hero_btn1">
                <button className="custombtn">Request A Free Call</button>
              </Link>
              <Link to="/" className="hero_btn2">
                <button className="getStartedBtn">
                  Get started
                  <span className="getStartedBtn_span">
                    <FaArrowRight className="ion-icon" />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* ================================================================================
                  ai service section 
=========================================================================== 

        <div className="ai_service">
          <div className="container">
            <div className="row AiService_row_image_style">
              <div className="col-6  col-md-2 AiService_col_image_style">
                <img src="Images/logos/Defined.ai.png" alt="Defined AI" />
              </div>
              <div className="col-6 col-md-2 AiService_col_image_style">
                <img src="Images/logos/DATAOCEAN AI.png" alt="DATAOCEAN" />
              </div>
              <div className="col-6 col-md-2 AiService_col_image_style ">
                <img src="Images/logos/Hugging-Face.png" alt="Hugging-Face" />
              </div>
              <div className="col-6 col-md-2 AiService_col_image_style">
                <img src="Images/logos/Databricks.png" alt="Databricks" />
              </div>
              <div className="col-6 col-md-2 AiService_col_image_style">
                <img src="Images/logos/Surge-AI.png" alt="Surge-AI" />
              </div>
            </div>
          </div>
        </div>
        */}
      </div>
    </>
  );
};

export default Hero;
