import HeroText from "../UniversalComponent/HeroText/HeroText";

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
        </div>
      </div>
    </>
  );
};

export default CareerPage;
