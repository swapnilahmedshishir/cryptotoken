import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="hero_div">
        <div className="container">
          <div className="row hero_row_style">
            <div className="col-sm-12 col-md-6 hero_col_text_style">
              <strong>
                Empowering Industries for success with TOJO: Unlocking maximum
                potential and growth
              </strong>
              <p>
                Wellcome to TOJO Global! We specialize in providing professional
                services of marketing, management, designing,
                developments,listing and many more for startups, small
                businesses, B2B companies, cryptocurrency, blockchain,fintech
                etc. Let&#39;s work together to move your company forward.
              </p>
              <Link to="/">
                <button className="custombtn"> GET STARTED </button>
              </Link>
            </div>
            <div className="col-sm-12 col-md-6 hero_col_image_style ">
              <img
                src="Images/Hero-01.png"
                alt=""
                className="animationY_style"
              />
            </div>
          </div>

          <div className="ai_service">   
          <div className="container">
          <div className="row">            
            <div className="col-sm-12 col-md-2">
              <img
                src="Images/Databricks.png"
                alt="Databricks"
                className="animationY_style"
              />
            </div>
            <div className="col-sm-12 col-md-2 hero_col_image_style ">
              <img
                src="Images/DATAOCEAN AI.png"
                alt="DATAOCEAN"
                className="animationY_style"
              />
            </div>
            <div className="col-sm-12 col-md-2 hero_col_image_style ">
              <img
                src="Images/Surge-AI.png"
                alt="Surge-AI"
                className="animationY_style"
              />
            </div>
            <div className="col-sm-12 col-md-2 hero_col_image_style ">
              <img
                src="Images/Defined.ai.png"
                alt="Defined AI"
                className="animationY_style"
              />
            </div>
            <div className="col-sm-12 col-md-2 hero_col_image_style ">
              <img
                src="Images/Hugging-Face.png"
                alt=""
                className="animationY_style"
              />
            </div>
            </div> 
          </div> 

          </div>
        </div>
      </div>

      <div className="about_div">
        <div className="container">
          <div className="row about_row_style">
          <div className="col-sm-12 col-md-6 about_col_image_style col_image_style ">
              <img
                src="public/Images/banner_img4.png"
                alt="banner_img4.png"
                className="animationX_style"
              />
            </div>

            <div className="col-sm-12 col-md-6 about_col_text_style col_text_style">
              <strong >
              <span>About</span>  Tojo global 
              </strong>
              <div className="border_style"></div>
              <p>
              We redefine excellence in business solution at TOJO Global. Our unique services in marketing, management, design, development, and listing enables us to support industries in the blockchain, fintech, cryptocurrency, small company, and B2B sectors. Discover success, efficiency, and innovation with TOJO Global—where your goals become our mission. Welcome to a new era of business transformation.
              </p>              
            </div>           
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
