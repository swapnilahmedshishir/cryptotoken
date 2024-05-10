import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FaArrowRight } from "react-icons/fa6";

const ArticalColum = (props) => {
  // props
  const { imgName, title, shortDes, Author } = props.articalInfo;

  return (
    <>
      <div className="col-sm-12 col-md-6 col-lg-4 blog_col_section">
        <Link
          to={title ? `/${title.replaceAll(/ /g, "-")}` : "/fallback-url"}
        >
          <div className="blog_col_div_style">
           <div className="blog_col_image_style">
           <img
              src={imgName}              
              alt="blog1imge"
              className="blog_img_style"
            />
           </div>
            <div className="blog_div_text_style">
            <p className="artical_author">{Author}</p>
              <h4>{title}</h4>              
              {/* <p>{shortDes}</p> */}
              <p>{`${shortDes.slice(0, 100)}` + "...."}</p>   
              <button className="readMoreBtn">
                Read more
                  <span className="readMoreBtn_span">
                    <FaArrowRight className="ion-icon" />
                  </span>
                </button>             
             </div>         
             {/* <div className="blog_button_div">
             <button className="readMoreBtn">
                Read more
                  <span className="readMoreBtn_span">
                    <FaArrowRight className="ion-icon" />
                  </span>
                </button></div>    */}
          </div>
        </Link>
      </div>
    </>
  );
};

ArticalColum.propTypes = {
  articalInfo: PropTypes.shape({
    imgName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    shortDes: PropTypes.string.isRequired,
    Author: PropTypes.string.isRequired,
  }).isRequired,
};

export default ArticalColum;
