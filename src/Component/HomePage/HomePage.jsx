import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <>
     <div className="hero_div">
        <div className='container'>
        <div className="row hero_row_style">
    <div className="col-sm-12 col-md-6 hero_col_text_style">
      <strong>Empowering Industries for success with TOJO: Unlocking maximum potential and growth</strong>
      <p>Wellcome to TOJO Global! We specialize in providing professional services of marketing, management, designing, developments,listing and many more for startups, small businesses, B2B companies, cryptocurrency, blockchain,fintech etc. Let&#39;s work together to move your company forward.</p>
      <Link to='/'><button className='custombtn'>  GET STARTED </button></Link>
    </div>
    <div className="col-sm-12 col-md-6 hero_col_image_style ">
      <img src="Images/Hero-01.png" alt="" className="animationY_style"/>
    </div>
    </div>
        </div>
      </div>
      
    </>
  )
}

export default HomePage
