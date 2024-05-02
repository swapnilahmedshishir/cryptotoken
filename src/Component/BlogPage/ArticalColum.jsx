import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const ArticalColum = (props) => {
  // props
  const { imgName, title, shortDes, Author } = props.articalInfo;

  return (
    <>
      <div className="col-sm-12 col-md-6 col-lg-4 blog_col_section">
        <Link
          to={title ? `/blog/${title.replaceAll(/ /g, "-")}` : "/fallback-url"}
        >
          <div className="blog_col_div_style">
            <img
              src={`Images/banner/${imgName}`}
              alt="blog1imge"
              className="blog_img_style"
            />
            <div className="blog_div_text_style">
              <h4>{title}</h4>

              <p>{Author}</p>
              <p>{`${shortDes.slice(0, 150)}` + "...."}</p>
            </div>
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
