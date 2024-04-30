import { Link } from "react-router-dom"
import HeroText from "../UniversalComponent/HeroText/HeroText"

const BlogPage = () => {
  return (
    <>
        <div className="univarsal_div">
        <div className="container">         
          <HeroText heroText={{ text1:'Blog', text2:'', description:""}}/>

        
        {/* blog text*/}
        <div className="blog_section">
          <div className="row">
            <div className="col-sm-6 col-md-4">
             <div className="blog_div">
                <img src="Images/banner/Tojo images-16.png" alt="blog1imge"/>
                <Link to=''>
                <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, nemo?</h4>
                </Link>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A minus nam rem doloribus consequuntur, vero corrupti reprehenderit vitae neque accusamus, ab praesentium blanditiis assumenda quasi?</p>
             </div>

            </div>
            <div className="col-sm-6 col-md-4">
             <div className="blog_div">
                <img src="Images/banner/Tojo images-14.png" alt="blog1imge"/>
                <Link to=''>
                <h4>Lorem ipsum dolor sit, </h4>
                </Link>
                
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A minus nam rem doloribus consequuntur, vero corrupti reprehenderit vitae neque accusamus, ab praesentium blanditiis assumenda quasi?</p>
             </div>

            </div>
            <div className="col-sm-6 col-md-4">
             <div className="blog_div">
                <img src="Images/banner/Tojo images-15.png" alt="blog1imge"/>
                <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A minus nam rem doloribus consequuntur, vero corrupti reprehenderit vitae neque accusamus, ab praesentium blanditiis assumenda quasi?</p>
             </div>

            </div>
            



         </div>
        </div>


        </div>
      </div>

    </>
  )
}

export default BlogPage