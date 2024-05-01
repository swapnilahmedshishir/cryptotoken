import HeroText from '../../UniversalComponent/HeroText/HeroText'
import ServicesComponent from '../../UniversalComponent/ServiceUniCom/ServicesComponent'

const Content = () => {
  return (
    <>
    <div className="univarsal_div">
        <div className="container">
          <HeroText
            heroText={{ text1: "Services/", text2: "Management", description: "Your One-Stop Digital Shop.  We offer a complete suite of services including Management, Marketing, Development, Design, Listing, and customizable Packages to  empower your business for success in the digital age." }}
          />
          
            <ServicesComponent 
            services={{
              img:"Tojo images-07.png",
              title:"Content Marketing",
              text:"At TOJO Global, our specialty is using strategic content marketing to elevate your brand. boost your brand with our expert content marketing solutions.",
            }}
            />

            {/* blog text &#39; */}
          <div className='services_text'>
            <p>Content marketing is the process of making and sharing useful content to attract and keep a specific group. It helps businesses grow by making people more aware of their brand, building authority and trust, keeping audiences interested and growing them, and boosting conversions and sales. Businesses can build relationships with their audience by consistently giving them useful information. This can help them through the buyer&#39;s journey and eventually lead to growth and success.</p>
            <p>Strategic content marketing is what we do best at TOJO Global to help your brand stand out. This is why you should pick us:</p>
            <ul>
              <li>
              Customized Plans: Our team creates unique content marketing plans for your brand based on its goals and target group.
              </li>
              <li>
              Diverse Skills: We offer a complete way to create and share content because we have skills in crypto, blockchain, B2B, small business, startups, and fintech, as well as marketing, management, design, and development.
              </li>
              <li>
              Results-driven approach: We focus on getting you real results by using compelling content to raise awareness of your brand, get people to interact with it, and turn it into customers.
              </li>
            </ul>
          </div>  
          

        </div>
      </div>

    </>
  )
}

export default Content