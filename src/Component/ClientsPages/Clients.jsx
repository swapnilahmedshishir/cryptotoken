
import HeroText from "../UniversalComponent/HeroText/HeroText"
import ClinetImage from "./ClinetImage"

const Clients = () => {
  return (
    <>
    <div className="univarsal_div">
        <div className="container">
          <HeroText heroText={{text1:'Happy', text2:'Clients', description:'Your one-stop digital place. We provide a full range of services, including marketing, management, development, design, listing, and customizable packages, to empower your business for success in the digital age.'}}/>

        
        {/* other text */}
        <div className="client_image_div">
        <div className="row d-flex justify-content-center align-items-center">
          <ClinetImage imgName={'logo-4 (1) 1.png'}/>
          <ClinetImage imgName={'logo-3 1.png'}/>
          <ClinetImage imgName={'logo-2 1.png'}/>
          <ClinetImage imgName={'logo-1 (1) 1.png'}/>
          <ClinetImage imgName={'logo_ultron 1.png'}/>
          <ClinetImage imgName={'logo-2 (1) 1.png'}/>
          <ClinetImage imgName={'logo-tozex02 1.png'}/>
          <ClinetImage imgName={'logo_innovise03 1.png'}/>
          <ClinetImage imgName={'logo_brain02 1.png'}/>
          
        </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Clients