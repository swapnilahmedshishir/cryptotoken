import HeroText from "../../UniversalComponent/HeroText/HeroText";

const Package = () => {
  return (
    <>
      <div className="univarsal_div">
        <div className="container">
          <HeroText
            heroText={{
              text1: "Services/",
              text2: "Package",
              description:
                "We understand all size fits doesn’t work. Check out our full range of service deals that are made to fit your needs. From us, you can get cheap deals for marketing, management, design, development, and listing. Our expert solutions are made to help cryptocurrency, blockchain, fintech, startups, small businesses, and B2B projects grow and succeed. They can help your business reach its full potential.",
            }}
          />

          {/* package plan text */}
          <div>
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4 services_col_style">
              <div className="services_col_div_style">
                <div>

                </div>
                
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 services_col_style">
              <div className="services_col_div_style">
                <div>
                  
                </div>
                
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-4 services_col_style">
              <div className="services_col_div_style">
                
               <div>

               </div>
              </div>
            </div>

           
            

            
          </div>
          </div>
        
        </div>
      </div>
    </>
  );
};

export default Package;
