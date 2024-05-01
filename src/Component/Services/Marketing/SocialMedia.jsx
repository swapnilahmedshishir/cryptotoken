import HeroText from '../../UniversalComponent/HeroText/HeroText'
import ServicesComponent from '../../UniversalComponent/ServiceUniCom/ServicesComponent'

const SocialMedia = () => {
  return (
    <>
    <div className="univarsal_div">
        <div className="container">
          <HeroText
            heroText={{ text1: "Services/", text2: "Management", description: "Your One-Stop Digital Shop.  We offer a complete suite of services including Management, Marketing, Development, Design, Listing, and customizable Packages to  empower your business for success in the digital age." }}
          />
          
            <ServicesComponent 
            services={{
              img:"Tojo images-26.png",
              title:"Social Media Marketing",
              text:"Spark Your Growth, With the Help of Our Social Media Marketing service. A comprehensive social media marketing strategy that engages your target audience and supports your long-term goals can help you get off to a great start for your brand.",
            }}
            />

            {/* blog text &#39; */}
          <div className='services_text'>
            <p>Social media marketing is the practice of using social media platforms to connect with your audience, build your brand, and drive business growth. It involves creating and sharing content on platforms like Facebook, Instagram, TikTok, Medium, Reddit, Telegram, Twitter, and LinkedIn to achieve marketing goals. By engaging with users, businesses can increase brand awareness, build relationships, drive website traffic, generate leads, and gain valuable insights into their audience&#39;s preferences and behaviour. Overall, social media marketing is a powerful tool for businesses to connect with customers and expand their reach in the digital age.</p>
            <p>At TOJO Global We Understand Social Media And We are a team of marketing Genius. Because:</p>
            <ul>
              <li>
              We know how to get around in a world that is always changing and come up with creative ideas that work.
              </li>
              <li>
              We know that Facebook or Twitter memes aren&#39;t the only thing that digital marketing is about.
              </li>
              <li>
              Building a bond with your audience is key. You need to do more than just get likes, comments, and shares. This means giving your business a voice, making content that people want to read, and interacting with your audience in a way that seems natural and real.
              </li>
              <li>
              Of course, it also means having a plan based on your specific goals, audience, and company persona.
              </li>
              
            </ul>
          </div>  
          

        </div>
      </div>

    </>
  )
}

export default SocialMedia