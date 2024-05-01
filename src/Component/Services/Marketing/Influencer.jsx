import HeroText from '../../UniversalComponent/HeroText/HeroText'
import ServicesComponent from '../../UniversalComponent/ServiceUniCom/ServicesComponent'

const Influencer = () => {
  return (
    <>
    <div className="univarsal_div">
        <div className="container">
          <HeroText
            heroText={{ text1: "Services/", text2: "Management", description: "Your One-Stop Digital Shop.  We offer a complete suite of services including Management, Marketing, Development, Design, Listing, and customizable Packages to  empower your business for success in the digital age." }}
          />
          
            <ServicesComponent 
            services={{
              img:"Tojo images-08.png",
              title:"Influencer Marketing",
              text:"Take advantage of innovative influencer marketing strategies to connect and interact with your target audience.",
            }}
            />

            {/* blog text &#39; */}
          <div className='services_text'>
            <p>It&#39;s no secret that influencer marketing is one of the best ways to drive marketing in our highly linked world. But it&#39;s important to work with influencers whose goals, vision, and values are very similar to those of your brand. This is because being real is key to success. People trust suggestions from influencers more than branded social media posts, which means your business can reach new audiences that are already interested. If you need nano influencers, micro-influencers, macro influencers, or huge influencers, TOJO Global has what you need. Moreover,We are the best choice for brands that want to grow through influencer marketing because we have a big database of influencers from almost every niche you can think of.</p>
            <p>We are experts in strategies that:</p>
            <ul>
              <li>
              Reaching and engaging new audiences with high-quality material is what we do best.
              </li>
              <li>
              Show that you are an expert in your field and build your credibility.
              </li>
              <li>
              Get past people who don&#39;t see ads and improve your marketing.
              </li>
              <li>
              we do deals directly with the best influencers you need. We also ensure maximum security throughout the whole process.
              </li>
              <li>
              If you deal directly with us, you can get your service at the cheapest price in market for sure.
              </li>
            </ul>
          </div>  
          

        </div>
      </div>

    </>
  )
}

export default Influencer