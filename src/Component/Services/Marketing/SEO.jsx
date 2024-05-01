import HeroText from '../../UniversalComponent/HeroText/HeroText'
import ServicesComponent from '../../UniversalComponent/ServiceUniCom/ServicesComponent'

const SEO = () => {
  return (
    <>
    <div className="univarsal_div">
        <div className="container">
          <HeroText
            heroText={{ text1: "Services/", text2: "Marketing", description: "Your One-Stop Digital Shop.  We offer a complete suite of services including Management, Marketing, Development, Design, Listing, and customizable Packages to  empower your business for success in the digital age." }}
          />
          
            <ServicesComponent 
            services={{
              img:"Tojo images-06.png",
              title:"SEO Marketing",
              text:"Use our innovative SEO services to unlock the power of organic search results. Our business can assist you in employing one of the most effective marketing methods available to you to appear in search results and get discovered by potential clients. ",
            }}
            />

            {/* blog text &#39; */}
          <div className='services_text'>
            <p>Search engine optimization isn&#39;t just stuffing your content full of keywords and hopes for the best anymore. Understanding how search engines like Google and Bing work, what users are looking for, and how to write content that meets those needs is important in this complicated and always-changing area. The right SEO company can help you make it easier.</p>
            <p>The first thing we do is take the time to learn all about your business. This includes your story, your goals, and the problems you&#39;re facing. We want to know everything about your users, though. There is a real person with wants, needs, and pain points behind every search and click. We can start making an SEO plan for your website that will get it seen by the people who will be most interested in your business&#39;s ads once we know who they are. We don&#39;t stop there, either. We also offer ongoing help and maintenance to make sure your site keeps running at its best.</p>            
          </div>  
          

        </div>
      </div>

    </>
  )
}

export default SEO