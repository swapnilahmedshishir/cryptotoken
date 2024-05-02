import HeroText from "../UniversalComponent/HeroText/HeroText";
import JobOffer from "./JobOffer";

const CareerPage = () => {
  return (
    <>
      <div className="univarsal_div">
        <div className="container">
          <HeroText
            className="Career"
            heroText={{
              text1: "Career:",
              text2: "Build Your Future with Us",
              description:
                "TOJO Global is a leading digital solutions provider, offering a comprehensive suite of services in Management, Marketing, Development, Design, and Listing. We're a passionate team of experts dedicated to helping businesses thrive in the digital age.",
            }}
          />

          {/* other text */}
          <div className="row about_row_style">
            <div className="col-sm-12 col-md-6 about_col_image_style col_image_style ">
              <img
                src="Images/banner/Tojo images-03.png"
                alt="banner_img4.png"
                className=""
              />
            </div>

            <div className="col-sm-12 col-md-6 about_col_text_style col_text_style">
              <h2 className="Who_We_Are_text_heading text-white">
                Why Join Us?
              </h2>

              <p className="career_para_text">
                Grow with us! Learn, innovate, and make a real impact.
                Collaborative environment, competitive benefits, and exciting
                opportunities await.
              </p>
              <ul className="text-white">
                <li>Continuous Learning Opportunities </li>
                <li>Mentorship and Collaboration </li>
                <li>Work on Meaningful Projects </li>
                <li>Be at the Forefront of Innovation </li>
                <li>Collaborative and Fun Work Environment </li>
                <li>Competitive Benefits Package</li>
              </ul>
            </div>
          </div>

          {/* job opertunity */}

          <div className="job_section">
            <JobOffer
              JobOffer={{
                jobTitle: "Graphic Designer",
                position: "Design",
                jobTime: "Full Time",
              }}
            />
            <JobOffer
              JobOffer={{
                jobTitle: "Web Developer",
                position: "Web",
                jobTime: "Full Time",
              }}
            />
            <JobOffer
              JobOffer={{
                jobTitle: "Digital Marketer",
                position: "Marketing",
                jobTime: "Full Time",
              }}
            />
            <JobOffer
              JobOffer={{
                jobTitle: "Content Writer",
                position: "Writing",
                jobTime: "Full Time",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerPage;
