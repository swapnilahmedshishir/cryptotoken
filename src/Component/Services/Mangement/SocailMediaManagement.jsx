import HeroText from '../../UniversalComponent/HeroText/HeroText'
import ServicesComponent from '../../UniversalComponent/ServiceUniCom/ServicesComponent'

const SocailMediaManagement = () => {
  return (
    <>
    <div className="univarsal_div">
        <div className="container">
          <HeroText
            heroText={{ text1: "Services/", text2: "Management", description: "Your One-Stop Digital Shop.  We offer a complete suite of services including Management, Marketing, Development, Design, Listing, and customizable Packages to  empower your business for success in the digital age." }}
          />
          
            <ServicesComponent 
            services={{
              img:"Tojo images-05.png",
              title:"Social Media handle Management",
              text:"Maximize Your Online Influence with TOJO Global's Social Media Handle Management and unleash your brand potential. ",
            }}
            />

            {/* blog text &#39; */}
          <div className='services_text'>
            <p>We do more than just post; we create an immersive social media experience that fits your business. In our all-around method, we create content, come up with ways to get people to interact with it, and target specific audiences. With a close eye on data, we are always making changes to our strategies to get the best results. When you work with TOJO Global, your social media will become a powerful tool for growth and involvement.</p>
            <p>We are experts at managing your social media accounts so that your online profile is consistent across all platforms. What makes us different:</p>
            <ul>
              <li>
              Comprehensive Management: We take care of every part of your social media profile, from making content to planning ways to get people to interact with you.
              </li>
              <li>
              Tailored Solutions: Our team makes sure that the strategies we use fit the style, goals, and audience of your brand.
              </li>
              <li>
              Approach Based on Data: We use analytics to keep improving campaigns so that they reach more people, get more interaction, and lead to more sales. You can count on TOJO Global to help you improve your social media skills, so you can focus on other ways to grow your business.
              </li>
            </ul>
          </div>  
          

        </div>
      </div>

    </>
  )
}

export default SocailMediaManagement